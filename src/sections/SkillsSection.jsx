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
      
      min-h-[min(100dvh,700px)]
      md:min-h-[min(100dvh,900px)]
      lg:min-h-[min(100dvh,1000px)]

      sections-background
      animation-colors"
    >
      {/* Skills Container */}
      <div
        id={id}
        className="skills-container
        flex flex-col
        w-full max-w-5xl
        p-4 md:p-6
        pt-[calc(var(--header-mobile)+1rem)]
        md:pt-[calc(var(--header-desktop)+1.5rem)]"
      >
        {/* Skills Parent Card */}
        <div
          className={`skills-cards
          flex justify-center items-center flex-1
          w-full
          `}
        >
          {/* Content Child Cards Start */}

          {/* Skills + Tools Cards */}

          <div
            className="skills-section-card
            grid md:grid-cols-3 gap-6
            w-full"
          >
            {/* Skills Card */}
            <div
              className={`skills-card md:col-span-2
              p-6 rounded-xl
              shadow-sm dark:shadow-sm shadow-blue-950 dark:shadow-blue-100
              animation-transform delay-200
              ${
                isSectionVisible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-6 md:translate-y-8 scale-95 opacity-0"
              }`}
            >
              <h2
                className="skills-title
                font-heading font-semibold text-4xl
                text-sky-900 dark:text-blue-50"
              >
                Skills
              </h2>
              <div
                className="line-top
                border-b w-26 mt-4 mb-4 md:mb-12 
              text-gray-500"
              ></div>

              <div className="ranges-skills space-y-4">
                {skillsLevelContent.map((skill, index) => {
                  const { id, name, level } = skill;
                  return (
                    <div key={id}>
                      <p
                        className="
                        text-base text-justify
                        text-gray-600 dark:text-blue-100"
                      >
                        {name}
                      </p>

                      <div
                        className="skill-level-container
                        h-5 w-full max-w-xl border rounded-full
                      border-blue-100 ring ring-blue-500  bg-blue-100"
                      >
                        <div
                          className={`skill-level
                          h-full rounded-l-full
                          flex justify-end items-center pr-1
                          transition-all duration-2500 ease-in-out
                          text-blue-50 text-xs bg-linear-to-r from-blue-400 to-blue-500`}
                          style={{
                            width: `${isSectionVisible ? level : "10%"}`,
                            transitionDelay: `${index * 100}ms`,
                          }}
                        >
                          {level}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                className="line-bottom
                border-b w-12 mt-4 md:mt-8
              text-gray-500"
              ></div>
            </div>

            {/* Tools Card */}

            <div
              className={`tools-card
              p-6 rounded-xl shadow-sm dark:shadow-sm shadow-blue-950 dark:shadow-blue-100
              animation-transform delay-400
              ${
                isSectionVisible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-6 md:translate-y-8 scale-95 opacity-0"
              }`}
            >
              <h2
                className="tools-title
                font-heading font-medium text-4xl
                text-sky-900 dark:text-blue-50"
              >
                Tools
              </h2>
              <div
                className="line-top
                border-b w-26 mt-4 mb-4 md:mb-12 
                text-gray-500"
              ></div>

              <div
                className="card-tools
                flex flex-wrap content-start
                gap-4"
              >
                {toolsContent.map((tool) => {
                  const { id, name, color } = tool;
                  return (
                    <div
                      key={id}
                      className={`text-blue-50 font-medium p-0.5
                      rounded-full h-fit text-center
                      px-4 ${color}`}
                    >
                      {name}
                    </div>
                  );
                })}
              </div>
              <div
                className="line-bottom
                border-b w-12 mt-4 md:mt-8
                text-gray-500"
              ></div>
            </div>
          </div>

          {/* Content Child Cards End */}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
