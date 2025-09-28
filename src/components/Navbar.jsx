// src/components/Navbar.jsx
"use client";

import React, { useState, useEffect } from "react";
import UseAnimations from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";
import { BookOpenTextIcon } from "../icons/BookOpenTextIcon";
import { HouseIcon } from "../icons/HouseIcon";
import { InfoIcon } from "../icons/InfoIcon";
import { PhoneIcon } from "../icons/PhoneIcon";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const menuItems = [
    { label: "Courses", icon: <BookOpenTextIcon size={24} /> },
    { label: "About", icon: <InfoIcon size={24} /> },
    { label: "Contact", icon: <PhoneIcon size={24} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#382b3f] text-white z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <HouseIcon size={32} />
            <span className="font-bold text-xl">IELTS Academy</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 group-hover:shadow-[0_0_20px_#c8a8db]">
                  {React.cloneElement(item.icon, {
                    className:
                      "transition-colors duration-300 group-hover:text-[#c8a8db]",
                  })}
                </div>
                <span className="mt-2 text-sm group-hover:text-[#c8a8db] transition-colors">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label="Toggle Menu"
            >
              <UseAnimations
                animation={menu2}
                size={40}
                strokeColor="white"
                reverse={isOpen}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full flex flex-col gap-4 px-4 pb-4 bg-[#382b3f]/90 shadow-lg backdrop-blur-sm"
          >
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 group-hover:shadow-[0_0_20px_#c8a8db]">
                  {React.cloneElement(item.icon, {
                    className:
                      "transition-colors duration-300 group-hover:text-[#c8a8db]",
                  })}
                </div>
                <span className="mt-2 text-sm group-hover:text-[#c8a8db] transition-colors">
                  {item.label}
                </span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;




