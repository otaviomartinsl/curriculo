// App.js
import React from 'react';
import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import Header from './components/Header';
import AboutAndActions from './components/AboutAndActions';
import Experience from './components/Experience';
import Education from './components/Education';
import Tecnologias from './components/Tecnologias';
import Portifolio from './components/Portifolio';
import Contact from './components/Contact';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Azul escuro
      contrastText: '#fff', // Texto branco
    },
    background: {
      default: '#000', // Fundo preto
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ color: '#fff', backgroundColor: '#000', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          {/* Coluna do Header */}
          <Box sx={{ width: 220, height: 265, backgroundColor: theme.palette.primary.main }}>
            <Header />
          </Box>
          
          {/* Coluna ao lado do Header */}
          <Box sx={{ flex: 1, padding: 2 }}>
            <AboutAndActions />
          </Box>
        </Box>
        {/* Linha de separação mais próxima dos componentes */}
        <Box sx={{ borderTop: '2px solid #1976d2', margin: '0px 0' }}></Box>
        {/* Outros componentes */}
        <Box sx={{ padding: 2 }}>
          <Experience />
          <Education />
          <Tecnologias />
          <Portifolio />
          <Contact />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
