// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from './pages/HomePage';

// function App() {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//         </Routes>
//       </Router>

//       <div className="App"></div>
//       {/* Other components or content can be added here */}
//     </>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

