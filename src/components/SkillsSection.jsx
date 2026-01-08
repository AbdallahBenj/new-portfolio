import { useState, useRef, useEffect } from "react";

const SkillsSection = ({ id }) => {
  const skillsLevel = [
    { id: 1, name: "React", level: "70%" },
    { id: 2, name: "Tailwind", level: "75%" },
    { id: 3, name: "JavaScript (ES6+)", level: "80%" },
    { id: 4, name: "HTML5", level: "96%" },
    { id: 5, name: "CSS3", level: "90%" },
  ];

  const tools = [
    { id: 1, name: "git", color: "bg-cyan-500" },
    { id: 2, name: "github", color: "bg-cyan-500" },
    { id: 3, name: "vite", color: "bg-lime-500" },
    { id: 4, name: "npm", color: "bg-pink-500" },
    { id: 5, name: "ui/ux", color: "bg-indigo-500" },
    { id: 6, name: "Responsive", color: "bg-sky-500" },
    { id: 7, name: "Design", color: "bg-blue-500" },
    { id: 8, name: "Accessibility", color: "bg-slate-500" },
    { id: 9, name: "Performance", color: "bg-yellow-500" },
  ];
  const [isVisible, setVisible] = useState(false);
  const targetElement = useRef(null);

  useEffect(() => {
    function handleView(entries, observer) {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }
    const observer = new IntersectionObserver(handleView);

    if (targetElement?.current) observer.observe(targetElement.current);
  }, []);

  return (
    <section
      id={id}
      className="skills-section
      flex items-center justify-center
      w-full min-h-screen
      bg-linear-to-r from-gray-100 to-gray-300
      dark:from-gray-700 dark:to-gray-900
      transition-colors duration-500"
    >
      {/* Skills Section Card */}

      <div
        className="skills-section-card
        grid md:grid-cols-3 gap-4
        w-full max-w-4xl 
        m-4 md:m-6 
        mt-[calc(var(--header-mobile)+0.5rem)]
        md:mt-[calc(var(--header-desktop)+1.5rem)]
        "
      >
        {/* Skills Card */}
        <div
          className="skills-card md:col-span-2
        p-6 rounded-xl shadow-sm shadow-blue-950 dark:shadow-blue-100"
        >
          <h2
            ref={targetElement}
            className="skills-title
        font-oswald font-semibold text-4xl
        text-gray-800 dark:text-blue-50"
          >
            Skills
          </h2>
          <div
            className="line-top
          border-b w-26 mt-4 mb-4 md:mb-12 
          text-gray-500"
          ></div>

          <div className="ranges-skills space-y-4">
            {skillsLevel.map((skill) => {
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
                      style={{ width: `${isVisible ? level : "10%"}` }}
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

        <div
          className="tools-card
        p-6 rounded-xl shadow-sm shadow-blue-950 dark:shadow-blue-100"
        >
          <h2
            ref={targetElement}
            className="tools-title
        font-oswald font-semibold text-4xl
        text-gray-800 dark:text-blue-50"
          >
            Tools
          </h2>
          <div
            className="line-top
          border-b w-26 mt-4 mb-4 md:mb-12 
          text-gray-500"
          ></div>

          {/* Tools Cards */}
          <div
            className="card-tools
            flex flex-wrap content-start
            gap-4"
          >
            {tools.map((tool) => {
              const { id, name, color } = tool;
              return (
                <div
                  key={id}
                  className={`text-blue-50 font-semibold p-0.5
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
    </section>
  );
};

export default SkillsSection;
