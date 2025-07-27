
//import { HashRouter as Router, Routes, Route } from 'react-router-dom';
//import { HashRouter as Router } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DesignsList from './pages/DesignsList';
import Gallery from './pages/Gallery';
import AdminDashboard from './pages/AdminDasboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/designs" element={<DesignsList />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
