import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/navbar';
import Index from './components/Index';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projectssection from './components/Projectssection';
import Viewproject from './components/Viewproject';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Index />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projectssection" element={<Projectssection />} />
        <Route path="/projectssection/viewproject" element={<Viewproject />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
