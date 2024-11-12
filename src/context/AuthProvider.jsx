import { createContext, useState } from 'react';
import axiosInstance from '../services/axiosInstance';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  const login = async (email, password) => {
    const userData = {
      email,
      password
    }

    try {
      const response = await axiosInstance.post('/UserRegister/login', userData);
      if (response.status === 200) {
        setIsAuthenticated(true);
        setToken(response.data);

        document.cookie = `jwt=${response.data}; path=/; Secure; HttpOnly`;

      } else {
        setIsAuthenticated(false);
        setToken(null);
        document.cookie = 'jwt=; Max-Age=0; path=/;';
      }

    } catch (error) {
      console.log(error)
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setToken(null);
  };

  const authContextValue = {
    isAuthenticated,
    token,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;