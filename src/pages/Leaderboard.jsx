import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { useLocation, Link } from 'react-router-dom';

// Avatar details helper
const getAvatarDetails = (name) => {
  const colors = [
    'bg-red-100 text-red-800 border-red-200',
    'bg-orange-100 text-orange-800 border-orange-200',
    'bg-amber-100 text-amber-800 border-amber-200',
    'bg-green-100 text-green-800 border-green-200',
    'bg-teal-100 text-teal-800 border-teal-200',
    'bg-blue-100 text-blue-800 border-blue-200',
    'bg-indigo-100 text-indigo-800 border-indigo-200',
    'bg-purple-100 text-purple-800 border-purple-200',
    'bg-pink-100 text-pink-800 border-pink-200',
  ];
  let sum = 0;
  const cleanName = name || 'Anonymous';
  for (let i = 0; i < cleanName.length; i++) {
    sum += cleanName.charCodeAt(i);
  }
  const colorClass = colors[sum % colors.length];
  
  const initials = cleanName
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
    
  return { colorClass, initials };
};

export default function Leaderboard() {
  const { currentUser, logout } = useAuth();
  const location = useLocation();
  
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [aiInsights, setAiInsights] = useState({
    topDemand: 'React',
    fastestGrowing: 'Python',
    rarestSkill: 'N/A'
  });

  useEffect(() => {
    async function fetchLeaderboardData() {
      try {
        // 1. Fetch all users
        const usersSnapshot = await getDocs(collection(db, 'users'));
        const usersList = [];
        usersSnapshot.forEach((doc) => {
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

        // 2. Fetch all reviews for AI Insights calculation
        const reviewsSnapshot = await getDocs(collection(db, 'reviews'));
        const reviewsList = [];
        reviewsSnapshot.forEach((doc) => {
          reviewsList.push(doc.data());
        });

        // Compute top skill in demand (most wanted across all users)
        const wantedCounts = {};
        usersList.forEach(user => {
          (user.skillsWanted || []).forEach(skill => {
            const clean = skill.trim();
            wantedCounts[clean] = (wantedCounts[clean] || 0) + 1;
          });
        });
        const sortedWanted = Object.entries(wantedCounts).sort((a, b) => b[1] - a[1]);
        const topDemand = sortedWanted.length > 0 ? sortedWanted[0][0] : 'React';

        // Compute fastest growing skill (most taught skill in recent reviews)
        const taughtCounts = {};
        reviewsList.forEach(review => {
          (review.skillsRated || []).forEach(skill => {
            const clean = skill.trim();
            taughtCounts[clean] = (taughtCounts[clean] || 0) + 1;
          });
        });
        const sortedTaught = Object.entries(taughtCounts).sort((a, b) => b[1] - a[1]);
        const fastestGrowing = sortedTaught.length > 0 ? sortedTaught[0][0] : (sortedWanted.length > 1 ? sortedWanted[1][0] : 'Python');

        // Compute current user's rarest offered skill
        const currentUserDoc = currentUser && sorted.find(u => u.uid === currentUser.uid);
        let rarestSkill = 'N/A';

        if (currentUserDoc && currentUserDoc.skillsOffered && currentUserDoc.skillsOffered.length > 0) {
          // Count offered counts globally
          const offeredCounts = {};
          usersList.forEach(user => {
            (user.skillsOffered || []).forEach(sObj => {
              if (sObj.skill) {
                const clean = sObj.skill.trim();
                offeredCounts[clean] = (offeredCounts[clean] || 0) + 1;
              }
            });
          });

          let minCount = Infinity;
          currentUserDoc.skillsOffered.forEach(sObj => {
            const clean = sObj.skill.trim();
            const count = offeredCounts[clean] || 0;
            if (count < minCount) {
              minCount = count;
              rarestSkill = sObj.skill;
            }
          });
        }

        setAiInsights({
          topDemand,
          fastestGrowing,
          rarestSkill
        });

      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchLeaderboardData();
  }, [currentUser]);

  // Map users with absolute rank
  const rankedUsers = users.map((user, idx) => ({
    ...user,
    rank: idx + 1
  }));

  // Top 3 Podium Users
  const top1 = rankedUsers[0];
  const top2 = rankedUsers[1];
  const top3 = rankedUsers[2];

  // Ranks 4-10 table users
  const tableUsers = rankedUsers.slice(3, 10);

  // Check if current user is in top 10
  const isCurrentUserInTop10 = currentUser && rankedUsers.slice(0, 10).some(u => u.uid === currentUser.uid);

  // Get current user ranked info
  const currentUserRanked = currentUser && rankedUsers.find(u => u.uid === currentUser.uid);

  // Dynamic active link styles
  const getNavLinkClass = (path) => {
    const isActive = location.pathname === path;
    return isActive 
      ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
      : "text-gray-600 hover:text-blue-600 font-medium transition-colors";
  };

  // Helper for row styles
  const getRowStyle = (user) => {
    const isCurrent = currentUser && user.uid === currentUser.uid;
    if (isCurrent) {
      return 'bg-blue-50 border-l-4 border-blue-500 hover:bg-blue-100 font-semibold';
    }
    return 'bg-white hover:bg-gray-50 border-l-4 border-transparent';
  };

  // Top 8 skills calculation
  const getPopularSkills = () => {
    const skillCounts = {};
    users.forEach(user => {
      (user.skillsOffered || []).forEach(sObj => {
        const skillName = sObj.skill;
        if (skillName) {
          const cleanSkill = skillName.trim();
          skillCounts[cleanSkill] = (skillCounts[cleanSkill] || 0) + 1;
        }
      });
    });

    return Object.entries(skillCounts)
      .map(([skill, count]) => ({ skill, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8); // Top 8 skills only
  };

  const popularSkills = getPopularSkills();

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
              <Link to="/profile" className={getNavLinkClass('/profile')}>My Profile</Link>
              <Link to="/matches" className={getNavLinkClass('/matches')}>Matches</Link>
              <Link to="/leaderboard" className={getNavLinkClass('/leaderboard')}>Leaderboard</Link>
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
          <div className="space-y-8">
            
            {/* Podium (Top 3) */}
            <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-6 mt-6">
              
              {/* Rank 2 - Silver Card */}
              {top2 && (
                <div className="order-2 md:order-1 bg-gradient-to-br from-slate-50 to-zinc-100 border border-slate-350 rounded-2xl p-6 text-center w-full md:w-64 h-80 flex flex-col justify-between shadow-sm relative border-t-8 border-t-slate-400">
                  <div className="absolute top-3 right-3 text-sm font-extrabold text-slate-400">#2</div>
                  <div className="flex flex-col items-center">
                    <span className="text-4xl mb-2">🥈</span>
                    <div className={`w-14 h-14 rounded-full border flex items-center justify-center font-bold text-lg mb-3 ${getAvatarDetails(top2.name).colorClass}`}>
                      {getAvatarDetails(top2.name).initials}
                    </div>
                    <h2 className="text-base font-bold text-gray-900 truncate w-full">{top2.name}</h2>
                    <p className="text-xs text-gray-500 truncate w-full">{top2.college}</p>
                  </div>
                  
                  <div className="mt-4 border-t pt-3 flex items-center justify-around text-xs font-semibold text-gray-600">
                    <div>
                      <span className="block text-[10px] text-gray-400 uppercase">Sessions</span>
                      <span className="text-sm font-extrabold text-gray-800">
                        {top2.sessionsCount !== undefined ? top2.sessionsCount : (top2.sessionCount || 0)}
                      </span>
                    </div>
                    <div className="border-r h-6 border-gray-200"></div>
                    <div>
                      <span className="block text-[10px] text-gray-400 uppercase">Rating</span>
                      <span className="text-sm font-extrabold text-gray-800 flex items-center">
                        ★ {(top2.rating || 0).toFixed(1)}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-1 mt-3">
                    {(top2.badges || []).map((badge, idx) => (
                      <span key={idx} className="px-2 py-0.5 text-[9px] font-bold rounded-full bg-white text-slate-800 border border-slate-200">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Rank 1 - Gold Card */}
              {top1 && (
                <div className="order-1 md:order-2 bg-gradient-to-br from-yellow-50 to-amber-100 border border-yellow-250 rounded-2xl p-6 text-center w-full md:w-72 h-90 flex flex-col justify-between shadow-md relative border-t-8 border-t-yellow-400 md:-top-4">
                  <div className="absolute top-3 right-3 text-sm font-extrabold text-yellow-600">#1</div>
                  <div className="flex flex-col items-center">
                    <span className="text-5xl mb-2">🥇</span>
                    <div className={`w-16 h-16 rounded-full border flex items-center justify-center font-bold text-xl mb-3 ${getAvatarDetails(top1.name).colorClass}`}>
                      {getAvatarDetails(top1.name).initials}
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 truncate w-full">{top1.name}</h2>
                    <p className="text-xs text-gray-500 truncate w-full">{top1.college}</p>
                  </div>
                  
                  <div className="mt-4 border-t pt-3 flex items-center justify-around text-xs font-semibold text-gray-600">
                    <div>
                      <span className="block text-[10px] text-gray-400 uppercase">Sessions</span>
                      <span className="text-base font-extrabold text-gray-800">
                        {top1.sessionsCount !== undefined ? top1.sessionsCount : (top1.sessionCount || 0)}
                      </span>
                    </div>
                    <div className="border-r h-6 border-gray-200"></div>
                    <div>
                      <span className="block text-[10px] text-gray-400 uppercase">Rating</span>
                      <span className="text-base font-extrabold text-gray-800 flex items-center">
                        ★ {(top1.rating || 0).toFixed(1)}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-1 mt-3">
                    {(top1.badges || []).map((badge, idx) => (
                      <span key={idx} className="px-2 py-0.5 text-[9px] font-bold rounded-full bg-white text-yellow-800 border border-yellow-200">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Rank 3 - Bronze Card */}
              {top3 && (
                <div className="order-3 bg-gradient-to-br from-amber-50 to-orange-100 border border-amber-250 rounded-2xl p-6 text-center w-full md:w-64 h-76 flex flex-col justify-between shadow-sm relative border-t-8 border-t-amber-500">
                  <div className="absolute top-3 right-3 text-sm font-extrabold text-amber-600">#3</div>
                  <div className="flex flex-col items-center">
                    <span className="text-4xl mb-2">🥉</span>
                    <div className={`w-12 h-12 rounded-full border flex items-center justify-center font-bold text-sm mb-3 ${getAvatarDetails(top3.name).colorClass}`}>
                      {getAvatarDetails(top3.name).initials}
                    </div>
                    <h2 className="text-base font-bold text-gray-900 truncate w-full">{top3.name}</h2>
                    <p className="text-xs text-gray-500 truncate w-full">{top3.college}</p>
                  </div>
                  
                  <div className="mt-4 border-t pt-3 flex items-center justify-around text-xs font-semibold text-gray-600">
                    <div>
                      <span className="block text-[10px] text-gray-400 uppercase">Sessions</span>
                      <span className="text-sm font-extrabold text-gray-800">
                        {top3.sessionsCount !== undefined ? top3.sessionsCount : (top3.sessionCount || 0)}
                      </span>
                    </div>
                    <div className="border-r h-6 border-gray-200"></div>
                    <div>
                      <span className="block text-[10px] text-gray-400 uppercase">Rating</span>
                      <span className="text-sm font-extrabold text-gray-800 flex items-center">
                        ★ {(top3.rating || 0).toFixed(1)}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-1 mt-3">
                    {(top3.badges || []).map((badge, idx) => (
                      <span key={idx} className="px-2 py-0.5 text-[9px] font-bold rounded-full bg-white text-amber-900 border border-amber-200">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Rank Table (4-10) */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-150">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider w-20">
                        #
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
                        ⭐Rating
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Badges
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-150 bg-white">
                    {tableUsers.map((user) => {
                      const avatar = getAvatarDetails(user.name);
                      return (
                        <tr key={user.uid} className={`transition-colors ${getRowStyle(user)}`}>
                          <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-bold text-gray-500">
                            #{user.rank}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-full border flex items-center justify-center font-bold text-xs ${avatar.colorClass}`}>
                              {avatar.initials}
                            </div>
                            <span>{user.name} {currentUser && user.uid === currentUser.uid && ' (You)'}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {user.college || 'N/A'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900 font-medium">
                            {user.sessionsCount !== undefined ? user.sessionsCount : (user.sessionCount || 0)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-semibold text-gray-800">
                            {(user.rating || 0).toFixed(1)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <div className="flex flex-wrap gap-1.5">
                              {user.badges && user.badges.length > 0 ? (
                                user.badges.map((badge, idx) => (
                                  <span 
                                    key={idx} 
                                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold ${
                                      badge.includes('Top') 
                                        ? 'bg-yellow-100 text-yellow-800 border border-yellow-250' 
                                        : badge.includes('Expert')
                                        ? 'bg-purple-100 text-purple-800 border border-purple-250'
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
                      );
                    })}

                    {/* Divider and Current User outside top 10 */}
                    {currentUserRanked && !isCurrentUserInTop10 && (
                      <>
                        <tr className="bg-gray-50">
                          <td colSpan="6" className="px-6 py-2 text-center text-sm font-semibold text-gray-400 tracking-widest bg-gray-50 border-t border-b select-none">
                            •••
                          </td>
                        </tr>
                        <tr className={`transition-colors ${getRowStyle(currentUserRanked)}`}>
                          <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-bold text-gray-500">
                            #{currentUserRanked.rank}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-full border flex items-center justify-center font-bold text-xs ${getAvatarDetails(currentUserRanked.name).colorClass}`}>
                              {getAvatarDetails(currentUserRanked.name).initials}
                            </div>
                            <span>{currentUserRanked.name} (You)</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {currentUserRanked.college || 'N/A'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900 font-medium">
                            {currentUserRanked.sessionsCount !== undefined ? currentUserRanked.sessionsCount : (currentUserRanked.sessionCount || 0)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-semibold text-gray-800">
                            {(currentUserRanked.rating || 0).toFixed(1)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <div className="flex flex-wrap gap-1.5">
                              {currentUserRanked.badges && currentUserRanked.badges.length > 0 ? (
                                currentUserRanked.badges.map((badge, idx) => (
                                  <span 
                                    key={idx} 
                                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold ${
                                      badge.includes('Top') 
                                        ? 'bg-yellow-100 text-yellow-800 border border-yellow-250' 
                                        : badge.includes('Expert')
                                        ? 'bg-purple-100 text-purple-800 border border-purple-250'
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

            {/* Popular Skills Offered Bar Chart */}
            <div className="bg-white shadow-md rounded-xl p-6 border border-gray-150">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Most Popular Skills Offered</h2>
              <p className="text-sm text-gray-500 mb-6 font-medium">Skills that mentors are sharing most in the community</p>
              
              <div className="space-y-4">
                {popularSkills.map((item, idx) => {
                  const maxCount = popularSkills.length > 0 ? popularSkills[0].count : 1;
                  const percentage = `${(item.count / maxCount) * 100}%`;
                  
                  return (
                    <div key={idx} className="flex items-center">
                      <div className="w-32 text-sm font-semibold text-gray-700 truncate pr-2">
                        {item.skill}
                      </div>
                      <div className="flex-1 bg-gray-100 rounded-full h-4 relative overflow-hidden">
                        <div 
                          className="bg-blue-600 h-full rounded-full transition-all duration-500" 
                          style={{ width: percentage }}
                        ></div>
                      </div>
                      <div className="w-20 text-right text-xs font-bold text-gray-600 pl-3">
                        {item.count} {item.count === 1 ? 'mentor' : 'mentors'}
                      </div>
                    </div>
                  );
                })}
                {popularSkills.length === 0 && (
                  <p className="text-sm text-gray-400 italic">No skills recorded yet.</p>
                )}
              </div>
            </div>

            {/* SECTION: AI Learning Insights */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-xs">
              <h2 className="text-lg font-bold text-blue-900 flex items-center mb-4">
                <span className="mr-2">🤖</span> AI Learning Insights
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Top Skill in Demand</span>
                  <span className="text-sm font-bold text-gray-800 block mb-1">
                    {aiInsights.topDemand}
                  </span>
                  <p className="text-[10px] text-gray-500">Most wanted skill across all student profiles</p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Fastest Growing</span>
                  <span className="text-sm font-bold text-gray-800 block mb-1">
                    {aiInsights.fastestGrowing}
                  </span>
                  <p className="text-[10px] text-gray-500">Most taught skill in recent learning sessions</p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Your Rarest Skill</span>
                  <span className="text-sm font-bold text-gray-800 block mb-1">
                    {aiInsights.rarestSkill}
                  </span>
                  <p className="text-[10px] text-gray-500">Your offered skill that is least common globally</p>
                </div>
              </div>
            </div>

          </div>
        )}
      </main>
    </div>
  );
}
