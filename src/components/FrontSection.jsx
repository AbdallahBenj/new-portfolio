import { FaUserCircle } from "react-icons/fa";

import useScroll from "../hooks/useScroll.js";
import BgFrontSection from "./BgFrontSection.jsx";

const FrontSection = ({ id }) => {
  const sectionVisible = useScroll([id]);
  const isVisible = sectionVisible[id];
  return (
    <section
      id={id}
      className="front-section relative
      min-h-vh md:min-h-screen grid
      transition-colors duration-500"
    >
      <BgFrontSection
        className="absolute inset-0 w-full h-full -z-10
      bg-linear-to-tr from-gray-100 via-gray-300 to-gray-400
      dark:from-gray-700 dark:via-gray-900 dark:to-gray-950
      transition-colors duration-500"
      />

      {/*Profile Section*/}

      <div
        className="front-section-container
        flex justify-center
        transition-colors duration-500"
      >
        {/*Profile Card*/}

        <div
          id="hero"
          className={`hero-section-card
          flex flex-col md:flex-row-reverse
          w-full max-w-4xl
          p-6
          pt-[calc(var(--header-mobile)+1rem)]
          md:pt-[calc(var(--header-desktop)+1.5rem)]
          transition-all duration-700 delay-200 ease-out 
          ${
            isVisible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-6 md:translate-y-8 scale-95 opacity-0"
          }`}
        >
          {/*Profile Image Section*/}

          <div
            className="profile-image aspect-square
            size-62 md:size-96
            my-6 md:my-auto m-auto
            border rounded-full text-blue-100
            shadow-[2px_4px_12px_3px] shadow-gray-600 
            dark:shadow-[2px_4px_12px_3px] dark:shadow-gray-500"
          >
            <FaUserCircle
              className="h-full w-full 
            text-gray-700 dark:text-blue-500 
              transition-colors duration-500"
            />
          </div>

          {/*Profile Text Section*/}

          <div
            className="text-container
            flex flex-col justify-end mb-2 md:mb-6"
          >
            <div
              className={`hello-paragraph
              transition-all duration-700 delay-200 ease-out 
              ${
                isVisible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-6 md:translate-y-8 scale-95 opacity-0"
              }`}
            >
              <p
                className="text-xl font-inter
              text-gray-700 dark:text-gray-300
              scale-x-73 origin-left"
              >
                Hello, I'm
              </p>
              <div
                className="line top
              border-b-2 w-12 mt-2 mb-6 text-gray-500"
              ></div>
            </div>

            <div
              className={`name-paragraph
              transition-all duration-700 delay-400 ease-out 
              ${
                isVisible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-6 md:translate-y-8 scale-95 opacity-0"
              }`}
            >
              <h2
                className="font-oswald text-5xl font-bold
              first-letter:text-7xl first-letter:text-sky-900 dark:first-letter:text-sky-500
            text-gray-700 dark:text-gray-300"
              >
                MY Name
              </h2>
              <h3
                className="font-inter text-xl tracking-tight
            text-gray-600 dark:text-gray-300"
              >
                Front-End Developer
              </h3>
            </div>

            <div
              className={`last-paragraph
              transition-all duration-700 delay-600 ease-out 
              ${
                isVisible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-6 md:translate-y-8 scale-95 opacity-0"
              }`}
            >
              <p className="text-lg font-medium mt-4">
                <span className="text-sky-500">Code clean </span>
                <span className="text-rose-500">— Build lean </span>
                <span className="text-emerald-500 inline-block">
                  {" "}
                  — Stay green
                </span>
              </p>
              <div
                className="line-bottom
              border-b w-26 my-4 text-gray-500"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontSection;
