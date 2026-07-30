"use client";

import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md px-4 sm:px-6 py-4">

      <div className="w-full max-w-7xl mx-auto grid grid-cols-3 items-center">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-blue-600 whitespace-nowrap">
            Accredian
          </h1>
        </div>


        {/* Desktop Links */}
        <div className="hidden md:flex justify-center items-center gap-8 text-gray-700 font-medium">

          <a href="#" className="hover:text-blue-600">
            Home
          </a>

          <a href="#" className="hover:text-blue-600">
            Courses
          </a>

          <a href="#" className="hover:text-blue-600">
            About
          </a>

          <a href="#" className="hover:text-blue-600">
            Contact
          </a>

        </div>


        {/* Desktop Button */}
        <div className="hidden md:flex justify-end">

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg
          font-medium shadow-md
          hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5
          transition-all duration-300">
          Apply Now
          </button>

        </div>


        {/* Mobile Hamburger */}
        <div className="md:hidden flex justify-end col-span-2">

          <button
            className="text-3xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

        </div>


      </div>


      {/* Mobile Menu */}
      {open && (

        <div className="md:hidden mt-5 flex flex-col gap-4 text-gray-700 font-medium">

          <a href="#" className="hover:text-blue-600">
            Home
          </a>

          <a href="#" className="hover:text-blue-600">
            Courses
          </a>

          <a href="#" className="hover:text-blue-600">
            About
          </a>

          <a href="#" className="hover:text-blue-600">
            Contact
          </a>


          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
            Apply Now
          </button>

        </div>

      )}

    </nav>
  );
}