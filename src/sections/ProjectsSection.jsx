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
      className="projects-section sections-background animation-colors
    w-full flex justify-center min-h-screen"
    >
      {/* Projects Container */}
      <div
        id={id}
        className="projects-container 
        w-full max-w-6xl flex-col px-4 md:px-6 lg:px-8 pb-16
        pt-[calc(var(--header-mobile)+1rem)] md:pt-[calc(var(--header-desktop)+1.5rem)]"
      >
        {/* Projects Parent Card */}
        <div
          className={`projects-cards 
            grid gap-20 md:gap-28
            animation-transform
            ${
              isSectionVisible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-8 scale-95 opacity-0"
            }`}
        >
          {/* Contents Child Cards Start */}

          {/* Project Image + Description Cards */}

          {projectsContent &&
            projectsContent.map((project, index) => {
              const {
                projectId,
                projectTitle,
                projectSubtitle,
                projectImage,
                projectDescription,
                liveUrl,
                repoUrl,
                isTextLonger,
              } = project;

              const reverse = index % 2 !== 0;
              const active = visibleSection[projectId];

              return (
                <article
                  id={projectId}
                  key={projectId}
                  className="skills-section-card
                  h-full w-full
                  grid items-start gap-6 md:grid-cols-3"
                >
                  {/* Project Description Card */}

                  <div
                    className={`project-description-card
                      p-6 md:p-7
                      order-1 
                      ${reverse ? "md:order-2" : ""}
                      md:col-span-1  
                      rounded-2xl border border-white/10 
                      bg-white/70 dark:bg-white/5 backdrop-blur-xl 
                      transition-all duration-700 delay-200
                      shadow-xl shadow-sky-500/15
                      dark:shadow-sm dark:shadow-sky-500/50
                      ${!isTextLonger ? "self-start h-fit md:sticky md:top-24" : ""}
                      ${
                        active
                          ? "translate-y-0 scale-100 opacity-100"
                          : "translate-y-8 scale-95 opacity-0"
                      }`}
                  >
                    <p
                      className="text-sm font-medium 
                      tracking-[0.2em] uppercase 
                      text-sky-600 dark:text-sky-400 mb-3"
                    >
                      Featured Project
                    </p>
                    <h2
                      className="tools-title 
                      font-heading 
                      text-3xl md:text-4xl 
                      font-semibold leading-tight 
                      text-slate-900 dark:text-white"
                    >
                      {projectTitle}
                    </h2>
                    <h3
                      className="tools-subtitle 
                      mt-3 text-lg font-medium
                      text-slate-600 dark:text-slate-300
                      "
                    >
                      {projectSubtitle}
                    </h3>
                    <div
                      className="line-top 
                      mt-5 h-px w-16 bg-sky-500/70"
                    ></div>

                    <p
                      className="tools-description 
                      mt-5 leading-7 text-slate-700 dark:text-slate-300"
                    >
                      {projectDescription}
                    </p>

                    <div className="line-bottom mt-4 h-px w-12 bg-sky-500/70"></div>

                    <div
                      className="buttons mt-4 
                      flex flex-col gap-3"
                    >
                      <a
                        href={repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1
                          cursor-pointer text-center
                          rounded-lg px-4 py-2
                          font-heading
                          font-medium text-sm
                          border-2 hover:border-sky-500
                          text-sky-600 hover:text-gray-100
                          bg-transparent  hover:bg-sky-500
                          transition hover:translate-y-0.5
                          `}
                      >
                        View Code
                      </a>
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-heading
                          cursor-pointer text-center
                          rounded-lg p-2
                          flex-1
                          font-medium text-sm
                          text-gray-50 hover:text-gray-100
                          bg-sky-500 hover:bg-sky-600
                          transition hover:translate-y-0.5 
                          `}
                      >
                        Live Preview
                      </a>
                    </div>
                  </div>

                  {/* Project Image Card */}

                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`cursor-pointer 
                        order-2 ${reverse ? "md:order-1" : ""}
                        md:col-span-2 group block 
                        rounded-2xl overflow-hidden 
                        border border-black/10 dark:border-white/10 
                        shadow-2xl transition-all duration-700
                        
                        ${isTextLonger ? "self-start h-fit md:sticky md:top-24" : ""}
                        ${
                          active
                            ? "translate-y-0 scale-100 opacity-100"
                            : "translate-y-8 scale-95 opacity-0"
                        }`}
                  >
                    <img
                      src={projectImage}
                      alt={projectTitle}
                      className="w-full object-cover object-top 
                      transition duration-700 group-hover:scale-[1.02]"
                    />
                  </a>
                </article>
              );
            })}

          {/* Contents Child Cards End */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
