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
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-black">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          alt="Your Company"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Create Your Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <form onSubmit={handleSignup} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
              Email Address
            </label>
            <div className="mt-2">
              <input
                type="email"
                id="email"
                className="block w-full rounded-md border border-gray-700 bg-gray-900 py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-base sm:leading-6"
                placeholder="yourname@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
              Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                id="password"
                className="block w-full rounded-md border border-gray-700 bg-gray-900 py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-base sm:leading-6"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-white">
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                id="confirmPassword"
                className="block w-full rounded-md border border-gray-700 bg-gray-900 py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-base sm:leading-6"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-white">
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
                  className="text-indigo-600 focus:ring-2 focus:ring-indigo-500"
                />
                <span className="text-white">Investor</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="founder"
                  checked={role === 'founder'}
                  onChange={() => setRole('founder')}
                  className="text-indigo-600 focus:ring-2 focus:ring-indigo-500"
                />
                <span className="text-white">Founder</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-10 text-center text-sm text-gray-400">
          Already have an account?{' '}
          <a href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
