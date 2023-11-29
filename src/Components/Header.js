// src/components/Header.js

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom


const Header = () => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Car Shop</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <Link to="/login">
               Login
            </Link>  
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
