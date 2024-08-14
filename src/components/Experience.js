// components/Experience.js
import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

function Experience() {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Experiência
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant="body1" paragraph>
            Desenvolvedor Unity, C# na Empresa Edtek - 2015 até 2022
          </Typography>
          <Typography variant="body1" paragraph>
            Desenvolvedor Unity, C# na Empresa Plataforma Launcher - 2023 até 2024
          </Typography>
          <Typography variant="body1" paragraph>
            Desenvolvedor Fullstack React e Node.js na Empresa Logica Soluções - 2024
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Experience;
