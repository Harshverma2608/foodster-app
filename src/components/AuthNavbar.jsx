import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const AuthNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("authToken");
    navigate("/visit");
  };

  const navLinks = [
    { name: "Dashboard", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Plans", path: "/plans" },
    { name: "Discover", path: "/discover" },
    { name: "My Plans", path: "/my-plans" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 shadow-md" : "bg-white/80 backdrop-blur-md border-b border-gray-100"}`}>
        <div className="max-w-7xl mx-auto px-5 md:px-16 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img src="/FoodsterLogo3.png" alt="Foodster" className="h-9 w-auto" />
            <span className="font-bold text-xl tracking-wide text-gray-800" style={{ fontFamily: "Oswald, sans-serif" }}>Foodster</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors pb-0.5 ${
                  location.pathname === link.path
                    ? "text-[#b61722] border-b-2 border-[#b61722]"
                    : "text-gray-600 hover:text-[#b61722]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Logout */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleLogout}
              className="text-sm font-medium text-gray-600 hover:text-red-500 transition-colors border border-gray-200 hover:border-red-400 hover:bg-red-50 px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        {/* Mobile Drawer */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-screen border-t border-gray-100 bg-white" : "max-h-0"}`}>
          <div className="px-5 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === link.path
                    ? "bg-[#b61722]/10 text-[#b61722] font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default AuthNavbar;
