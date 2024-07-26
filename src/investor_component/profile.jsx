import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function InvestorProfileCreation() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    industryFocus: '',
    investmentExperience: '',
    profilePicture: null,
    additionalDetails: ''
  });
  const navigate = useNavigate();

  const handleNextStep = (data) => {
    setFormData(prevData => ({ ...prevData, ...data }));
    setCurrentStep(prevStep => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const handleSubmit = () => {
    // Handle form submission logic
    console.log('Form submitted', formData);
    // Redirect to welcome screen
    navigate('/welcome');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white p-6">
      <div className="relative z-10 w-full max-w-2xl p-8 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl shadow-xl">
        <h1 className="text-4xl font-bold mb-6 text-center">Create Your Investor Profile</h1>
        
        <div className="mb-6">
          <div className="flex justify-between text-xs font-medium text-gray-300">
            <span className={`flex-1 text-center ${currentStep === 1 ? 'text-white' : ''}`}>Personal Info</span>
            <span className={`flex-1 text-center ${currentStep === 2 ? 'text-white' : ''}`}>Investment Details</span>
            <span className={`flex-1 text-center ${currentStep === 3 ? 'text-white' : ''}`}>Additional Info</span>
          </div>
          <div className="relative mt-2 h-1 bg-gray-700">
            <div className={`absolute h-full bg-green-500`} style={{ width: `${(currentStep / 3) * 100}%` }}></div>
          </div>
        </div>

        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">Profile Picture</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full bg-gray-700 rounded-lg text-gray-300 border border-gray-600 focus:ring-2 focus:ring-green-500"
                accept="image/*"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-4 bg-gray-700 rounded-lg text-gray-300 border border-gray-600 focus:ring-2 focus:ring-green-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-4 bg-gray-700 rounded-lg text-gray-300 border border-gray-600 focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="button"
              onClick={() => handleNextStep({ name: formData.name, email: formData.email, profilePicture: formData.profilePicture })}
              className="w-full py-3 bg-green-600 rounded-lg text-base font-semibold shadow-lg hover:bg-green-700"
            >
              Next
            </button>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full p-4 bg-gray-700 rounded-lg text-gray-300 border border-gray-600 focus:ring-2 focus:ring-green-500"
                placeholder="Where are you based?"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Industry Focus</label>
              <input
                type="text"
                value={formData.industryFocus}
                onChange={(e) => setFormData({ ...formData, industryFocus: e.target.value })}
                className="w-full p-4 bg-gray-700 rounded-lg text-gray-300 border border-gray-600 focus:ring-2 focus:ring-green-500"
                placeholder="What industries do you focus on?"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Investment Experience</label>
              <textarea
                value={formData.investmentExperience}
                onChange={(e) => setFormData({ ...formData, investmentExperience: e.target.value })}
                className="w-full p-4 bg-gray-700 rounded-lg text-gray-300 border border-gray-600 focus:ring-2 focus:ring-green-500"
                placeholder="Describe your investment experience"
                rows="4"
                required
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handlePreviousStep}
                className="py-3 px-6 bg-gray-600 rounded-lg text-base font-semibold shadow-lg hover:bg-gray-700"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => handleNextStep({
                  location: formData.location,
                  industryFocus: formData.industryFocus,
                  investmentExperience: formData.investmentExperience,
                })}
                className="py-3 px-6 bg-green-600 rounded-lg text-base font-semibold shadow-lg hover:bg-green-700"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">Additional Details</label>
              <textarea
                value={formData.additionalDetails}
                onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                className="w-full p-4 bg-gray-700 rounded-lg text-gray-300 border border-gray-600 focus:ring-2 focus:ring-green-500"
                placeholder="Any additional details you want to share?"
                rows="4"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handlePreviousStep}
                className="py-3 px-6 bg-gray-600 rounded-lg text-base font-semibold shadow-lg hover:bg-gray-700"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="py-3 px-6 bg-green-600 rounded-lg text-base font-semibold shadow-lg hover:bg-green-700"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InvestorProfileCreation;
