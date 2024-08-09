import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="cursor-pointer">
      <div className="flex justify-between items-center h-16 px-4 md:px-8 text-gray-600 bg-[#F9E0DB]">
        <div className="flex items-center text-center gap-1 flex-col lg:flex-row border-none lg:border border-black p-1">
          <div className="bg-pink-300 tracking-wider text-sm md:text-base font-semibold ">Paula Toole</div>
          <div className="text-xs md:text-base font-mono ">PR consultancy & copywriting.</div>
        </div>

        {/* Hamburger icon */}
        <div className="md:hidden">
          <button
            className="text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Pages list for desktop */}
        <div className="hidden md:flex gap-4 border border-black p-1 font-mono">
          <ul className="flex gap-2 md:gap-4 lg:gap-6 text-sm md:text-base">
            <li className="hover:text-gray-800 transition-colors">PR Strategy</li>
            <li className="hover:text-gray-800 transition-colors">Media Relations</li>
            <li className="hover:text-gray-800 transition-colors">Copywriting</li>
            <li className="hover:text-gray-800 transition-colors">About me</li>
            <li className="hover:text-gray-800 transition-colors">Contact</li>
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col gap-2 p-4 text-base bg-[#F9E0DB]">
          <li className="hover:text-gray-800 transition-colors ">PR Strategy</li>
          <li className="hover:text-gray-800 transition-colors">Media Relations</li>
          <li className="hover:text-gray-800 transition-colors">Copywriting</li>
          <li className="hover:text-gray-800 transition-colors">About me</li>
          <li className="hover:text-gray-800 transition-colors">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
