import { Button, Container, Input, OutlinedInput } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

function Login() {
  const navigate = useNavigate();
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
    <Container sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', alignItems: 'center' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <OutlinedInput
            sx={{ padding: '0px 0px !important' }}
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

          {errors.name?.type === 'required' && <p className="errorMsg">name is required.</p>}
          {errors.name?.type === 'checkLength' && <p className="errorMsg">name should be at-least 3 characters.</p>}
        </div>
        <div>
          <OutlinedInput
            type="email"
            placeholder="Email Address"
            {...register('email', {
              required: 'Email is required.',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Email is not valid.',
              },
            })}
          />
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        </div>
        <div>
          <Button type="submit">Login</Button>
        </div>
      </form>
    </Container>
  );
}

export default Login;
