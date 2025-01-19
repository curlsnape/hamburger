import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
function App() {
  const [ismenuopen, setismenuopen] = useState(false);
  const togglebtn = () => {
    setismenuopen(!ismenuopen);
  };
  return (
    <div className="w-full h-screen bg-zinc-100">
      <nav className="h-16 flex bg-purple-200 items-center justify-between px-10">
        <h4 className="font-semibold text-lg">Logo</h4>
        <div className="navlinks hidden font-semibold md:flex items-center gap-3">
          <p>Home</p>
          <p>Service</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <button
          onClick={togglebtn}
          className="md:hidden transition-all duration-300 ease-in-out"
        >
          {ismenuopen ? (
            <IoCloseOutline className="font-semibold hover:bg-purple-600 hover:text-white h-8 transition-all duration-300 hover:scale-125 w-8 p-2 rounded-full" />
          ) : (
            <LuMenu className="hover:bg-purple-600 hover:text-white h-8 transition-all duration-300 hover:scale-125 w-8 p-2 rounded-full" />
          )}
        </button>
      </nav>
      {ismenuopen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg rounded-lg px-8 py-6 transition-transform duration-300 ease-in-out transform scale-y-100 origin-top">
          <p className="py-2 font-medium text-gray-800 hover:text-purple-600 hover:bg-gray-100 rounded-md transition-colors duration-200 cursor-pointer">
            Home
          </p>
          <p className="py-2 font-medium text-gray-800 hover:text-purple-600 hover:bg-gray-100 rounded-md transition-colors duration-200 cursor-pointer">
            Services
          </p>
          <p className="py-2 font-medium text-gray-800 hover:text-purple-600 hover:bg-gray-100 rounded-md transition-colors duration-200 cursor-pointer">
            About
          </p>
          <p className="py-2 font-medium text-gray-800 hover:text-purple-600 hover:bg-gray-100 rounded-md transition-colors duration-200 cursor-pointer">
            Contact
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
