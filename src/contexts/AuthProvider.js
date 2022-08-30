import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext({});

const guest = {
  email: '',
  accessToken: ''
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage('user', guest);

  const onAuth = (authData) => {
    setUser(authData);
  };

  const onLogout = () => {
    setUser(guest);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, onAuth, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
