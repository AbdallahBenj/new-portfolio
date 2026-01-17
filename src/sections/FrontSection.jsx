import { FaUserCircle } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa";

import useScrollSections from "@/hooks/useScrollSections.js";
import BgFrontSection from "@/components/common/BgFrontSection.jsx";
import PAGES from "@/data/pages.js";

const FrontSection = ({ id }) => {
  const sectionVisible = useScrollSections([id]);
  const isSectionVisible = sectionVisible[id];

  const page = PAGES.find((page) => page.id === id);
  if (!page || !page.enabled) return;

  return (
    <section
      id={id}
      aria-labelledby="hero-title"
      className="front-section
      relative grid

      min-h-[min(100dvh,700px)]
      md:min-h-[min(100dvh,900px)]
      lg:min-h-[min(100dvh,1000px)]
      
      animation-colors"
    >
      <BgFrontSection
        className="absolute inset-0 w-full h-full -z-10
      bg-linear-to-tr from-gray-200 via-gray-300 to-gray-400
      dark:from-gray-800 dark:via-gray-900 dark:to-gray-950
      animation-colors"
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
          animation-transform delay-200
          ${
            isSectionVisible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-6 md:translate-y-8 scale-95 opacity-0"
          }`}
        >
          {/*Profile Image Section*/}

          <div
            className="
            relative
            aspect-square
            size-56 md:size-96
            mx-auto my-6 md:my-auto
            rounded-full

            /* Glow (before) */
            before:absolute
            before:inset-0
            before:rounded-full
            before:bg-gray-500/25
            dark:before:bg-blue-500/25
            before:blur-2xl
            before:opacity-70
            before:content-['']


            /* Styling */
            bg-neutral-100/60 
            dark:bg-neutral-900/60
            ring-2 
            ring-white/20 
            dark:ring-white/20 
            shadow-[0_20px_40px_-15px]
            shadow-black/40
            dark:shadow-black/70
            animation-colors"
          >
            <FaUserCircle
              aria-hidden="true"
              focusable="false"
              className="
              relative z-10
              h-full w-full
              text-gray-700 dark:text-blue-500
              animation-colors"
            />
          </div>

          {/*Profile Text Section*/}

          <div
            className="text-container
            flex flex-col justify-end mb-2 md:mb-6"
          >
            <div
              className={`hello-paragraph
              animation-transform delay-200 
              ${
                isSectionVisible
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
              animation-transform delay-400
              ${
                isSectionVisible
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
                Abdallah
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
              animation-transform delay-600
              ${
                isSectionVisible
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
