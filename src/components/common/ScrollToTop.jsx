import { LuSquareChevronUp } from "react-icons/lu";

import useScrollSections from "@/hooks/useScrollSections.js";

const ScrollToTop = () => {
  const visibleSection = useScrollSections(["hero"]);
  const isVisible = visibleSection["hero"] ?? true;

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      aria-label="Scroll to top"
      tabIndex={isVisible ? 0 : -1}
      className={`scroll-to-top-btn
      cursor-pointer fixed z-50 right-6 bottom-6
      transition-all duration-500 ease-out delay-200
      ${
        isVisible
          ? "opacity-0 translate-y-6 scale-90 pointer-events-none"
          : "opacity-100 translate-y-0 scale-100"
      }`}
      onClick={handleScrollToTop}
    >
      <LuSquareChevronUp
        className="size-10
    text-sky-900 hover:text-sky-950
    dark:text-sky-400 dark:hover:text-sky-600"
      />
    </button>
  );
};

export default ScrollToTop;
