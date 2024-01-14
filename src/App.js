import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Layout><HomePage /></Layout>} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

