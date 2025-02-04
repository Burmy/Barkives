import { Box, Typography } from '@mui/material';
import React from 'react';
import Logout from './Logout';

function Header() {
  return (
    <Box sx={{ display: 'flex', width: '100%', marginTop:"100px" }}>
      <Typography fontSize={75} fontFamily={'Oi'} width={'100%'} textAlign={'center'}>
        Barkives
      </Typography>
      <Box sx={{ top: '40px', right: '40px', position: 'absolute' }}>
        <Logout />
      </Box>
    </Box>
  );
}

export default Header;
