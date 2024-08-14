// components/Actions.js
import React from 'react';
import { Container, Box, Button } from '@mui/material';

function Actions() {
  return (
    <Container>
      <Box sx={{ my: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button variant="contained" color="primary" href="/curriculo.pdf" download>
          Baixar Currículo
        </Button>
        <Button variant="contained" color="primary" href="#contact">
          Entrar em Contato
        </Button>
      </Box>
    </Container>
  );
}

export default Actions;
