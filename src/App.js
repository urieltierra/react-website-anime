import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/App.css';
import AnimePageSinglePage from './pages/AnimeSinglePage';
import HayaoMiyazaki from './pages/HayaoMiyazaki';
import Home from './pages/Home';
import IsaoTakahata from './pages/IsaoTakahata';
import MakotoShinkai from './pages/MakotoShinkai';
import MamoruHosoda from './pages/MamoruHosoda';
import NaokoYamada from './pages/NaokoYamada';
import RecommendedAnime from './pages/RecommendedAnime';
import SatoshiKon from './pages/SatoshiKon';
import StudioGhibli from './pages/StudioGhibli';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/isao-takahata" element={<IsaoTakahata />} />
          <Route path="/satoshi-kon" element={<SatoshiKon />} />
          <Route path="/makoto-shinkai" element={<MakotoShinkai />} />
          <Route path="/studio-ghibli" element={<StudioGhibli />} />
          <Route path="/recommended-anime" element={<RecommendedAnime />} />
          <Route path="/hayao-miyazaki" element={<HayaoMiyazaki />} />
          <Route path="/naoko-yamada" element={<NaokoYamada />} />
          <Route path="/mamoru-hosoda" element={<MamoruHosoda />} />
          <Route path="/:id" element={<AnimePageSinglePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
