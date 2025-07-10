import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroPage from './HeroPage';
import DemoPage from './DemoPage';
import ContactPage from './ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CaseStudyDetail from './CaseStudyDetail';

function App() {
  const [isCoverVisible, setIsCoverVisible] = useState(false); // default false unless you're on DemoPage
  const contactRef = useRef(null);

  return (
    <Router>
      <div className="relative flex flex-col min-h-screen">
        <Navbar contactRef={contactRef}/>
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/demo" element={<DemoPage setIsCoverVisible={setIsCoverVisible} isCoverVisible={isCoverVisible} />} />
          <Route path="/contact" element={<ContactPage contactRef={contactRef} />} />
          <Route path="/case-study/:id" element={<CaseStudyDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
