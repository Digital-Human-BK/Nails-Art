import { createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase-config';

import useSessionStorage from '../hooks/useSessionStorage';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useSessionStorage('nailsArtUser', null);

  useEffect(() => {
    onAuthStateChanged(auth, (fbUser) => {
      if (fbUser) {
        setUser(fbUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const logout = async () => {
    await signOut(auth);
    navigate('/');
  };

  const signIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
