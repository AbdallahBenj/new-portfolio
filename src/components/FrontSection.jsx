import { FaUserCircle } from "react-icons/fa";

import BgFrontSection from "./BgFrontSection.jsx";

const FrontSection = () => {
  return (
    <div
      className="front-section relative 
      transition-colors duration-500"
    >
      <BgFrontSection
        className=" absolute w-full -z-10
        h-screen md:h-screen
      bg-linear-to-tr from-gray-100 via-gray-300 to-gray-400
      dark:from-gray-700 dark:via-gray-900 dark:to-gray-950
      transition-colors duration-500"
      />

      {/*Profile Section*/}

      <div
        className="front-section-container p-6 
        flex flex-col md:flex-row-reverse 
        min-h-screen pt-(--header-mobile)
        md:min-h-screen md:pt-(--header-desktop)
        w-full max-w-4xl m-auto
        transition-colors duration-500"
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
        flex flex-col justify-end mb-5 md:mb-10"
        >
          <p
            className="text-xl font-bold font-sans
            text-gray-700 dark:text-gray-300
            scale-x-73 origin-left"
          >
            Hello, I'm
          </p>
          <div
            className="line 
          border-b-2 w-16 mt-2 mb-12 text-gray-500"
          ></div>
          <h2
            className="font-oswald text-5xl font-bold 
            first-letter:text-7xl first-letter:text-gray-800 dark:first-letter:text-blue-500
          text-gray-700 dark:text-gray-300"
          >
            MY Name
          </h2>
          <h3
            className="font-montserrat text-xl 
          text-gray-600 dark:text-gray-300 mt-2"
          >
            Front-End Developer
          </h3>
          <div
            className="line
          border-b w-22 my-4 text-gray-500"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FrontSection;
