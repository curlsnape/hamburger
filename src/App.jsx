import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Route, Routes } from 'react-router-dom'
import Contact from './Components/Contact'
import Services from './Components/Services'
import About from './Components/About'
import Home from "./Components/Home";

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
      {ismenuopen && (
        <div className="w-full flex transition-all delay-150 absolute z-40 bg-zinc-800 text-white top-16 justify-center flex-col">
          <Link
            className="p-2 hover:px-4 transition-all hover:bg-zinc-700"
            to="/"
            onClick={menutoggler}
          >
            Home
          </Link>
          <Link
            className="p-2 hover:px-4 transition-all hover:bg-zinc-700"
            to="/about"
            onClick={menutoggler}
          >
            About
          </Link>
          <Link
            className="p-2 hover:px-4 transition-all hover:bg-zinc-700"
            to="/services"
            onClick={menutoggler}
          >
            Services
          </Link>
          <Link
            className="p-2 hover:px-4 transition-all hover:bg-zinc-700"
            to="/contact"
            onClick={menutoggler}
          >
            Contact
          </Link>
        </div>
      )}
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
  );
}

export default App;
