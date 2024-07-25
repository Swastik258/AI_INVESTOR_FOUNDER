import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/singup_login/signup';
import FounderProfilePage from './founder_component/profile';
import InvestorProfilePage from './investor_component/profile';
import Home from './homescreen/home';
import Login from './components/singup_login/login';
import WelcomeScreen from './investor_component/InvestorWelcomeScreen'; // Ensure correct import path
import SwipeScreen from './swipe_profile_for_investor/swipe';
// import Swipe from './swipe_profile_for_founder/founderswipe';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/founder-profile" element={<FounderProfilePage />} />
        <Route path="/investor-profile" element={<InvestorProfilePage />} />
        <Route path="/welcome" element={<WelcomeScreen />} /> {/* Add this route */}
        <Route path="/swipe" element={<SwipeScreen />} />
        {/* <Route path="/founderswipe" element={<Swipe />} /> */}


      </Routes>
    </Router>
  );
}

export default App;
