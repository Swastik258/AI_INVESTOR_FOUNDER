import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const sampleProfiles = [
  { id: 1, name: 'Alice', role: 'Founder', location: 'New York', industryFocus: 'Tech' },
  { id: 2, name: 'Bob', role: 'Investor', location: 'San Francisco', industryFocus: 'Healthcare' },
  { id: 3, name: 'JHON', role: 'Founder', location: 'New York', industryFocus: 'Tech' },

  // Add more sample profiles
];

function SwipeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const navigate = useNavigate();

  const handleSwipe = (direction) => {
    setSwipeDirection(direction);
    setTimeout(() => {
      setSwipeDirection(null);
      setCurrentIndex(prevIndex => (prevIndex + 1) % sampleProfiles.length);
    }, 300); // Duration of the swipe animation
  };

  const profile = sampleProfiles[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white p-6 relative">
      <div className="relative z-10 w-full max-w-lg p-8 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">Swipe to Connect</h1>
        
        {profile && (
          <div className={`relative transition-transform duration-300 ${swipeDirection === 'left' ? 'transform -translate-x-full' : swipeDirection === 'right' ? 'transform translate-x-full' : ''}`}>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
              <div className="flex flex-col items-center">
                <img
                  src={`https://source.unsplash.com/80x80/?person&${profile.id}`} // Placeholder image
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-green-500 mb-4"
                />
                <h2 className="text-3xl font-semibold mb-2">{profile.name}</h2>
                <p className="text-lg mb-2"><strong>Role:</strong> {profile.role}</p>
                <p className="text-lg mb-2"><strong>Location:</strong> {profile.location}</p>
                <p className="text-lg mb-2"><strong>Industry Focus:</strong> {profile.industryFocus}</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          <button
            onClick={() => handleSwipe('left')}
            className="py-3 px-6 bg-red-600 rounded-lg text-base font-semibold shadow-lg hover:bg-red-700 transition-colors"
          >
            Dislike
          </button>
          <button
            onClick={() => handleSwipe('right')}
            className="py-3 px-6 bg-green-600 rounded-lg text-base font-semibold shadow-lg hover:bg-green-700 transition-colors"
          >
            Like
          </button>
        </div>
      </div>
    </div>
  );
}

export default SwipeScreen;
