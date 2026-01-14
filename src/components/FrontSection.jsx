import { FaUserCircle } from "react-icons/fa";

import useScroll from "../hooks/useScroll.js";
import BgFrontSection from "./BgFrontSection.jsx";

const FrontSection = ({ id }) => {
  const sectionVisible = useScroll([id]);
  const isVisible = sectionVisible[id];
  return (
    <section
      id={id}
      aria-labelledby="hero-title"
      className="front-section
      relative
      min-h-dvh md:min-h-screen grid
      transition-colors duration-700 ease-in-out"
    >
      <BgFrontSection
        className="absolute inset-0 w-full h-full -z-10
      bg-linear-to-tr from-gray-100 via-gray-300 to-gray-400
      dark:from-gray-700 dark:via-gray-900 dark:to-gray-950
      transition-colors duration-700 ease-in-out"
      />

      {/*Profile Section*/}

      <div
        className="front-section-container
        flex justify-center"
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
          transition-all duration-700 delay-200 ease-in-out 
          ${
            isVisible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-6 md:translate-y-8 scale-95 opacity-0"
          }`}
        >
          {/*Profile Image Section*/}

          <div
            className="profile-image aspect-square
            size-56 md:size-96
            my-6 md:my-auto m-auto
            border rounded-full text-blue-100
            shadow-[2px_4px_12px_3px] shadow-gray-600 
            dark:shadow-[2px_4px_12px_3px] dark:shadow-gray-500"
          >
            <FaUserCircle
              aria-hidden="true"
              focusable="false"
              className="h-full w-full 
            text-gray-700 dark:text-blue-500 
              transition-colors duration-500 ease-in-out"
            />
          </div>

          {/*Profile Text Section*/}

          <div
            className="text-container
            flex flex-col justify-end mb-2 md:mb-6"
          >
            <div
              className={`hello-paragraph
              transition-all duration-500 delay-200 ease-out 
              ${
                isVisible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-6 md:translate-y-8 scale-95 opacity-0"
              }`}
            >
              <span
                className="hello-text
                text-md md:text-lg
                text-gray-700 dark:text-gray-300
                scale-x-73 origin-left"
              >
                Hello, I'm
              </span>
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
              <h1
                id="hero-title"
                className="font-heading font-semibold text-4xl md:text-5xl lg:text-6xl
                first-letter:text-7xl first-letter:text-sky-900 dark:first-letter:text-sky-500
              text-gray-700 dark:text-gray-300"
              >
                MY Name
              </h1>
              <h2
                className="text-md md:text-xl lg:text-2xl tracking-tight pt-2
                text-gray-600 dark:text-gray-300"
              >
                Front-End Developer
                <span
                  className="text-sm md:text-lg lg:text-xl tracking-tight block
                text-gray-500 dark:text-gray-400"
                >
                  {" "}
                  — React & Tailwind CSS
                </span>
              </h2>
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
              <p className="text-md md:text-lg font-medium mt-4">
                <span className="text-sky-500">Code clean </span>
                <span className="text-rose-500">— Build lean </span>
                <span className="text-emerald-500 inline-block">
                  {" "}
                  — Stay green
                </span>
              </p>
              <div
                className="line-bottom
              border-b w-24 my-4 text-gray-500"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontSection;
