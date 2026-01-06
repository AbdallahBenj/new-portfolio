import { useState } from "react";

import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const MobileNavLink = ({ navLinks }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        className={`cursor-pointer md:hidden
          text-blue-950 dark:text-gray-100
          ${isOpen ? "ring-1" : ""} rounded-sm p-1 text-2xl`}
        onClick={() => setOpen(!isOpen)}
      >
        {isOpen ? <IoCloseSharp /> : <IoMenu />}
      </button>
      <ul
        id="mobile-menu"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed top-(--header-mobile) left-0 h-screen w-full p-5 
          font-bold text-gray-900 dark:text-gray-200
              transform bg-gray-300 dark:bg-gray-700  
              transition-all duration-500 ease-in-out md:hidden ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              } `}
      >
        {navLinks.map((page) => {
          // const { name, link } = page;
          return (
            <li
              key={page.name}
              className="flex items-center
              font-medium h-14
              text-gray-700 dark:text-gray-200
              border-b border-gray-500"
            >
              <a
                className="block w-full"
                href={page.link}
                onClick={() => setOpen(false)}
              >
                {page.name}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MobileNavLink;
