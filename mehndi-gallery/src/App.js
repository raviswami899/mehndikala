
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
//import { HashRouter as Router } from "react-router-dom";

//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DesignsList from './pages/DesignsList';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<DesignsList />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
