import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Landing() {
  return (
    <Container sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', alignItems: 'center' }}>
      <Typography fontSize={26} fontWeight={550} fontFamily={'DM Sans'}>
        Welcome to
      </Typography>
      <Typography fontSize={75} fontFamily={'Oi'}>
        Barkives
      </Typography>
      <Typography fontSize={26} fontWeight={550} fontFamily={'DM Sans'}>
        Where Every Tail Has a Tale!
      </Typography>

      <div>
        <DotLottieReact src="https://lottie.host/9ec83817-791b-40df-bdc2-3051208fd29a/wZJ9oAyqDk.lottie" loop autoplay />
      </div>
      <Typography fontSize={26} fontWeight={550} fontFamily={'DM Sans'}>
        Join Thousand others to match with you pup today!
      </Typography>
      <Button
        href="/login"
        sx={[
          { width: '200px', fontSize: '26px', fontFamily: 'DM Sans', background: 'black', border: 'solid black 2px', borderRadius: '25px' },
          {
            '&:hover': {
              color: 'black',
              backgroundColor: '#F4EFE7',
              border: 'solid black 2px',
            },
          },
        ]}
        variant="contained"
      >
        LogIn
      </Button>
    </Container>
  );
}

export default Landing;
