// src/pages/ProfileSetup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../firebase';

export default function ProfileSetup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    bio: ''
  });

  const [skillsOffered, setSkillsOffered] = useState([]);
  const [currentOfferedSkill, setCurrentOfferedSkill] = useState('');
  const [currentOfferedProficiency, setCurrentOfferedProficiency] = useState('Beginner');

  const [skillsWanted, setSkillsWanted] = useState([]);
  const [currentWantedSkill, setCurrentWantedSkill] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddOfferedSkill = (e) => {
    e.preventDefault();
    if (!currentOfferedSkill.trim()) return;
    setSkillsOffered((prev) => [
      ...prev,
      { skill: currentOfferedSkill.trim(), proficiency: currentOfferedProficiency }
    ]);
    setCurrentOfferedSkill('');
    setCurrentOfferedProficiency('Beginner');
  };

  const handleRemoveOfferedSkill = (indexToRemove) => {
    setSkillsOffered((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleAddWantedSkill = (e) => {
    e.preventDefault();
    if (!currentWantedSkill.trim()) return;
    setSkillsWanted((prev) => [...prev, currentWantedSkill.trim()]);
    setCurrentWantedSkill('');
  };

  const handleRemoveWantedSkill = (indexToRemove) => {
    setSkillsWanted((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.college) {
      return setError('Please fill in required basic info.');
    }
    
    if (!auth.currentUser) {
      return setError('No authenticated user found. Please log in.');
    }

    try {
      setLoading(true);
      
      const userRef = doc(db, 'users', auth.currentUser.uid);
      await setDoc(userRef, {
        uid: auth.currentUser.uid,
        name: formData.name,
        college: formData.college,
        bio: formData.bio || '',
        skillsOffered,
        skillsWanted,
        rating: 0,
        sessionsCount: 0,
        badges: [],
        createdAt: serverTimestamp()
      });
      
      navigate('/matches');
    } catch (err) {
      setError(err.message || 'Failed to save profile setup.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Set up your profile</h2>
        <p className="text-gray-600 mb-8">Tell us about yourself and the skills you want to trade.</p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">College</label>
              <input
                type="text"
                name="college"
                required
                value={formData.college}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Bio</label>
              <textarea
                name="bio"
                rows="3"
                value={formData.bio}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
              />
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Skills I can TEACH</h3>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="e.g., Python"
                value={currentOfferedSkill}
                onChange={(e) => setCurrentOfferedSkill(e.target.value)}
                className="flex-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
              />
              <select
                value={currentOfferedProficiency}
                onChange={(e) => setCurrentOfferedProficiency(e.target.value)}
                className="w-1/3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border bg-white"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
              </select>
              <button
                type="button"
                onClick={handleAddOfferedSkill}
                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                Add
              </button>
            </div>
            
            <div className="mt-3 flex flex-wrap gap-2">
              {skillsOffered.map((item, idx) => (
                <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {item.skill} ({item.proficiency})
                  <button type="button" onClick={() => handleRemoveOfferedSkill(idx)} className="ml-2 text-blue-500 hover:text-blue-700 font-bold">
                    &times;
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Skills I want to LEARN</h3>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="e.g., React"
                value={currentWantedSkill}
                onChange={(e) => setCurrentWantedSkill(e.target.value)}
                className="flex-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
              />
              <button
                type="button"
                onClick={handleAddWantedSkill}
                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
              >
                Add
              </button>
            </div>
            
            <div className="mt-3 flex flex-wrap gap-2">
              {skillsWanted.map((skill, idx) => (
                <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {skill}
                  <button type="button" onClick={() => handleRemoveWantedSkill(idx)} className="ml-2 text-green-500 hover:text-green-700 font-bold">
                    &times;
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Saving Profile...' : 'Complete Setup'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
