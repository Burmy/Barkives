import { Box, Typography } from '@mui/material';
import React from 'react';

function Header() {
  return (
    <Box className="bg" sx={{ display: 'flex', width: '100%', height: '300px', justifyContent: 'center', alignItems:"center" }}>
      <Typography fontSize={75} fontFamily={'Oi'} textAlign={'center'} sx={{ width: '700px', backgroundColor: '#f4e7d7' }}>
        Barkives
      </Typography>
    </Box>
  );
}

export default Header;
