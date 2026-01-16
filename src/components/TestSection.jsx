import useScroll from "../hooks/useScroll";
import PAGES from "../data/pages.js";

const TestSection = ({ id }) => {
  const visibleSection = useScroll([id]);
  const isSectionVisible = visibleSection[id];

  const page = PAGES.find((page) => page.id === id);
  if (!page || !page.enabled) return;

  return (
    <section
      className="test-section
      w-full
      flex justify-center

      min-h-[min(100dvh,700px)]
      md:min-h-[min(100dvh,900px)]
      lg:min-h-[min(100dvh,1000px)]
      
      bg-linear-to-r from-gray-200 to-gray-300
      dark:from-gray-800 dark:to-gray-950
      transition-colors duration-700"
    >
      {/* Test Container */}
      <div
        id={id}
        className="test-container
        flex flex-col
        border 
        w-full max-w-4xl
        p-4 md:p-6
        pt-[calc(var(--header-mobile)+1rem)]
        md:pt-[calc(var(--header-desktop)+1.5rem)]"
      >
        {/* Test Parent Card */}
        <div
          className={`test-cards
          flex justify-center items-center flex-1
          w-full
          border border-red-500
          transition-all duration-700 delay-200 ease-out 
        ${
          isSectionVisible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-6 md:translate-y-8 scale-95 opacity-0"
        }`}
        >
          {/* Contents Child Cards Start */}

          <h2
            className="text-2xl
        text-blue-900 dark:text-blue-50"
          >
            This is test Section
          </h2>

          {/* Contents Child Cards End */}
        </div>
      </div>
    </section>
  );
};

export default TestSection;
