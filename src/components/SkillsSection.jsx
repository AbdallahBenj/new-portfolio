import { useState, useRef, useEffect } from "react";

const SkillsSection = ({ id }) => {
  const skillsLevel = [
    { name: "React", level: "70%" },
    { name: "Tailwind", level: "75%" },
    { name: "JavaScript (ES6+)", level: "80%" },
    { name: "HTML5", level: "96%" },
    { name: "CSS3", level: "90%" },
  ];

  const tools = [
    { name: "git", color: "bg-cyan-500" },
    { name: "github", color: "bg-indigo-500" },
    { name: "vite", color: "bg-pink-500" },
    { name: "ui/ux", color: "bg-yellow-500" },
    { name: "Responsive", color: "bg-sky-500" },
    { name: "Design", color: "bg-sky-500" },
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
      className="about-section
      flex items-center justify-center
          w-full min-h-screen
          bg-linear-to-r from-gray-100 to-gray-300
      dark:from-gray-700 dark:to-gray-900
      transition-colors duration-500"
    >
      <div
        className="about-section-container
              w-full max-w-4xl m-auto
              p-6 pt-(--header-mobile) md:pt-(--header-desktop)"
      >
        <h2
          ref={targetElement}
          className="about-title
        font-oswald font-semibold text-4xl
        text-gray-700 dark:text-gray-200"
        >
          Skills
        </h2>
        <div
          className="line
          border-b w-26 mt-4 mb-4 md:mb-12 
          text-gray-500"
        ></div>

        {/* Block Skills + Tools*/}

        <div className="card-skills-tools flex flex-col md:flex-row">
          {/* Block Skills*/}

          <div
            className="card-skills space-y-4
         p-2 md:p-6 md:w-2/3"
          >
            {skillsLevel.map((skill) => {
              return (
                <div key={skill.name}>
                  <p
                    className="
        text-base text-justify
        text-gray-700 dark:text-gray-200"
                  >
                    {skill.name}
                  </p>

                  <div
                    className="skill-level-container
        h-4 w-full max-w-xl border rounded-full
        border-blue-100 ring ring-blue-500  bg-blue-100"
                  >
                    <div
                      className={`skill-level
        h-full rounded-l-full
        flex justify-end items-center pr-1
        transition-all duration-2500 ease-in-out
        text-blue-50 text-xs bg-blue-600`}
                      style={{ width: `${isVisible ? skill.level : "10%"}` }}
                    >
                      {skill.level}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/*Block tools*/}
          <div
            className="card-tools
            flex flex-wrap content-start
            md:w-1/3 pt-6 md:pt-12 p-2 md:p-6 gap-4"
          >
            {tools.map((tool) => {
              return (
                <div
                  key={tool.name}
                  className={`text-blue-50 bg-blue-500 
                    rounded-full h-fit md:w-full text-center
                    px-4 ${tool.color}`}
                >
                  {tool.name}
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="line
          border-b w-12 mt-4 md:mt-8
          text-gray-500"
        ></div>
      </div>
    </section>
  );
};

export default SkillsSection;
