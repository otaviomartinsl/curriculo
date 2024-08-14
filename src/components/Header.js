// components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Box, Avatar } from '@mui/material';

function Header() {
  return (
    <AppBar
      position="static"
      sx={{ 
        width: 220, 
        height: 265, 
        backgroundColor: '#1976d2', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: 2,
        flexDirection: 'column'
      }}
    >
      <Avatar
        alt="Foto de Perfil"
        src="https://media.licdn.com/dms/image/D4D03AQF4S0hHWQ2-Sg/profile-displayphoto-shrink_400_400/0/1706134299680?e=1729123200&v=beta&t=eArXSf2oQ0YO_Cm24_XBPSH788x2aemjsWF8DV8-iw4"
        sx={{ width: 120, height: 120, mb: 2 }}
      />
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h6" component="div">
          Otávio Martins
        </Typography>
        <Typography variant="body2" component="div">
          Desenvolvedor Full stack React JS, React Native, C#
        </Typography>
      </Box>
    </AppBar>
  );
}

export default Header;
