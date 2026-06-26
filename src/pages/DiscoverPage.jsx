// DiscoverPage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, serverTimestamp, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { getMatches } from '../services/matchingService';

export default function DiscoverPage() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUserData, setCurrentUserData] = useState(null);

  useEffect(() => {
    async function fetchMatches() {
      if (!currentUser) return;
      
      try {
        // Fetch the full currentUser doc first to get skillsWanted
        const userRef = doc(db, 'users', currentUser.uid);
        const userSnap = await getDoc(userRef);
        
        if (userSnap.exists()) {
          const userData = { uid: currentUser.uid, ...userSnap.data() };
          setCurrentUserData(userData);
          
          const matchResults = await getMatches(userData);
          setMatches(matchResults);
        }
      } catch (error) {
        console.error("Error fetching matches:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMatches();
  }, [currentUser]);

  const handleConnect = async (targetUid) => {
    try {
      const matchData = {
        user1: currentUser.uid,
        user2: targetUid,
        status: "pending",
        createdAt: serverTimestamp()
      };
      
      const matchRef = await addDoc(collection(db, 'matches'), matchData);
      navigate(`/chat/${matchRef.id}`);
    } catch (error) {
      console.error("Error creating match connection:", error);
      alert("Failed to connect. Please try again.");
    }
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg key={i} className={`h-4 w-4 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Discover Matches</h1>
        
        {loading ? (
          // Loading Skeleton
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow p-6 animate-pulse flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="rounded-full bg-gray-200 h-16 w-16 flex-shrink-0"></div>
                <div className="flex-1 space-y-3 w-full">
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                  <div className="flex gap-2">
                    <div className="h-6 bg-gray-200 rounded-full w-16"></div>
                    <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                  </div>
                </div>
                <div className="h-10 bg-gray-200 rounded w-full sm:w-24 mt-4 sm:mt-0"></div>
              </div>
            ))}
          </div>
        ) : matches.length === 0 ? (
          // Empty State
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900">No matches yet</h3>
            <p className="mt-1 text-sm text-gray-500">
              We couldn't find anyone offering the skills you want right now. Try updating your wanted skills!
            </p>
          </div>
        ) : (
          // Results List
          <div className="space-y-4">
            {matches.map((match) => (
              <div key={match.uid} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                {/* Avatar */}
                <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                  {getInitials(match.name)}
                </div>

                {/* Info */}
                <div className="flex-1 w-full">
                  <div className="flex items-center justify-between mb-1">
                    <h2 className="text-lg font-semibold text-gray-900">{match.name}</h2>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      Score: {match.matchScore}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{match.college}</p>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">{renderStars(match.rating)}</div>
                    <span className="text-xs text-gray-500">({match.sessionCount} sessions)</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {match.skillsOffered.map((offered, idx) => (
                      <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                        {offered.skill} ({offered.level})
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action */}
                <button
                  onClick={() => handleConnect(match.uid)}
                  className="mt-4 sm:mt-0 w-full sm:w-auto inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Connect
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
