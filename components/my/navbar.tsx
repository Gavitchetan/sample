"use client";
// components/Navbar.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center p-6 bg-gray-900 text-white">
      <div className="text-3xl font-bold">MyPortfolio</div>
      <div className="hidden md:flex space-x-8">
        {["Home", "About", "Projects", "Contact"].map((item, index) => (
          <motion.a
            key={index}
            href={`/${item.toLowerCase()}`}
            whileHover={{ scale: 1.1 }}
            className="text-lg hover:text-gray-400 transition duration-300"
          >
            {item}
          </motion.a>
        ))}
      </div>
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={toggleMenu}
      >
        &#9776;
      </button>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 h-full w-2/3 bg-gray-800 text-white p-6 z-50"
        >
          <button
            onClick={toggleMenu}
            className="text-3xl absolute top-4 right-4"
          >
            &times;
          </button>
          <div className="flex flex-col space-y-8 mt-12">
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase()}`}
                className="text-xl hover:text-gray-400 transition duration-300"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
