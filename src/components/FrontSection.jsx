import { FaUserCircle } from "react-icons/fa";

import BgFrontSection from "./BgFrontSection.jsx";

const FrontSection = () => {
  return (
    <div
      className="front-section
      transition-colors duration-500"
    >
      <BgFrontSection
        className=" absolute w-full h-[calc(100vh-56px)] md:h-[calc(100vh-64px)] -z-10
      bg-linear-to-tr from-gray-100 via-gray-300 to-gray-400
      dark:bg-linear-to-tr dark:from-gray-700 dark:via-gray-900 dark:to-gray-950
      transition-colors duration-500"
      />

      <div
        className="front-section-container p-4
        flex flex-col md:flex-row-reverse m-auto
        w-full max-w-4xl h-full min-h-[calc(100vh-3.5rem)]
        md:min-h-[calc(100vh-4rem)]
        transition-colors duration-500"
      >
        <div
          className="profile-image
        h-70 w-70 md:h-96 md:w-96 m-auto
        border rounded-full text-blue-100
        shadow-[2px_4px_12px_3px] shadow-gray-600 
        dark:shadow-[2px_4px_12px_3px] dark:shadow-gray-500"
        >
          <FaUserCircle className="h-full w-full 
          text-gray-700 dark:text-blue-500 
          transition-colors duration-500" />
          
        </div>
        <div className="flex flex-col justify-end">
          <p
            className="text-xl font-bold font-montserrat 
            text-gray-700 dark:text-gray-300
            scale-x-73 origin-left -z-10"
          >
            Hello, My Name is
          </p>
          <div className="border-b-2 w-30 mt-2 mb-12 text-gray-500"></div>
          <h2
            className="font-oswald text-5xl font-bold tracking-wider uppercase
          text-gray-700 dark:text-gray-300"
          >
            MY Name
          </h2>
          <h3
            className="font-montserrat text-2xl 
          text-gray-600 dark:text-gray-300 mt-2
          scale-x-86 origin-left -z-10"
          >
            Front End Developer
          </h3>
          <div className="border-b w-15 my-4 text-gray-500"></div>
        </div>
      </div>
    </div>
  );
};

export default FrontSection;
