import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, collection, addDoc, getDocs, query, where, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';

export default function Review() {
  const { uid } = useParams(); // revieweeUid
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [otherUser, setOtherUser] = useState(null);
  const [stars, setStars] = useState(0);
  const [hoverStars, setHoverStars] = useState(0);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetchingUser, setFetchingUser] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchUser() {
      if (!uid) return;
      try {
        const userRef = doc(db, 'users', uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setOtherUser(userSnap.data());
        } else {
          setError('User not found.');
        }
      } catch (err) {
        console.error("Error fetching user:", err);
        setError('Failed to load user details.');
      } finally {
        setFetchingUser(false);
      }
    }
    fetchUser();
  }, [uid]);

  const handleSubmit = async () => {
    if (stars === 0) {
      setError('Please select a star rating between 1 and 5.');
      return;
    }
    if (!currentUser) return;

    setLoading(true);
    setError('');

    try {
      // 1. Write to "reviews" collection
      await addDoc(collection(db, 'reviews'), {
        reviewerId: currentUser.uid,
        revieweeId: uid,
        stars: Number(stars),
        text: text.trim(),
        timestamp: serverTimestamp()
      });

      // 2. Query all reviews for this user to compute new average rating
      const q = query(collection(db, 'reviews'), where('revieweeId', '==', uid));
      const querySnapshot = await getDocs(q);
      
      let totalStars = 0;
      let reviewCount = 0;
      querySnapshot.forEach((doc) => {
        const rData = doc.data();
        totalStars += rData.stars || 0;
        reviewCount++;
      });
      
      const avgRating = reviewCount > 0 ? totalStars / reviewCount : 0;

      // 3. Get latest user details to increment sessionsCount and award badges
      const userRef = doc(db, 'users', uid);
      const userSnap = await getDoc(userRef);
      
      if (userSnap.exists()) {
        const userData = userSnap.data();
        const currentSessionsCount = userData.sessionsCount !== undefined 
          ? userData.sessionsCount 
          : (userData.sessionCount || 0);
        
        const newSessionsCount = currentSessionsCount + 1;
        let newBadges = [...(userData.badges || [])];

        // Award badge logic
        if (newSessionsCount >= 3 && avgRating >= 4) {
          if (!newBadges.includes("⭐ Top Mentor")) {
            newBadges.push("⭐ Top Mentor");
          }
        }
        if (newSessionsCount >= 1) {
          if (!newBadges.includes("🎓 First Session")) {
            newBadges.push("🎓 First Session");
          }
        }

        // Update reviewee's Firestore doc
        await updateDoc(userRef, {
          rating: avgRating,
          sessionsCount: newSessionsCount,
          sessionCount: newSessionsCount, // update both to be safe
          badges: newBadges
        });
      }

      // Navigate to matches on success
      navigate('/matches');
    } catch (err) {
      console.error("Error submitting review:", err);
      setError('An error occurred while submitting your review. Please try again.');
      setLoading(false);
    }
  };

  if (fetchingUser) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Rate your session
        </h2>
        {otherUser && (
          <p className="mt-2 text-center text-sm text-gray-600">
            with <span className="font-semibold text-blue-600">{otherUser.name}</span> from {otherUser.college}
          </p>
        )}
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-md rounded-xl sm:px-10 border border-gray-100">
          {error && (
            <div className="mb-4 bg-red-50 border-l-4 border-red-400 p-4 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Star Selection */}
          <div className="flex flex-col items-center mb-6">
            <span className="text-sm font-semibold text-gray-700 mb-2">Overall Rating</span>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <div
                  key={star}
                  onClick={() => setStars(star)}
                  onMouseEnter={() => setHoverStars(star)}
                  onMouseLeave={() => setHoverStars(0)}
                  className="cursor-pointer transition-transform duration-100 hover:scale-110 active:scale-95"
                >
                  <span className={`text-4xl transition-colors duration-100 ${
                    star <= (hoverStars || stars) ? 'text-yellow-400' : 'text-gray-300'
                  }`}>
                    ★
                  </span>
                </div>
              ))}
            </div>
            {stars > 0 && (
              <span className="text-xs text-gray-500 mt-2 font-medium">
                {stars} out of 5 stars selected
              </span>
            )}
          </div>

          {/* Text Input */}
          <div className="mb-6">
            <span className="block text-sm font-semibold text-gray-700 mb-2">
              Write a Review
            </span>
            <textarea
              rows="4"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Share details of your experience. Did they explain things clearly? Were they helpful?"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex space-x-3">
            <div
              onClick={() => navigate('/matches')}
              className="flex-1 text-center px-4 py-3 border border-gray-200 text-sm font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 cursor-pointer transition-colors shadow-sm"
            >
              Cancel
            </div>
            <div
              onClick={!loading ? handleSubmit : undefined}
              className={`flex-2 text-center px-6 py-3 text-sm font-medium rounded-xl text-white shadow-sm transition-colors cursor-pointer flex items-center justify-center ${
                loading 
                  ? 'bg-blue-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </>
              ) : 'Submit Review'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
