import React from 'react';
import '../css/App.css';
import HeroSection from '../components/HeroSection';
import Recommended from '../components/Recommended';
import Directors from '../components/Directors';
import Blog from '../components/Blog';

function Home() {
  return (
    <>
      <HeroSection />
      <Recommended />
      <Directors />
      <Blog />
    </>
  );
}

export default Home;
