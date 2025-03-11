import { Box } from '@mui/material';
import React from 'react';
import videoSrc from '../../assets/videos/pressOn.mp4'; 

function PressOnSection() {
  return (
    <Box sx={{ position: "relative", overflow: "hidden", height: "70vh", width: "100%" }}>
      <video 
        autoPlay 
        loop 
        muted 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%', 
          minHeight: '100%',
          width: '100%',
          height: '100%',
          zIndex: -1,
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover', 
        }}
      >
        <source src={videoSrc} type='video/mp4' />
        Tu navegador no soporta el video.
      </video>
    </Box>
  );
}

export default PressOnSection;