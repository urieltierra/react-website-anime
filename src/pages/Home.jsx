import React from 'react';
import '../css/App.css';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Recommended from '../components/Recommended';
import Directors from '../components/Directors';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Recommended />
      <Directors />
      <Blog />
      <Footer />
    </>
  );
}

export default Home;
