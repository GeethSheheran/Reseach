// Import necessary dependencies
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import SignIn from './SignIn'; 
import PredictionPage from './PredictionPage';

// Define your routes
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="pt-0"></div>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/prediction" element={<PredictionPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes> 
      </div>
    </Router>
  );
};

export default App;
