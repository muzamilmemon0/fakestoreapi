import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 ">
      <Link to="/" className="mr-4">
        Home
      </Link>
      <Link to="/categories" className="mr-4">
        Categories
      </Link>
      <Link to="/products" className="mr-4">
        Products
      </Link>
      <Link to="/users" className="mr-4">
        Users
      </Link>
      <Link to="/carts" className="mr-4">
        Carts
      </Link>
    </nav>
  );
}

export default Navbar;
