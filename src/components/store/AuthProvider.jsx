import { useState } from 'react';
import AuthContext from './auth-context';

const AuthProvider = (props) => {
  const storedToken = localStorage.getItem('token');
  const [token, setToken] = useState(storedToken);

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  const authObj = {
    isLoggedIn: !!token,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={authObj}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
