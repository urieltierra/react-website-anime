import React from 'react';
import '../css/App.css';
import HeroSection from '../components/HeroSection';
import Recommended from '../components/Recommended';

function Home() {
  return (
    <>
      <HeroSection />
      <Recommended />
    </>
  );
}

export default Home;
