import { Box, Button, Container } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../utils/AuthContext';

const styles = {
  flexStyle: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
  },
  inputStyle: {
    border: '2px solid black',
    background: 'white',
    margin: '20px 20px',
    padding: '15px 20px',
    fontSize: '18px',
    borderRadius: '25px',
    fontFamily: 'Fredoka',
    fontWeight: '550',
    width: '280px',
  },
  errorStyle: {
    position: 'absolute',
    marginTop: '80px',
    fontFamily: 'Fredoka',
    fontSize: '18px',
    color: '#e14e3b',
  },
  btnStyle: [
    {
      width: '200px',
      fontSize: '26px',
      fontFamily: 'Fredoka',
      background: '#FFC887',
      border: 'black solid 2px',
      boxShadow: '5px 5px #000000',
      borderRadius: '25px',
      color: 'black',
      margin: '25px 0 40px 0',
    },
    {
      '&:hover': {
        boxShadow: '2px 2px #000000',
      },
    },
  ],
  cardStyle: {
    backgroundColor: '#f4e7d7',
    padding: '50px 20px 25px 20px',
    border: 'black solid 2px',
    boxShadow: '5px 5px #000000',
    borderRadius: '25px',
  },
};

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const auth = useAuth();

  const onSubmit = async (data) => {
    auth.loginAction(data);
  };

  return (
    <Container className="bg" maxWidth="" sx={styles.flexStyle}>
      <Box sx={styles.cardStyle}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={styles.flexStyle}>
            <input
              style={styles.inputStyle}
              type="text"
              placeholder="Display Name"
              name="name"
              {...register('name', {
                required: true,
                validate: {
                  checkLength: (value) => value.length >= 3,
                },
              })}
            />
            {errors.name?.type === 'required' && (
              <span style={styles.errorStyle} className="errorMsg">
                ✖ Name is required
              </span>
            )}
            {errors.name?.type === 'checkLength' && (
              <span style={styles.errorStyle} className="errorMsg">
                ✖ Name should be at-least 3 characters
              </span>
            )}
          </Box>
          <Box sx={styles.flexStyle}>
            <input
              style={styles.inputStyle}
              type="email"
              placeholder="Email Address"
              {...register('email', {
                required: '✖ Email is required.',
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: 'Email is not valid.',
                },
              })}
            />
            {errors.email && (
              <span style={styles.errorStyle} className="errorMsg">
                {errors.email.message}
              </span>
            )}
          </Box>
          <Box>
            <Button sx={styles.btnStyle} type="submit">
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default Login;
