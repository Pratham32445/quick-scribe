import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import { AuthProvider } from "./lib/AuthContext";
import Dashboard from "./pages/Dashboard";
import Payment from "./pages/Payment";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

const ProtectedRoute = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate loading (Optional: Replace with real API check)
    setTimeout(() => setLoading(false), 500);
  }, []);

  if (loading)
    return (
      <div className="text-center mt-10">🔄 Checking authentication...</div>
    );

  return <Outlet/>
};


const router = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/register", element: <Register /> },
  {
    path: "/dashboard",
    element: <ProtectedRoute/>,
    children : [
      {path : "",element : <Dashboard/>},
      {path : "payment", element : <Payment/>}
    ]
  },
  { path: "*", element: <NotFound /> },
]);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RouterProvider router={router}/>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App; 
