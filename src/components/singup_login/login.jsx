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
    <div className="flex min-h-screen flex-col justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      <div className="flex flex-col items-center">
        <img
          alt="Your Company"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          className="h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Welcome Back
        </h2>
      </div>

      <div className="mt-10 mx-auto w-full max-w-md p-6 bg-gray-800 bg-opacity-75 rounded-lg shadow-lg">
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
              Email Address
            </label>
            <div className="mt-2">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border border-gray-700 bg-gray-900 py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-base sm:leading-6"
                placeholder="yourname@example.com"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border border-gray-700 bg-gray-900 py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-base sm:leading-6"
                placeholder="••••••••"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
