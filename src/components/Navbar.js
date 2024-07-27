
import React from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md px-14 ">
      <div className="flex items-center space-x-6 text-zinc-800">
        <FaBars className="text-xl cursor-pointer font-normal " />
        <Link to="/products" className="text-lg hover:underline text-zinc-600">Products</Link>
        <Link to="/rooms" className="text-lg hover:underline text-zinc-600">Rooms</Link>
        <Link to="/about" className="text-lg hover:underline text-zinc-600">About us</Link>
      </div>
      <div className="flex items-center space-x-2 ">
        <input
          type="text"
          placeholder="What can we help you find?"
          className="border-b border-zinc-900 focus:outline-none focus:border-black px-2 w-[30vw] py-1"
        />
        <FaSearch className="text-xl cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;