import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Leaderboard() {
  const { currentUser, logout } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const usersList = [];
        querySnapshot.forEach((doc) => {
          usersList.push({ uid: doc.id, ...doc.data() });
        });
        
        // Sort by sessionsCount desc, then rating desc as tiebreaker
        const sorted = usersList.sort((a, b) => {
          const aCount = a.sessionsCount !== undefined ? a.sessionsCount : (a.sessionCount || 0);
          const bCount = b.sessionsCount !== undefined ? b.sessionsCount : (b.sessionCount || 0);
          
          if (bCount !== aCount) {
            return bCount - aCount;
          }
          
          const aRating = a.rating || 0;
          const bRating = b.rating || 0;
          return bRating - aRating;
        });

        setUsers(sorted);
      } catch (error) {
        console.error("Error fetching leaderboard users:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  // Map users with their absolute rank
  const rankedUsers = users.map((user, idx) => ({
    ...user,
    rank: idx + 1
  }));

  // Top 10 users
  const top10 = rankedUsers.slice(0, 10);

  // Check if current user is in top 10
  const isCurrentUserInTop10 = currentUser && top10.some(u => u.uid === currentUser.uid);

  // Get current user ranked info
  const currentUserRanked = currentUser && rankedUsers.find(u => u.uid === currentUser.uid);

  // Helper to determine row background & border style based on rank and if it is the current user
  const getRowStyle = (user) => {
    const isCurrent = currentUser && user.uid === currentUser.uid;
    if (isCurrent) {
      return 'bg-blue-50 border-l-4 border-blue-500 hover:bg-blue-100 font-semibold';
    }
    if (user.rank === 1) {
      return 'bg-yellow-50 border-l-4 border-yellow-400 hover:bg-yellow-100';
    }
    if (user.rank === 2) {
      return 'bg-slate-50 border-l-4 border-slate-300 hover:bg-slate-100';
    }
    if (user.rank === 3) {
      return 'bg-amber-50/50 border-l-4 border-amber-500 hover:bg-amber-50';
    }
    return 'bg-white hover:bg-gray-50 border-l-4 border-transparent';
  };

  const getRankBadge = (rank) => {
    if (rank === 1) return <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-800 font-bold text-lg">🥇</span>;
    if (rank === 2) return <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 text-slate-800 font-bold text-lg">🥈</span>;
    if (rank === 3) return <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-900 font-bold text-lg">🥉</span>;
    return <span className="text-gray-500 font-medium">{rank}</span>;
  };

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
              <Link to="/matches" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Matches</Link>
              <Link to="/leaderboard" className="text-blue-600 font-bold">Leaderboard</Link>
              <div 
                onClick={logout}
                className="text-gray-600 hover:text-red-600 font-medium transition-colors cursor-pointer"
              >
                Logout
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Leaderboard</h1>
          <p className="text-gray-500 mt-2">Top mentors and active learners in the SkillSwap community</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-150">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider w-20">
                      Rank
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      College
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Sessions
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Rating
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Badges
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-150 bg-white">
                  {top10.map((user) => (
                    <tr key={user.uid} className={`transition-colors ${getRowStyle(user)}`}>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                        {getRankBadge(user.rank)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {user.name} {currentUser && user.uid === currentUser.uid && ' (You)'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.college || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900 font-medium">
                        {user.sessionsCount !== undefined ? user.sessionsCount : (user.sessionCount || 0)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                        <div className="flex items-center justify-center space-x-1">
                          <span className="text-yellow-400">★</span>
                          <span className="text-gray-900 font-medium">{(user.rating || 0).toFixed(1)}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex flex-wrap gap-1.5">
                          {user.badges && user.badges.length > 0 ? (
                            user.badges.map((badge, idx) => (
                              <span 
                                key={idx} 
                                className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${
                                  badge.includes('Top') 
                                    ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' 
                                    : 'bg-green-100 text-green-800 border border-green-200'
                                }`}
                              >
                                {badge}
                              </span>
                            ))
                          ) : (
                            <span className="text-gray-400 text-xs italic">None</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}

                  {/* Render separator and current user if outside top 10 */}
                  {currentUserRanked && !isCurrentUserInTop10 && (
                    <>
                      <tr className="bg-gray-50">
                        <td colSpan="6" className="px-6 py-2 text-center text-sm font-semibold text-gray-400 tracking-widest bg-gray-50 border-t border-b select-none">
                          •••
                        </td>
                      </tr>
                      <tr className={`transition-colors ${getRowStyle(currentUserRanked)}`}>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                          {getRankBadge(currentUserRanked.rank)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                          {currentUserRanked.name} (You)
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {currentUserRanked.college || 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900 font-medium">
                          {currentUserRanked.sessionsCount !== undefined ? currentUserRanked.sessionsCount : (currentUserRanked.sessionCount || 0)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                          <div className="flex items-center justify-center space-x-1">
                            <span className="text-yellow-400">★</span>
                            <span className="text-gray-900 font-medium">{(currentUserRanked.rating || 0).toFixed(1)}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex flex-wrap gap-1.5">
                            {currentUserRanked.badges && currentUserRanked.badges.length > 0 ? (
                              currentUserRanked.badges.map((badge, idx) => (
                                <span 
                                  key={idx} 
                                  className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${
                                    badge.includes('Top') 
                                      ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' 
                                      : 'bg-green-100 text-green-800 border border-green-200'
                                  }`}
                                >
                                  {badge}
                                </span>
                              ))
                            ) : (
                              <span className="text-gray-400 text-xs italic">None</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
