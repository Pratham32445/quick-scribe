import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AuthService from './auth';

interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<string>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
}

interface RegisterData {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(
    // Initialize from localStorage
    AuthService.isAuthenticated()
  );

  // Debug authentication state changes
  useEffect(() => {
    console.log("AuthContext state changed:", { 
      isAuthenticated,
      hasToken: AuthService.isAuthenticated() 
    });
  }, [isAuthenticated]);

  useEffect(() => {
    // Check if the user is already authenticated
    const checkAuth = async () => {
      try {
        const hasToken = AuthService.isAuthenticated();
        console.log("Checking auth on load:", { hasToken });
        
        if (hasToken) {
          // Consider authenticated if we have a token, like the reference code
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Auth check error:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Follow the reference code approach
      const token = await AuthService.login({ email, password });
      console.log("Login successful, token received:", !!token);
      
      // Set authenticated state immediately when we get a token
      setIsAuthenticated(true);
      
      return token;
    } catch (error) {
      console.error("Login failed:", error);
      setIsAuthenticated(false);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: RegisterData) => {
    setLoading(true);
    try {
      await AuthService.register(data);
      // Don't auto-login after registration
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    console.log("Logging out user");
    AuthService.logout();
    setIsAuthenticated(false);
  };

  const contextValue = {
    isAuthenticated,
    loading,
    login,
    register,
    logout,
  };

  console.log("AuthProvider rendering with state:", { isAuthenticated });

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext; 