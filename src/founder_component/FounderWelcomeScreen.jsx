// src/components/WelcomeScreen.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomeScreen() {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate(''); // Redirect to the swiping screen
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white p-6">
      <div className="relative z-10 w-full max-w-lg p-8 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to CapitalIQ!</h1>
        <p className="text-xl mb-6">Your profile has been successfully created.</p>
        <button
          onClick={handleProceed}
          className="py-3 px-6 bg-green-600 rounded-lg text-base font-semibold shadow-lg hover:bg-green-700"
        >
          Start Swiping
        </button>
      </div>
    </div>
  );
}

export default WelcomeScreen;
