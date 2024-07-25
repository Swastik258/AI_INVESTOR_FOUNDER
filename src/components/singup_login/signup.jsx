// src/components/signup_login/Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      // Navigate based on the selected role
      if (role === 'founder') {
        navigate('/founder-profile');
      } else if (role === 'investor') {
        navigate('/investor-profile');
      } else {
        alert('Please select a role');
      }
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white p-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute w-[1000px] h-[1000px] bg-gradient-to-br from-purple-700 to-indigo-700 opacity-20 blur-[100px] rounded-full animate-pulse-slow" style={{ top: '-40%', left: '-40%' }}></div>
        <div className="absolute w-[800px] h-[800px] bg-gradient-to-br from-blue-700 to-teal-700 opacity-20 blur-[100px] rounded-full animate-pulse-slow delay-1000" style={{ bottom: '-40%', right: '-30%' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-sm p-8 bg-black bg-opacity-75 rounded-lg shadow-2xl backdrop-blur-lg">
        <h2 className="text-3xl font-extrabold mb-4 text-center tracking-wide">
          Create Your Account
        </h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-300"
              placeholder="yourname@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-300"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-300"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Sign Up As
            </label>
            <div className="flex space-x-4 mt-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="investor"
                  checked={role === 'investor'}
                  onChange={() => setRole('investor')}
                  className="text-purple-500"
                />
                <span className="text-gray-300">Investor</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="founder"
                  checked={role === 'founder'}
                  onChange={() => setRole('founder')}
                  className="text-purple-500"
                />
                <span className="text-gray-300">Founder</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg text-base font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-400">
          Already have an account?{' '}
          <a href="/login" className="text-blue-400 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
