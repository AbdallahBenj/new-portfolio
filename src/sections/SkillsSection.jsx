import useScrollSections from "@/hooks/useScrollSections.js";
import PAGES from "@/data/pages.js";
import skillsLevelContent from "@/data/skillsLevelContent.js";
import toolsContent from "@/data/toolsContent.js";

const SkillsSection = ({ id }) => {
  const visibleSections = useScrollSections([id]);
  const isSectionVisible = visibleSections[id];

  const page = PAGES.find((page) => page.id === id);
  if (!page || !page.enabled) return;

  return (
    <section
      className="skills-section
      w-full
      flex justify-center
      
      min-h-screen

      sections-background
      animation-colors"
    >
      {/* Skills Container */}
      <div
        id={id}
        className="skills-container
        w-full max-w-6xl
        flex items-center
        px-4 md:px-6 lg:px-8 pb-16
        pt-[calc(var(--header-mobile)+1rem)]
        md:pt-[calc(var(--header-desktop)+1.5rem)]"
      >
        {/* Skills Parent Card */}
        <div
          className={`skills-cards
          animation-transform
          grid gap-6 md:grid-cols-3
          ${
            isSectionVisible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-8 scale-95 opacity-0"
          }
          `}
        >
          {/* Content Child Cards Start */}

          {/* Skills + Tools Cards */}

          {/* Skills Card */}
          <div
            className={`skills-card 
                md:col-span-2
            rounded-2xl border border-white/10
            bg-white/70 dark:bg-white/5 backdrop-blur-xl
            p-6 md:p-7
            shadow-xl shadow-sky-500/15 dark:shadow-sm dark:shadow-sky-500/50
            animation-transform delay-200
            ${
              isSectionVisible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-8 scale-95 opacity-0"
            }`}
          >
            <p
              className="text-sm font-medium
              tracking-[0.2em] uppercase
              text-sky-600 dark:text-sky-400 mb-3"
            >
              Core Strengths
            </p>
            <h2
              className="skills-title
                font-heading
              text-3xl md:text-4xl
              font-semibold leading-tight
              text-slate-900 dark:text-white"
            >
              Skills
            </h2>
            <div
              className="line-top
                mt-5 h-px w-16 bg-sky-500/70"
            ></div>

            <div className="ranges-skills mt-6 space-y-5">
              {skillsLevelContent.map((skill, index) => {
                const { id, name, level } = skill;
                return (
                  <div key={id}>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <p
                        className="
                        text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        {name}
                      </p>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {level}
                      </span>
                    </div>

                    <div
                      className="skill-level-container
                        h-2.5 w-full overflow-hidden rounded-full
                      bg-slate-200 dark:bg-white/10"
                    >
                      <div
                        className="skill-level
                          h-full rounded-full
                        bg-linear-to-r from-sky-500 to-blue-500
                        transition-all duration-2200 ease-out"
                        style={{
                          width: `${isSectionVisible ? level : "10%"}`,
                          transitionDelay: `${index * 100}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className="line-bottom
                mt-6 h-px w-12 bg-sky-500/70"
            ></div>
          </div>

          {/* Tools Card */}

          <div
            className={`tools-card
                p-6 md:p-7
                rounded-2xl border border-white/10
                bg-white/70 dark:bg-white/5 backdrop-blur-xl
                shadow-xl shadow-sky-500/15 dark:shadow-sm dark:shadow-sky-500/50
                transition-all duration-700 delay-400
              ${
                isSectionVisible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-8 scale-95 opacity-0"
              }`}
          >
            <p
              className="text-sm font-medium
              tracking-[0.2em] uppercase
              text-sky-600 dark:text-sky-400 mb-3"
            >
              Workflow Stack
            </p>
            <h2
              className="tools-title
                font-heading
                text-3xl md:text-4xl
                font-semibold leading-tight
                text-slate-900 dark:text-white"
            >
              Tools
            </h2>
            <div
              className="line-top
                mt-5 h-px w-16 bg-sky-500/70"
            ></div>

            <div
              className="card-tools
                mt-6 flex flex-wrap gap-3"
            >
              {toolsContent.map((tool, index) => {
                const { id, name, color } = tool;
                return (
                  <div
                    key={id}
                    className={`
                        h-fit text-center
                        rounded-full px-4 py-2 text-sm font-medium
                    text-white shadow-lg transition-all duration-500
                    hover:-translate-y-1 ${color}`}
                    style={{
                      transitionDelay: `${index * 60}ms`,
                    }}
                  >
                    {name}
                  </div>
                );
              })}
            </div>
            <div
              className="line-bottom
                mt-6 h-px w-12 bg-sky-500/70"
            ></div>
          </div>
        </div>

        {/* Content Child Cards End */}
      </div>
    </section>
  );
};

export default SkillsSection;
