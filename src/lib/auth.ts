interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  roles: string[];
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
}

interface ValidationError {
  loc: (string | number)[];
  msg: string;
  type: string;
}

interface ValidationErrorResponse {
  detail: ValidationError[];
}

// Use environment variables for API configuration with Vite's approach
const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
const AUTH_TOKEN_KEY = import.meta.env.VITE_AUTH_TOKEN_KEY || 'token';

export const AuthService = {
  /**
   * Login a user and return the token
   * Mimics the reference implementation's approach using axios.post with params
   */
  login: async (credentials: LoginCredentials): Promise<string> => {
    console.log('Login credentials:', credentials);
    
    // Use query parameters for login - this matches the reference code
    const queryParams = new URLSearchParams({
      email: credentials.email,
      password: credentials.password
    }).toString();
    
    // This mimics axios.post('http://127.0.0.1:8000/auth/login', null, { params: formData })
    const response = await fetch(`${API_URL}/auth/login?${queryParams}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      credentials: 'include',
    });

    console.log('Login response status:', response.status);
    
    const data = await response.json();
    console.log('Login response data:', data);

    if (!response.ok) {
      if (response.status === 422 && data.detail) {
        // Format validation errors in a more readable way
        const formattedErrors = data.detail
          .map((err: ValidationError) => {
            const field = err.loc[1];
            return `${field}: ${err.msg}`;
          })
          .join(', ');
        throw new Error(formattedErrors || 'Validation failed');
      }
      
      // Handle other errors
      const message = typeof data.detail === 'string' ? data.detail : 'Login failed';
      throw new Error(message);
    }

    // Get the access_token from the response data
    // In the reference code, it's res.data.access_token
    let token: string = '';
    
    if (data.access_token) {
      token = data.access_token;
    } else if (typeof data === 'string') {
      token = data;
    } else if (data.token) {
      token = data.token;
    } else {
      // If we can't find a token, use the stringified response
      console.warn('Could not find access_token in response, using full response');
      token = JSON.stringify(data);
    }
    
    // Store token in localStorage - matching the reference code
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    
    return token;
  },

  /**
   * Register a new user
   */
  register: async (data: RegisterData): Promise<void> => {
    console.log('Register data:', data);
    
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });

    console.log('Register response status:', response.status);
    
    const responseData = await response.json();
    console.log('Register response data:', responseData);

    if (!response.ok) {
      if (response.status === 422 && responseData.detail) {
        // Format validation errors in a more readable way
        const formattedErrors = responseData.detail
          .map((err: ValidationError) => {
            const field = err.loc[1];
            return `${field}: ${err.msg}`;
          })
          .join(', ');
        throw new Error(formattedErrors || 'Validation failed');
      }
      
      // Handle other errors
      const message = typeof responseData.detail === 'string' ? responseData.detail : 'Registration failed';
      throw new Error(message);
    }
  },

  /**
   * Logout the current user by removing the token
   */
  logout: (): void => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
  },

  /**
   * Check if the user is authenticated
   */
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem(AUTH_TOKEN_KEY);
  },

  /**
   * Get the current user's token
   */
  getToken: (): string | null => {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  }
};

export default AuthService; 