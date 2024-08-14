// components/Education.js
import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

function Education() {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Formação Acadêmica
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant="body1" paragraph>
            2° período - Análise e Desenvolvimento de Sistemas, Universidade Puc Minas
          </Typography>
          <Typography variant="body1" paragraph>
            Rocketseat - ReactJS 
          </Typography>
          <Typography variant="body1" paragraph>
            Rocketseat - React Native 
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Education;
