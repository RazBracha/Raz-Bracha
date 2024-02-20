import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Volunteer from './pages/Volunteer';

function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Layout><HomePage /></Layout>} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/volunteer" element={<Volunteer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

