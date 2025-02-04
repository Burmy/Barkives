import { useContext, createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const BASE_URL = 'https://frontend-take-home-service.fetch.com';
  const [validUser, setValidUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setValidUser(storedUser);
    }
  }, []);

  const loginAction = async (data) => {
    try {
      await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include',
      }).then((response) => {
        if (response.status == 200) {
          console.log(data);
          setValidUser(data.name);
          localStorage.setItem('user', data.name);
          navigate('/home');
          return;
        } else {
          throw `error with status ${response.status}`;
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = async () => {
    try {
      const response = await fetch(`${BASE_URL}/auth/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
    setValidUser('');
    localStorage.removeItem('user');
    navigate('/');
  };

  return <AuthContext.Provider value={{ validUser, loginAction, logOut }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
