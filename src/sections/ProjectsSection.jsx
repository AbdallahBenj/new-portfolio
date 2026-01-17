import useScrollSections from "@/hooks/useScrollSections.js";
import PAGES from "@/data/pages.js";

const ProjectsSection = ({ id }) => {
  const visibleSection = useScrollSections([id]);
  const isSectionVisible = visibleSection[id];

  const page = PAGES.find((page) => page.id === id);
  if (!page || !page.enabled) return;

  return (
    <section
      className="projects-section
      w-full
      flex justify-center

      min-h-[min(100dvh,700px)]
      md:min-h-[min(100dvh,900px)]
      lg:min-h-[min(100dvh,1000px)]
      
      sections-background
      animation-colors"
    >
      {/* Projects Container */}
      <div
        id={id}
        className="projects-container
        flex flex-col
        border 
        w-full max-w-4xl
        p-4 md:p-6
        pt-[calc(var(--header-mobile)+1rem)]
        md:pt-[calc(var(--header-desktop)+1.5rem)]"
      >
        {/* Projects Parent Card */}
        <div
          className={`projects-cards
          flex justify-center items-center flex-1
          w-full
          border border-red-500 
          animation-transform delay-200
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
            This is Projects Section
          </h2>

          {/* Contents Child Cards End */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
