// import React from 'react';
// import MehndiDesignApp from './MehndiDesignApp';
// import HomePage from './HomePage';

// function App() {
//   return 
//   // <MehndiDesignApp />;
//   <HomePage/>
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import MehndiGallery from './MehndiGallery';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DesignsList from './pages/DesignsList';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<MehndiGallery />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/" element={<DesignsList />} />
      </Routes>
    </Router>
  );
}

export default App;
