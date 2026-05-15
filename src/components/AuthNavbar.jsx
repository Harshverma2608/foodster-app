import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const AuthNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("authToken");
    navigate("/visit");
  };

  const navLinks = [
    { name: "Dashboard", path: "/" },
    { name: "Recipes", path: "/recipes" },
    { name: "Meal Plan", path: "/meal-plan" },
    { name: "Grocery List", path: "/grocery-list" },
    { name: "Documentation", path: "/documentation" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2">
          <img src="/FoodsterLogo3.png" alt="Foodster" className="h-9 w-auto" />
          <span className="font-oswald text-xl font-semibold tracking-wide text-gray-800">
            Foodster
          </span>
        </Link>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors pb-1 ${
                location.pathname === link.path
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-600 hover:text-orange-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <button
          onClick={handleLogout}
          className="text-sm text-gray-600 hover:text-red-500 transition-colors border border-gray-200 hover:border-red-500 hover:bg-red-50 px-4 py-2 rounded-md font-medium"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default AuthNavbar;
