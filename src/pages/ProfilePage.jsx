// ProfilePage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';

export default function ProfilePage() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      if (!currentUser) return;
      try {
        const docRef = doc(db, 'users', currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, [currentUser]);

  const getInitials = (name) => {
    if (!name) return '';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  const renderBadge = (badgeName, idx) => {
    let colorClass = "bg-gray-100 text-gray-800";
    let icon = "🎖️";

    if (badgeName === "Rising Mentor") {
      colorClass = "bg-green-100 text-green-800 border-green-200";
      icon = "🌱";
    } else if (badgeName === "Verified Mentor") {
      colorClass = "bg-blue-100 text-blue-800 border-blue-200";
      icon = "✔️";
    } else if (badgeName === "Top Contributor") {
      colorClass = "bg-purple-100 text-purple-800 border-purple-200";
      icon = "⭐";
    }

    return (
      <span key={idx} className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${colorClass}`}>
        <span className="mr-1.5">{icon}</span>
        {badgeName}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full max-w-3xl bg-white rounded-xl shadow-sm p-8 animate-pulse">
          <div className="flex flex-col items-center">
            <div className="h-24 w-24 bg-gray-200 rounded-full mb-4"></div>
            <div className="h-6 w-48 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-32 bg-gray-200 rounded"></div>
          </div>
          <div className="mt-8 space-y-4">
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
            <div className="h-4 w-4/6 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!userData) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Profile not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
        
        {/* Header Section */}
        <div className="px-6 py-8 sm:px-10 border-b border-gray-100 flex flex-col items-center text-center">
          <div className="h-24 w-24 rounded-full bg-purple-600 text-white flex items-center justify-center text-3xl font-bold shadow-md mb-4">
            {getInitials(userData.name)}
          </div>
          <h1 className="text-2xl font-bold text-gray-900">{userData.name}</h1>
          <p className="text-gray-500 mt-1">{userData.college}</p>
          
          <div className="flex items-center mt-4 space-x-4 bg-gray-50 px-6 py-2 rounded-full border border-gray-100">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-yellow-400 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-semibold text-gray-900">{Number(userData.rating || 0).toFixed(1)} <span className="text-gray-500 font-normal">/ 5</span></span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <span className="text-gray-700 font-medium">{userData.sessionCount || 0} sessions</span>
          </div>

          <button 
            onClick={() => navigate('/edit-profile')}
            className="mt-6 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
          >
            Edit Profile
          </button>
        </div>

        {/* Content Section */}
        <div className="px-6 py-8 sm:px-10 grid gap-8">
          
          {/* Badges */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              Achievements
            </h3>
            <div className="flex flex-wrap gap-3">
              {userData.badges && userData.badges.length > 0 ? (
                userData.badges.map((badge, idx) => renderBadge(badge, idx))
              ) : (
                <p className="text-sm text-gray-500 italic">No badges earned yet. Keep teaching!</p>
              )}
            </div>
          </div>

          {/* Skills I Teach */}
          <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-100">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Skills I can TEACH</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(userData.skillsOffered || []).map((item, idx) => (
                <li key={idx} className="flex items-center bg-white px-3 py-2 rounded-lg border border-blue-100 shadow-sm">
                  <span className="font-medium text-gray-800 flex-1">{item.skill}</span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium
                    ${item.level === 'Expert' ? 'bg-purple-100 text-purple-700' : 
                      item.level === 'Intermediate' ? 'bg-blue-100 text-blue-700' : 
                      'bg-gray-100 text-gray-700'}
                  `}>
                    {item.level}
                  </span>
                </li>
              ))}
              {(!userData.skillsOffered || userData.skillsOffered.length === 0) && (
                <p className="text-sm text-gray-500 italic col-span-2">No skills listed to teach.</p>
              )}
            </ul>
          </div>

          {/* Skills I Want to Learn */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Skills I want to LEARN</h3>
            <div className="flex flex-wrap gap-2">
              {(userData.skillsWanted || []).map((skill, idx) => (
                <span key={idx} className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-green-50 text-green-700 border border-green-200">
                  {skill}
                </span>
              ))}
              {(!userData.skillsWanted || userData.skillsWanted.length === 0) && (
                <p className="text-sm text-gray-500 italic">No skills listed to learn.</p>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
