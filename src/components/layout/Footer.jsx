import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="
      flex justify-center
      py-6 text-center w-full
      bg-linear-to-br from-gray-200 via-gray-300 to-gray-400
      dark:from-gray-800 dark:via-gray-900 dark:to-gray-950
      shadow-sm shadow-sky-100
      animation-colors"
    >
      <div
        className="footer-container
        font-heading text-sm
        w-full max-w-5xl px-6
        flex flex-col md:flex-row justify-evenly"
      >
        <p className="text-gray-700 dark:text-gray-300">
          <span className="text-sky-900 dark:text-sky-500">Abdallah</span> ©{" "}
          {year} — All rights reserved
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Built with <span className="text-sky-500">React</span>{" "}
          <FaHeart aria-hidden="true" className="text-rose-500 inline" />{" "}
          <span className="text-emerald-500">Tailwind</span> CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
