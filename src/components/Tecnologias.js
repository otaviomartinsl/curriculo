// components/Tecnologias.js
import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';

const technologies = [
  { imageUrl: 'https://www.rocketseat.com.br/_next/static/media/react-native-icon.891a299a.svg', name: 'React Native' },
  { imageUrl: 'https://www.rocketseat.com.br/_next/static/media/react-icon.38930335.svg', name: 'React JS' },
  { imageUrl: 'https://www.rocketseat.com.br/_next/static/media/csharp-icon.d39a10dc.svg', name: 'C#' },
  { imageUrl: 'https://www.rocketseat.com.br/_next/static/media/nodejs-icon.a27fddad.svg', name: 'Node.js' },
];

function Tecnologias() {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Tecnologias
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {technologies.map((tech, index) => (
           <Grid item key={index} xs={6} sm={6} md={3}>
           <Box sx={{ textAlign: 'center' }}>
             <img src={tech.imageUrl} alt={tech.name} style={{ width: 50, height: 50 }} />
             <Typography variant="h6">{tech.name}</Typography>
           </Box>
         </Grid>
         
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Tecnologias;
