// components/AboutAndActions.js
import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

function AboutAndActions() {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        {/* Seção Sobre Mim */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Sobre Mim
          </Typography>
          <Typography variant="body1">
            Desenvolvedor Full stack com experiência em React, React Native, Node.JS, C#, TypeScript, JavaScript, Styled Components, HTML, CSS, Docker, PostgreSQL. Atualmente trabalho como Desenvolvedor Fullstack freelancer e tenho interesse em oportunidades de trabalho CLT e PJ.
          </Typography>
        </Box>
        
        {/* Seção de Ações */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            href="https://www.linkedin.com/in/otavio-m-73a378161/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
          <Button
            variant="contained"
            color="primary"
            href="https://github.com/otaviomartinsl"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
          <Button
            variant="contained"
            color="primary"
            href="https://play.google.com/store/apps/developer?id=edtek"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfólio
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default AboutAndActions;
