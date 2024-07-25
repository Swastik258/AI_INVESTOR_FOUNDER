import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Example of an authentication process (you would replace this with a real API call)
    if (email === 'test@example.com' && password === 'password') {
      // On successful authentication, navigate to the profile page
      navigate('/profile');
    } else {
      alert('Invalid email or password');
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
          Welcome Back
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-300"
              placeholder="yourname@example.com"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-300"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg text-base font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
