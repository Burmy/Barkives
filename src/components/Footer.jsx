import { Box, Link } from '@mui/material';
import React from 'react';

function Footer() {
  return (
    <Box sx={{ fontFamily: 'Fredoka', fontWeight: '550', fontSize: '20px' }}>
      Made by&nbsp;
      <Link
        sx={[
          { color: '#F29626', textDecoration: 'none' },
          {
            '&:hover': {
              color: '#EFAB57',
            },
          },
        ]}
        target="_blank"
        rel="noopener noreferrer"
        href="https://burmy.me/"
      >
        Anmol Burmy
      </Link>
      &nbsp;:)
    </Box>
  );
}

export default Footer;
