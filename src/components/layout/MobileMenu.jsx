import { useState } from "react";

import { IoMenu, IoCloseSharp } from "react-icons/io5";

const MobileMenu = ({ navLinks, currentSection }) => {
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
        text-gray-900 dark:text-gray-200
        transform bg-gray-300 dark:bg-gray-700  
        transition-all duration-500 ease-in-out md:hidden
        ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } `}
      >
        {navLinks
          .filter((page) => page.enabled)
          .map((page) => {
            const { id, name, link } = page;
            return (
              <li
                key={name}
                className={`flex items-center
              h-14
              border-b border-gray-500
              ${
                id === currentSection
                  ? "text-sky-700 dark:text-sky-400"
                  : "text-gray-800 dark:text-gray-200"
              }`}
              >
                <a
                  className="block w-full"
                  href={link}
                  onClick={() => setOpen(false)}
                >
                  {name}
                </a>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default MobileMenu;
