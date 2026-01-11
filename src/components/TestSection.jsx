import useScroll from "../hooks/useScroll";

const TestSection = ({ id }) => {
  const visibleSection = useScroll([id]);
  const isVisible = visibleSection[id];
  return (
    <section
      className="test-section
      w-full
      flex justify-center
      bg-linear-to-r from-gray-100 to-gray-300
      dark:from-gray-700 dark:to-gray-900
      transition-colors duration-500"
    >
      {/* Test Container */}
      <div
        id={id}
        className="test-container
        flex flex-col
        border 
        min-h-screen
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
          transition-all duration-700 delay-100 md:delay-200 ease-out 
        ${
          isVisible
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
