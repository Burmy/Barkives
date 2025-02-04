import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = () => {
  const user = useAuth();
  console.log(user);
  return user.validUser ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
