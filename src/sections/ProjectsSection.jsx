import useScrollSections from "@/hooks/useScrollSections.js";
import PAGES from "@/data/pages.js";
import projectsContent from "@/data/projectsContent.js";

const ProjectsSection = ({ id }) => {
  const projectIds = projectsContent.map((project) => project.projectId);
  const visibleSection = useScrollSections([id, ...projectIds]);
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
        w-full max-w-5xl
        p-4 md:p-6
        pt-[calc(var(--header-mobile)+1rem)]
        md:pt-[calc(var(--header-desktop)+1.5rem)]"
      >
        {/* Projects Parent Card */}
        <div
          className={`projects-cards
          w-full
          grid gap-y-[calc(var(--header-mobile)+1rem)] 
          md:gap-y-[calc(var(--header-desktop)+1.5rem)]
          animation-transform
          ${
            isSectionVisible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-6 md:translate-y-8 scale-95 opacity-0"
          }`}
        >
          {/* Contents Child Cards Start */}

          {/* Project Image + Description Cards */}

          {projectsContent &&
            projectsContent.map((project) => {
              const {
                projectId,
                projectTitle,
                projectSubtitle,
                projectImage,
                projectDescription,
                projectLink,
              } = project;
              return (
                <div
                  id={projectId}
                  key={projectId}
                  className="skills-section-card
                  grid md:grid-cols-3 gap-6 items-stretch
                  h-full w-full"
                >
                  {/* Project Description Card */}

                  <div
                    className={`project-description-card 
                      h-fit
                      md:overflow-auto no-scrollbar
                      max-h-[calc(100dvh-var(--header-mobile)-2rem)]
                      md:max-h-[calc(100dvh-var(--header-desktop)-3rem)]

                      p-6 rounded-xl
                      shadow-sm dark:shadow-sm shadow-blue-950 dark:shadow-blue-100
                      animation-transform delay-200
                      ${
                        visibleSection[projectId]
                          ? "translate-y-0 scale-100 opacity-100"
                          : "translate-y-6 md:translate-y-8 scale-95 opacity-0"
                      }`}
                  >
                    <h2
                      className="tools-title
                      font-heading font-medium text-4xl
                      text-sky-900 dark:text-sky-400"
                    >
                      {projectTitle} <span>- Project</span>
                    </h2>
                    <div
                      className="line-top
                      border-b w-26 mt-4 mb-4 md:mb-6 
                      text-gray-500"
                    ></div>
                    <h3
                      className="tools-subtitle
                      font-bold text-2xl mb-4
                      text-gray-700 dark:text-gray-200"
                    >
                      {projectSubtitle}
                    </h3>

                    <p
                      className="tools-description
                      text-gray-600 dark:text-gray-300"
                    >
                      {projectDescription}
                    </p>

                    <div
                      className="line-bottom
                      border-b w-12 mt-4 md:mt-8
                      text-gray-500"
                    ></div>
                  </div>

                  {/* Project Image Card */}
                  <div
                    className={`project-image-card md:col-span-2 
                      rounded-xl
                      border border-gray-500
                      
                      overflow-auto no-scrollbar
                      max-h-[calc(100dvh-var(--header-mobile)-2rem)]
                      md:max-h-[calc(100dvh-var(--header-desktop)-3rem)]

                      shadow-sm dark:shadow-sm shadow-blue-950 dark:shadow-blue-100
                      animation-transform delay-400
                      ${
                        visibleSection[projectId]
                          ? "translate-y-0 scale-100 opacity-100"
                          : "translate-y-6 md:translate-y-8 scale-95 opacity-0"
                      }`}
                  >
                    <a
                      href={projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      <img
                        className="rounded-xl w-full object-cover object-top"
                        src={projectImage}
                        alt={projectTitle}
                      />
                    </a>
                  </div>
                </div>
              );
            })}

          {/* Contents Child Cards End */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
