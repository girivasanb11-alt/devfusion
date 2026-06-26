import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';

// Hardcoded AI Suggestions Map
const SUGGESTION_MAP = {
  "Python": ["Machine Learning", "Data Science", "Django", "FastAPI"],
  "React": ["TypeScript", "Next.js", "Node.js", "GraphQL"],
  "Machine Learning": ["Python", "Deep Learning", "NLP", "Computer Vision"],
  "UI Design": ["Figma", "UX Design", "CSS", "Prototyping"],
  "JavaScript": ["TypeScript", "React", "Node.js", "Vue.js"],
  "Data Science": ["Python", "SQL", "Power BI", "Tableau", "Statistics"],
  "Android Dev": ["Kotlin", "Firebase", "REST APIs", "Jetpack Compose"],
  "Flutter": ["Dart", "Firebase", "REST APIs", "State Management"],
  "AI": ["Python", "Machine Learning", "Deep Learning", "NLP"],
  "Blockchain": ["Solidity", "Web3.js", "Cryptography", "Smart Contracts"],
  "Cybersecurity": ["Networking", "Linux", "Ethical Hacking", "Python"],
  "DevOps": ["Docker", "Kubernetes", "AWS", "Linux", "CI/CD"],
  "DSA": ["C++", "Java", "Competitive Programming", "System Design"],
  "SQL": ["PostgreSQL", "MongoDB", "Data Analysis", "Power BI"],
  "iOS Dev": ["Swift", "SwiftUI", "Xcode", "Firebase"]
};

// Avatar Details Helper
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

export default function Profile() {
  const { currentUser, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [userDoc, setUserDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  // Editable fields state
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [bio, setBio] = useState('');
  const [skillsOffered, setSkillsOffered] = useState([]);
  const [skillsWanted, setSkillsWanted] = useState([]);

  // Add skill inputs state
  const [newOfferedSkill, setNewOfferedSkill] = useState('');
  const [newOfferedProficiency, setNewOfferedProficiency] = useState('Intermediate');
  const [newWantedSkill, setNewWantedSkill] = useState('');

  useEffect(() => {
    async function fetchUserData() {
      if (!currentUser) return;
      try {
        const userRef = doc(db, 'users', currentUser.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const data = userSnap.data();
          setUserDoc(data);
          resetForm(data);
        }
      } catch (err) {
        console.error("Error fetching user profile:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchUserData();
  }, [currentUser]);

  const resetForm = (data) => {
    setName(data.name || '');
    setCollege(data.college || '');
    setBio(data.bio || '');
    setSkillsOffered(data.skillsOffered || []);
    setSkillsWanted(data.skillsWanted || []);
  };

  const handleCancel = () => {
    if (userDoc) {
      resetForm(userDoc);
    }
    setEditMode(false);
  };

  const handleSaveChanges = async () => {
    if (!name.trim()) {
      setError('Name is required.');
      return;
    }
    if (!currentUser) return;

    setSaving(true);
    setError('');

    try {
      const userRef = doc(db, 'users', currentUser.uid);
      const updatedData = {
        name: name.trim(),
        college: college.trim(),
        bio: bio.trim(),
        skillsOffered,
        skillsWanted
      };

      await updateDoc(userRef, updatedData);

      setUserDoc(prev => ({
        ...prev,
        ...updatedData
      }));
      setEditMode(false);
    } catch (err) {
      console.error("Error updating profile:", err);
      setError('Failed to update profile changes.');
    } finally {
      setSaving(false);
    }
  };

  // Add / Remove offered skill
  const handleAddOfferedSkill = () => {
    if (!newOfferedSkill.trim()) return;
    
    // Check duplicate offered skill (case-insensitive)
    const exists = skillsOffered.some(s => s.skill.toLowerCase() === newOfferedSkill.trim().toLowerCase());
    if (exists) return;

    setSkillsOffered(prev => [
      ...prev,
      { skill: newOfferedSkill.trim(), proficiency: newOfferedProficiency }
    ]);
    setNewOfferedSkill('');
  };

  const handleRemoveOfferedSkill = (index) => {
    setSkillsOffered(prev => prev.filter((_, i) => i !== index));
  };

  // Add / Remove wanted skill
  const handleAddWantedSkill = () => {
    if (!newWantedSkill.trim()) return;

    // Check duplicate wanted skill (case-insensitive)
    const exists = skillsWanted.some(s => s.toLowerCase() === newWantedSkill.trim().toLowerCase());
    if (exists) return;

    setSkillsWanted(prev => [...prev, newWantedSkill.trim()]);
    setNewWantedSkill('');
  };

  const handleRemoveWantedSkill = (index) => {
    setSkillsWanted(prev => prev.filter((_, i) => i !== index));
  };

  // Add AI suggested skill directly
  const handleAddSuggestedSkill = async (suggestedSkill) => {
    if (!currentUser || !userDoc) return;
    
    const updatedWanted = [...(userDoc.skillsWanted || []), suggestedSkill];
    try {
      await updateDoc(doc(db, 'users', currentUser.uid), {
        skillsWanted: updatedWanted
      });
      setUserDoc(prev => ({ ...prev, skillsWanted: updatedWanted }));
      // Sync form if currently editing
      setSkillsWanted(updatedWanted);
    } catch (e) {
      console.error("Error adding suggested skill:", e);
    }
  };

  // Compute suggestions (deduplicated against what user already knows/wants)
  const getAISuggestions = () => {
    if (!userDoc) return [];
    
    const currentWantedClean = (userDoc.skillsWanted || []).map(s => s.trim().toLowerCase());
    const currentOfferedClean = (userDoc.skillsOffered || []).map(s => s.skill.trim().toLowerCase());
    const suggestions = [];

    (userDoc.skillsWanted || []).forEach(wanted => {
      const related = SUGGESTION_MAP[wanted] || [];
      related.forEach(skill => {
        const cleanSkill = skill.trim().toLowerCase();
        if (!currentWantedClean.includes(cleanSkill) && !currentOfferedClean.includes(cleanSkill) && !suggestions.includes(skill)) {
          suggestions.push(skill);
        }
      });
    });

    return suggestions;
  };

  const suggestions = getAISuggestions();

  // Active Navbar links helper
  const getNavLinkClass = (path) => {
    const isActive = location.pathname === path;
    return isActive 
      ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
      : "text-gray-600 hover:text-blue-600 font-medium transition-colors";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!userDoc) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <p className="text-gray-500">Failed to load user document. Make sure you are logged in.</p>
      </div>
    );
  }

  const avatar = getAvatarDetails(userDoc.name);

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
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 text-sm text-red-700 rounded shadow-sm">
            {error}
          </div>
        )}

        {/* SECTION 1 - Avatar & Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className={`w-20 h-20 rounded-full border-2 flex items-center justify-center font-bold text-2xl ${avatar.colorClass}`}>
              {avatar.initials}
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900">{userDoc.name}</h1>
              <p className="text-sm font-semibold text-blue-600">{userDoc.college || 'No college specified'}</p>
              <p className="text-sm text-gray-600 mt-2 italic max-w-xl">
                "{userDoc.bio || 'Add a bio to tell matches more about yourself.'}"
              </p>
            </div>
          </div>
          {!editMode && (
            <div 
              onClick={() => setEditMode(true)}
              className="px-4 py-2 text-sm font-semibold rounded-lg border border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100 cursor-pointer shadow-sm transition-colors whitespace-nowrap"
            >
              Edit Profile
            </div>
          )}
        </div>

        {/* SECTION 2 - Edit Mode Drawer */}
        {editMode && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-6">
            <h2 className="text-xl font-bold text-gray-900 border-b pb-2">Edit Profile Info</h2>
            
            <div className="space-y-4">
              <div>
                <span className="block text-sm font-semibold text-gray-700 mb-1">Name</span>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <span className="block text-sm font-semibold text-gray-700 mb-1">College</span>
                <input 
                  type="text" 
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <span className="block text-sm font-semibold text-gray-700 mb-1">Bio</span>
                <textarea 
                  rows="3"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              {/* Skills Offered Editor */}
              <div className="border-t pt-4">
                <span className="block text-sm font-semibold text-gray-700 mb-2">Skills I can Teach</span>
                <div className="flex flex-wrap gap-2 mb-3">
                  {skillsOffered.map((s, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 border border-blue-200 text-blue-800">
                      {s.skill} <span className="opacity-70">({s.proficiency})</span>
                      <span 
                        onClick={() => handleRemoveOfferedSkill(idx)}
                        className="font-bold text-blue-500 hover:text-red-500 cursor-pointer ml-1 text-sm select-none"
                      >
                        ×
                      </span>
                    </span>
                  ))}
                  {skillsOffered.length === 0 && (
                    <span className="text-gray-400 text-xs italic">No offered skills added.</span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-2 max-w-lg">
                  <input 
                    type="text" 
                    placeholder="Add a skill..."
                    value={newOfferedSkill}
                    onChange={(e) => setNewOfferedSkill(e.target.value)}
                    className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <select 
                    value={newOfferedProficiency}
                    onChange={(e) => setNewOfferedProficiency(e.target.value)}
                    className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Expert</option>
                  </select>
                  <div 
                    onClick={handleAddOfferedSkill}
                    className="px-4 py-2 text-sm font-semibold text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg cursor-pointer transition-colors shadow-sm whitespace-nowrap"
                  >
                    Add
                  </div>
                </div>
              </div>

              {/* Skills Wanted Editor */}
              <div className="border-t pt-4">
                <span className="block text-sm font-semibold text-gray-700 mb-2">Skills I want to Learn</span>
                <div className="flex flex-wrap gap-2 mb-3">
                  {skillsWanted.map((s, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-50 border border-green-200 text-green-800">
                      {s}
                      <span 
                        onClick={() => handleRemoveWantedSkill(idx)}
                        className="font-bold text-green-500 hover:text-red-500 cursor-pointer ml-1 text-sm select-none"
                      >
                        ×
                      </span>
                    </span>
                  ))}
                  {skillsWanted.length === 0 && (
                    <span className="text-gray-400 text-xs italic">No wanted skills added.</span>
                  )}
                </div>

                <div className="flex gap-2 max-w-md">
                  <input 
                    type="text" 
                    placeholder="Add a skill..."
                    value={newWantedSkill}
                    onChange={(e) => setNewWantedSkill(e.target.value)}
                    className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <div 
                    onClick={handleAddWantedSkill}
                    className="px-4 py-2 text-sm font-semibold text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg cursor-pointer transition-colors shadow-sm whitespace-nowrap"
                  >
                    Add
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-4 border-t">
              <div 
                onClick={handleCancel}
                className="px-5 py-2.5 text-sm font-semibold rounded-lg border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 cursor-pointer transition-colors"
              >
                Cancel
              </div>
              <div 
                onClick={!saving ? handleSaveChanges : undefined}
                className={`px-5 py-2.5 text-sm font-semibold rounded-lg text-white shadow-sm transition-colors cursor-pointer flex items-center justify-center ${
                  saving ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {saving ? 'Saving...' : 'Save Changes'}
              </div>
            </div>
          </div>
        )}

        {/* SECTION 3 - Stats Bar */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-xs">
            <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Sessions Completed</span>
            <span className="text-2xl font-extrabold text-gray-800">
              {(userDoc.sessionsCount !== undefined ? userDoc.sessionsCount : (userDoc.sessionCount || 0))}
            </span>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-xs">
            <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Average Rating</span>
            <span className="text-2xl font-extrabold text-gray-800 flex items-center justify-center">
              <span className="text-yellow-400 mr-1 text-xl leading-none">★</span>
              {(userDoc.rating || 0).toFixed(1)}
            </span>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-xs">
            <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Badges Earned</span>
            <span className="text-2xl font-extrabold text-gray-800">
              {(userDoc.badges || []).length}
            </span>
          </div>
        </div>

        {/* SECTION 4 - Badges */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Badges Earned</h2>
          <div className="flex flex-wrap gap-2">
            {userDoc.badges && userDoc.badges.length > 0 ? (
              userDoc.badges.map((badge, idx) => (
                <span 
                  key={idx} 
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold shadow-xs ${
                    badge.includes('Top') 
                      ? 'bg-yellow-100 text-yellow-800 border border-yellow-250' 
                      : badge.includes('Expert')
                      ? 'bg-purple-100 text-purple-800 border border-purple-250'
                      : 'bg-green-100 text-green-800 border border-green-255'
                  }`}
                >
                  {badge}
                </span>
              ))
            ) : (
              <p className="text-sm text-gray-500 italic">Complete sessions to earn badges!</p>
            )}
          </div>
        </div>

        {/* SECTION 5 - My Skills Summary */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">I can Teach:</h2>
            <div className="flex flex-wrap gap-2">
              {userDoc.skillsOffered && userDoc.skillsOffered.length > 0 ? (
                userDoc.skillsOffered.map((s, idx) => (
                  <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 border border-blue-100 text-blue-800">
                    {s.skill} <span className="opacity-75 ml-1">({s.proficiency})</span>
                  </span>
                ))
              ) : (
                <p className="text-sm text-gray-500 italic">Add skills you can offer by editing your profile.</p>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">I want to Learn:</h2>
            <div className="flex flex-wrap gap-2">
              {userDoc.skillsWanted && userDoc.skillsWanted.length > 0 ? (
                userDoc.skillsWanted.map((s, idx) => (
                  <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-50 border border-green-100 text-green-800">
                    {s}
                  </span>
                ))
              ) : (
                <p className="text-sm text-gray-500 italic">Add skills you'd like to learn by editing your profile.</p>
              )}
            </div>
          </div>
        </div>

        {/* SECTION 6 - AI Skill Suggestions */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-xs">
          <h2 className="text-lg font-bold text-blue-900 flex items-center mb-2">
            <span className="mr-2">🤖</span> AI Suggests for You
          </h2>
          <p className="text-xs text-blue-700 mb-4 font-medium">
            Based on the skills you want to learn, here are related fields you should explore adding:
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((skill, idx) => (
              <div 
                key={idx}
                onClick={() => handleAddSuggestedSkill(skill)}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-blue-200 text-blue-700 hover:bg-blue-100 cursor-pointer shadow-2xs hover:shadow-xs transition-all active:scale-95"
              >
                <span>+</span>
                <span>{skill}</span>
              </div>
            ))}
            {suggestions.length === 0 && (
              <p className="text-xs text-blue-600 italic">
                {userDoc.skillsWanted && userDoc.skillsWanted.length > 0 
                  ? "You have already added all recommended skills!" 
                  : "Add some skills to your learning list, and AI will suggest related ones here!"}
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
