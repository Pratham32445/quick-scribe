import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, User, LayoutDashboard } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
// import { useAuth } from "@/lib/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import AuthService from "../../lib/auth";
import { supabase } from "@/supabase/config/supbaseClient";
import { User as supabaseUser } from "@supabase/supabase-js";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  // const { isAuthenticated, logout } = useAuth();
  const [loggedInuser, setLoggedInUser] = useState<null | supabaseUser>(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setLoggedInUser(user);
      }
    };
    getUser();
  }, []);

  // Debug authentication state
  // useEffect(() => {
  //   console.log("Navbar auth state:", {
  //     isAuthenticated,
  //     hasToken: AuthService.isAuthenticated(),
  //   });
  // }, [isAuthenticated]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Get initials for avatar fallback
  const getInitials = () => {
    if (!loggedInuser) return;
    return loggedInuser.identities![0].identity_data!.name[0] || "N";
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) setLoggedInUser(null);
    // logout();
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  // Use local state for authentication if context fails
  // const isLoggedIn = isAuthenticated || AuthService.isAuthenticated();

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="content-wrap py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/Asset 3.svg"
              alt="Quikscribe Logo"
              className="h-7 w-auto"
            />
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-quikscribe-600 to-quikscribe-500 bg-clip-text text-transparent">
              Quikscribe
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm link-highlight">
              Features
            </a>
            <a href="#use-cases" className="text-sm link-highlight">
              Use Cases
            </a>
            <a href="#pricing" className="text-sm link-highlight">
              Pricing
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {loggedInuser ? (
            // User is logged in - show avatar with dropdown
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <Avatar className="h-8 w-8 border-2 border-quikscribe-100 hover:border-quikscribe-200 transition-all">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-quikscribe-500 text-white">
                    {getInitials()}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link to={"/dashboard"}>
                  <DropdownMenuItem className="cursor-pointer">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            // User is not logged in - show sign in and register buttons
            <>
              <Link
                to="/signin"
                className="hidden md:inline-block text-sm font-medium hover:text-quikscribe-700 transition-colors"
              >
                Sign In
              </Link>
              <Link to="/register">
                <Button
                  className="bg-quikscribe-500 hover:bg-quikscribe-600 text-white transition-all duration-300 hover:shadow-md text-xs md:text-sm px-3 md:px-4 py-1 md:py-2 h-auto"
                  size="sm"
                >
                  Try Free
                </Button>
              </Link>
            </>
          )}
          <button
            className="md:hidden text-slate-700 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && isMobile && (
        <motion.div
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="content-wrap flex flex-col space-y-4">
            <a
              href="#features"
              className="text-slate-700 py-2 px-4 rounded-md hover:bg-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#use-cases"
              className="text-slate-700 py-2 px-4 rounded-md hover:bg-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Use Cases
            </a>
            <a
              href="#pricing"
              className="text-slate-700 py-2 px-4 rounded-md hover:bg-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>

            {loggedInuser ? (
              // User is logged in - show profile and logout options
              <>
                <div className="border-t border-slate-100 my-2"></div>
                <div
                  className="text-slate-700 py-2 px-4 rounded-md hover:bg-slate-50 flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </div>
                <div
                  className="py-2 px-4 rounded-md hover:bg-slate-50 flex items-center text-red-500"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </div>
              </>
            ) : (
              // User is not logged in - show sign in and register links
              <>
                <Link
                  to="/signin"
                  className="text-slate-700 py-2 px-4 rounded-md hover:bg-slate-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="text-slate-700 py-2 px-4 rounded-md hover:bg-slate-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
