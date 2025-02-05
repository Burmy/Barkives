import React from 'react';
import { Box } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Pagination({ currentPage, totalPages, goToPage }) {
  return (
    <Box sx={{ display: 'flex', marginTop: '50px' }}>
      {currentPage !== 1 && (
        <ChevronLeftIcon
          sx={[
            { transform: 'scale(2)', color: 'black' },
            {
              '&:hover': {
                color: '#878787',
                cursor: 'pointer',
              },
            },
          ]}
          onClick={() => goToPage(currentPage - 1)}
        ></ChevronLeftIcon>
      )}
      <Box sx={{ margin: '0 20px', fontSize: '20px', fontFamily: 'Fredoka', fontWeight: '500' }}>
        Page {currentPage} of {totalPages}
      </Box>
      {currentPage !== totalPages && (
        <ChevronRightIcon
          sx={[
            { transform: 'scale(2)', color: 'black' },
            {
              '&:hover': {
                color: '#878787',
                cursor: 'pointer',
              },
            },
          ]}
          onClick={() => goToPage(currentPage + 1)}
        ></ChevronRightIcon>
      )}
    </Box>
  );
}

export default Pagination;
