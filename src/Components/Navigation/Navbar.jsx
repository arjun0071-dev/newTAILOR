import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import myImage from "../../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Api", path: "/api" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const blogDropdown = [
    { name: "Blog", path: "/blog" },
    { name: "Blog Details", path: "/blog-details" },
    { name: "Elements", path: "/elements" },
  ];

  return (
    <nav className="fixed z-20 w-full bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
     
        <Link to="/">
          <img src={myImage} alt="Logo" className="w-28 h-auto" />
        </Link>

        
        <div className="hidden md:flex gap-6 font-medium items-center">
          {navs.map((val, i) => (
            <div key={i} className="group relative">
              {val.name === "Blog" ? (
                <>
                  <span
                    className={`cursor-pointer py-2 px-2 transition ${
                      location.pathname === val.path
                        ? "text-blue-600"
                        : "hover:text-blue-600"
                    }`}
                  >
                    {val.name}
                  </span>
                  <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md w-44">
                    {blogDropdown.map((child, j) => (
                      <Link
                        key={j}
                        to={child.path}
                        className="block px-4 py-2 hover:bg-gray-100 text-sm"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={val.path}
                  className={`py-2 px-2 transition ${
                    location.pathname === val.path
                      ? "text-blue-600"
                      : "hover:text-blue-600"
                  }`}
                >
                  {val.name}
                </Link>
              )}
            </div>
          ))}

   
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
          >
            VISIT US
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-3">
          {navs.map((val, i) => (
            <div key={i}>
              {val.name === "Blog" ? (
                <details className="group">
                  <summary className="cursor-pointer font-semibold py-2 hover:text-blue-600">
                    {val.name}
                  </summary>
                  <div className="pl-4 mt-2 space-y-2">
                    {blogDropdown.map((child, j) => (
                      <Link
                        key={j}
                        to={child.path}
                        className="block py-1 hover:text-blue-600"
                        onClick={() => setMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  to={val.path}
                  className="block py-2 hover:text-blue-600"
                  onClick={() => setMenuOpen(false)}
                >
                  {val.name}
                </Link>
              )}
            </div>
          ))}

       
          <Link
            to="/contact"
            className="block text-center bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            VISIT US
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
