import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/lib/AuthContext";
import { supabase } from "@/supabase/config/supbaseClient";

interface SignInFormData {
  email: string;
  password: string;
}

interface ValidationError {
  loc: (string | number)[];
  msg: string;
  type: string;
}

const SignIn = () => {
  const [formData, setFormData] = useState<SignInFormData>({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<SignInFormData>>({});
  const { toast } = useToast();
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  // Debug authentication state in the SignIn component
  React.useEffect(() => {
    console.log("SignIn component - Auth state:", { isAuthenticated });
  }, [isAuthenticated]);

  const validateForm = (): boolean => {
    const newErrors: Partial<SignInFormData> = {};
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    try {
      console.log("Attempting login with:", formData);
      await login(formData.email, formData.password);
      
      console.log("Login successful, auth state:", { isAuthenticated });
      
      toast({
        title: "Sign in successful",
        description: "You have successfully signed in to your account.",
        variant: "default",
      });
      
      // Force localStorage check and trigger re-render of components
      window.localStorage.setItem('temp_check', Date.now().toString());
      window.localStorage.removeItem('temp_check');
      
      // Add a slight delay to ensure everything is updated
      setTimeout(() => {
        // Navigate to home page, and force a reload to ensure all components are updated
        navigate("/");
        window.location.reload();
      }, 500);
    } catch (error) {
      console.error("Sign in error:", error);
      
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      
      // Check if the error contains field-specific validation errors
      if (errorMessage.includes('email:') || errorMessage.includes('password:')) {
        const errorFields: Partial<SignInFormData> = {};
        
        if (errorMessage.includes('email:')) {
          errorFields.email = "Invalid email format or email not found";
        }
        
        if (errorMessage.includes('password:')) {
          errorFields.password = "Invalid password";
        }
        
        setErrors(errorFields);
      } else if (errorMessage.toLowerCase().includes('authentication')) {
        // Authentication-specific errors
        setErrors({
          email: "Invalid credentials",
          password: "Invalid credentials"
        });
        
        toast({
          title: "Authentication failed",
          description: "Invalid email or password",
          variant: "destructive",
        });
      } else {
        // General error
        toast({
          title: "Sign in failed",
          description: errorMessage,
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => { 
    const {error} = await supabase.auth.signInWithOAuth({
      provider : "google",
      options : {
        redirectTo : `${window.location.origin}/dashboard`
      }
    })
    console.log(error);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16 md:py-24">
        <div className="w-full max-w-md px-4">
          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_50%_at_50%_50%,rgba(14,165,233,0.06)_0%,rgba(251,252,253,0)_100%)]" />
            
            <motion.div
              className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-slate-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h1 className="text-2xl md:text-3xl font-bold mb-2">
                    Welcome Back
                  </h1>
                  <p className="text-slate-600 text-sm md:text-base">
                    Sign in to your Quikscribe account
                  </p>
                </motion.div>
              </div>

              <motion.form
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onSubmit={handleSubmit}
              >
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className={`w-full ${errors.email ? 'border-red-500' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <a href="#" className="text-xs text-quikscribe-600 hover:text-quikscribe-700">
                      Forgot password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className={`w-full ${errors.password ? 'border-red-500' : ''}`}
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <p className="text-xs text-red-500 mt-1">{errors.password}</p>
                  )}
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-quikscribe-500 hover:bg-quikscribe-600 text-white transition-all duration-300 hover:shadow-md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing In..." : "Sign In"}
                </Button>
              </motion.form>
              
              <div className="mt-6 text-center text-sm">
                <p className="text-slate-600">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="text-quikscribe-600 hover:text-quikscribe-700 font-medium"
                  >
                    Create one
                  </Link>
                </p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="text-center text-xs text-slate-500 mb-3">
                  Or continue with
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="w-full"
                    type="button"
                    onClick={handleGoogleSignIn}
                  >
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                      <path d="M1 1h22v22H1z" fill="none" />
                    </svg>
                    Google
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn; 