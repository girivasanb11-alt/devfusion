// RegisterPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    college: '',
    email: '',
    password: ''
  });

  const [skillsOffered, setSkillsOffered] = useState([]);
  const [currentOfferedSkill, setCurrentOfferedSkill] = useState('');
  const [currentOfferedLevel, setCurrentOfferedLevel] = useState('Beginner');

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
      { skill: currentOfferedSkill.trim(), level: currentOfferedLevel }
    ]);
    setCurrentOfferedSkill('');
    setCurrentOfferedLevel('Beginner');
  };

  const handleRemoveOfferedSkill = (indexToRemove) => {
    setSkillsOffered((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleAddWantedSkillOnEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!currentWantedSkill.trim()) return;
      setSkillsWanted((prev) => [...prev, currentWantedSkill.trim()]);
      setCurrentWantedSkill('');
    }
  };

  const handleRemoveWantedSkill = (indexToRemove) => {
    setSkillsWanted((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.name || !formData.college || !formData.email || !formData.password) {
      return setError('Please fill in all basic fields.');
    }
    if (skillsOffered.length === 0) {
      return setError('Please add at least one skill you can teach.');
    }
    if (skillsWanted.length === 0) {
      return setError('Please add at least one skill you want to learn.');
    }

    try {
      setLoading(true);
      await register(formData.email, formData.password, {
        name: formData.name,
        college: formData.college,
        skillsOffered,
        skillsWanted
      });
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Failed to create an account.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Join SkillSwap
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Share what you know, learn what you don't.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <div className="mt-1">
                <input
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">College / University</label>
              <div className="mt-1">
                <input
                  name="college"
                  type="text"
                  required
                  value={formData.college}
                  onChange={handleInputChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="pt-2 border-t border-gray-200">
              <label className="block text-sm font-medium text-gray-700">Skills I can TEACH</label>
              <div className="mt-2 flex space-x-2">
                <input
                  type="text"
                  placeholder="e.g., Python"
                  value={currentOfferedSkill}
                  onChange={(e) => setCurrentOfferedSkill(e.target.value)}
                  className="flex-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                <select
                  value={currentOfferedLevel}
                  onChange={(e) => setCurrentOfferedLevel(e.target.value)}
                  className="block w-1/3 px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Expert">Expert</option>
                </select>
                <button
                  type="button"
                  onClick={handleAddOfferedSkill}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {skillsOffered.map((item, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                  >
                    {item.skill} ({item.level})
                    <button
                      type="button"
                      onClick={() => handleRemoveOfferedSkill(index)}
                      className="flex-shrink-0 ml-1.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-blue-400 hover:bg-blue-200 hover:text-blue-500 focus:outline-none focus:bg-blue-500 focus:text-white"
                    >
                      <span className="sr-only">Remove large option</span>
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-gray-200">
              <label className="block text-sm font-medium text-gray-700">
                Skills I want to LEARN
                <span className="text-xs text-gray-500 font-normal ml-2">(Press Enter to add)</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="e.g., React native"
                  value={currentWantedSkill}
                  onChange={(e) => setCurrentWantedSkill(e.target.value)}
                  onKeyDown={handleAddWantedSkillOnEnter}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {skillsWanted.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => handleRemoveWantedSkill(index)}
                      className="flex-shrink-0 ml-1.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-green-400 hover:bg-green-200 hover:text-green-500 focus:outline-none focus:bg-green-500 focus:text-white"
                    >
                      <span className="sr-only">Remove large option</span>
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-gray-200">
              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <div className="mt-1">
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1">
                <input
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {loading ? 'Registering...' : 'Register'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
