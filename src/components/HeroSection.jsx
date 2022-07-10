import React from 'react';
import '../css/HeroSection.css';
import '../css/App.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

function HeroSection() {
  return (
    <div className="hero-container">
      <video autoPlay="autoplay" loop="loop" muted>
        <source
          src="https://www.animeselection.com/media/videos/video-1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <h2>Isao Takahata</h2>
      <p>The Anime genius who changed our lives</p>
      <div className="hero-btns">
        <Box sx={{ '& button': { m: 1 } }}>
          <Button variant="outlined" size="large">
            Filmography
          </Button>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" endIcon={<PlayCircleOutlineIcon />}>
            Watch videos
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default HeroSection;
