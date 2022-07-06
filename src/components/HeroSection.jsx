import React from 'react';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/public/videos/video-2.mp4" autoPlay loop muted />
      <h2>Isao Takahata</h2>
      <p>The Anime genius who changed our lives</p>
      <div className="hero-btns"></div>
    </div>
  );
}

export default HeroSection;
