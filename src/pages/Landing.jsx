import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Footer from '../components/Footer';
import giff from '../assets/landing.gif';

const styles = {
  typoStyle: { fontSize: '26px', fontWeight: '550', fontFamily: 'Fredoka' },
};

function Landing() {
  return (
    <Container
      className="bg"
      maxWidth=""
      sx={{
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        alignItems: 'center',
      }}
    >
      <Box sx={{ backgroundColor: '#f4e7d7', padding: ' 0px 20px', marginLeft: '-30px' }}>
        <Typography sx={styles.typoStyle}>Welcome to</Typography>
        <Typography sx={{ fontSize: '75px', fontFamily: 'Oi' }}>The Barkives</Typography>
        <Typography sx={styles.typoStyle}>Where Every Tail Has a Tale!</Typography>
        <img src={giff}></img>
        <Typography sx={styles.typoStyle}>Join thousands of others to match with your pup today!</Typography>
        <Button
          href="/login"
          sx={[
            {
              width: '200px',
              fontSize: '26px',
              fontFamily: 'Fredoka',
              background: '#FFC887',
              border: 'black solid 2px',
              boxShadow: '5px 5px #000000',
              borderRadius: '25px',
              color: 'black',
              margin: '10px 0 40px 0',
            },
            {
              '&:hover': {
                boxShadow: '2px 2px #000000',
              },
            },
          ]}
          variant="contained"
        >
          LogIn
        </Button>
        <Footer />
      </Box>
    </Container>
  );
}

export default Landing;
