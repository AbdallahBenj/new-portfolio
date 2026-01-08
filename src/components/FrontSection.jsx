import { FaUserCircle } from "react-icons/fa";

import BgFrontSection from "./BgFrontSection.jsx";

const FrontSection = ({ id }) => {
  return (
    <section
      id={id}
      className="front-section relative
      min-h-dvh md:min-h-screen grid
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
          className="profile-card
          flex flex-col md:flex-row-reverse
          w-full max-w-4xl p-6
          m-2 md:m-6
          mt-[calc(var(--header-mobile)+0.5rem)]
          md:mt-[calc(var(--header-desktop)+1.5rem)]"
        >
          {/*Profile Image Section*/}

          <div
            className="profile-image md:mr-16
          size-62 md:h-96 md:w-96 m-auto
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
            <p
              className="text-xl font-inter
            text-gray-700 dark:text-gray-300
            scale-x-73 origin-left"
            >
              Hello, I'm
            </p>
            <div
              className="line
          border-b-2 w-12 mt-2 mb-12 text-gray-500"
            ></div>

            <h2
              className="font-oswald text-5xl font-bold
            first-letter:text-7xl first-letter:text-sky-900 dark:first-letter:text-sky-400
          text-gray-700 dark:text-gray-300"
            >
              MY Name
            </h2>
            <h3
              className="font-inter text-xl tracking-tight

          text-gray-600 dark:text-gray-300 mt-2"
            >
              Front-End Developer
            </h3>

            <div
              className="line
          border-b w-24 my-4 text-gray-500"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontSection;
