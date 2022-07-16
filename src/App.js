import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import StudioGhibli from './pages/StudioGhibli';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studio-ghibli" element={<StudioGhibli />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
