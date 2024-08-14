// components/About.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function About() {
  return (
    <Container>
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Sobre Mim
        </Typography>
        <Typography variant="body1">
          Desenvolvedor Full stack com experiência em React, React Native, Node.JS, C#, TypeScript, JavaScript, Styled Components, HTML, CSS, Docker, PostgreSQL, Atualmente trabalho como Desenvolvedor Fullstack freelancer. tenho interesse em oportunidades de trabalho CLT e PJ. 
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
