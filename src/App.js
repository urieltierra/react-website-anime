import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/App.css';
import AnimePageSinglePage from './pages/AnimeSinglePage';
import Home from './pages/Home';
import IsaoTakahata from './pages/IsaoTakahata';
import RecommendedAnime from './pages/RecommendedAnime';
import StudioGhibli from './pages/StudioGhibli';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studio-ghibli" element={<StudioGhibli />} />
          <Route path="/isao-takahata" element={<IsaoTakahata />} />
          <Route path="/recommended-anime" element={<RecommendedAnime />} />
          <Route
            path="/recommended-anime/:id"
            element={<AnimePageSinglePage />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
