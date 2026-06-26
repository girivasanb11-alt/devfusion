// src/pages/Matches.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { computeMatches } from '../services/matchingService';

export default function Matches() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMatches() {
      if (!currentUser) return;

      try {
        // 1. Fetch current user
        const currentUserRef = doc(db, 'users', currentUser.uid);
        const currentUserSnap = await getDoc(currentUserRef);
        
        if (!currentUserSnap.exists()) {
          setLoading(false);
          return;
        }

        const currentUserDoc = { uid: currentUserSnap.id, ...currentUserSnap.data() };

        // 2. Fetch all other users
        const usersRef = collection(db, 'users');
        const usersSnap = await getDocs(usersRef);
        
        const allOtherUsers = [];
        usersSnap.forEach((docSnap) => {
          if (docSnap.id !== currentUser.uid) {
            allOtherUsers.push({ uid: docSnap.id, ...docSnap.data() });
          }
        });

        // 3. Compute match scores
        const sortedMatches = computeMatches(currentUserDoc, allOtherUsers);
        setMatches(sortedMatches);
        
      } catch (error) {
        console.error("Error fetching matches:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMatches();
  }, [currentUser]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <span className="font-bold text-xl text-blue-600">SkillSwap</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/profile" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">My Profile</Link>
              <Link to="/matches" className="text-blue-600 font-bold">Matches</Link>
              <Link to="/leaderboard" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Leaderboard</Link>
              <button 
                onClick={logout}
                className="text-gray-600 hover:text-red-600 font-medium transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Your Skill Matches</h1>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : matches.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center border border-gray-200">
            <p className="text-lg text-gray-500 font-medium">No matches yet. Be the first to join!</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {matches.map((user) => (
              <div key={user.uid} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
                      <p className="text-sm text-gray-500">{user.college}</p>
                    </div>
                    <div className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full flex items-center">
                      Score: {user.score}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center text-sm font-medium">
                      <span className="text-yellow-400 mr-1 text-lg leading-none">★</span>
                      <span className="text-gray-700">{user.rating?.toFixed(1) || '0.0'} / 5.0</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-gray-500">{user.sessionsCount || 0} sessions</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Can teach you:</h3>
                    <div className="flex flex-wrap gap-2">
                      {user.matchingSkills?.map((skillObj, idx) => (
                        <span key={idx} className="inline-flex items-center px-2.5 py-1 rounded-md text-sm font-medium bg-green-50 border border-green-200 text-green-800">
                          {skillObj.skill} <span className="opacity-75 ml-1 text-xs">({skillObj.proficiency})</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => navigate(`/chat/${user.uid}`)}
                    className="w-full flex justify-center items-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    Connect
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
