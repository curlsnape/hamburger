import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { IoClose } from "react-icons/io5";

function App() {
  const [ismenuopen, setismenuopen] = useState(false);
  const menutoggler = () => {
    setismenuopen(!ismenuopen);
  };
  return (
    <div className="w-full h-screen bg-zinc-300">
      <nav className="w-full flex justify-between shadow-xl fixed z-50 items-center px-5 md:px-10 h-16 text-white bg-zinc-900">
        <h2 className="text-2xl">logo</h2>
        <div className="navlinks hidden md:flex items-center gap-3">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <button
          onClick={menutoggler}
          className="md:hidden transition-all hover:scale-110 h-8 w-8 flex justify-center items-center delay-150 duration-300 hover:font-bold hover:bg-white rounded-full hover:text-black"
        >
          {ismenuopen ? (
            <IoClose className="font-semibold text-lg" />
          ) : (
            <HiOutlineMenuAlt3 className="font-semibold text-lg" />
          )}
        </button>
      </nav>
      {ismenuopen &&   <div className="w-full flex transition-all delay-150 absolute bg-zinc-800 text-white top-16 justify-center flex-col">
        <Link
          className="p-2 hover:px-4 transition-all hover:bg-zinc-700"
          to="/"
        >
          Home
        </Link>
        <Link
          className="p-2 hover:px-4 transition-all hover:bg-zinc-700"
          to="/about"
        >
          About
        </Link>
        <Link
          className="p-2 hover:px-4 transition-all hover:bg-zinc-700"
          to="/services"
        >
          Services
        </Link>
        <Link
          className="p-2 hover:px-4 transition-all hover:bg-zinc-700"
          to="/contact"
        >
          Contact
        </Link>
      </div>}
    
    </div>
  );
}

export default App;
