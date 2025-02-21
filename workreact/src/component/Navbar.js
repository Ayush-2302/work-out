import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 sticky z-50 top-0 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Workout Buddy</div>
        <ul className="flex space-x-4">
          <li>
            <Link className="text-white hover:text-blue-200" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-blue-200" to="/products">
              Product
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
