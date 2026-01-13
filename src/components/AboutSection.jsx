import { LuSearchCode, LuTabletSmartphone, LuRefreshCcw } from "react-icons/lu";

import useScroll from "../hooks/useScroll";

const AboutSection = ({ id }) => {
  const visibleSection = useScroll([id]);
  const isSectionVisible = visibleSection[id];

  const aboutContent = [
    {
      id: 1,
      text: "I'm a front-end developer focused on building, clean, accessible, and responsive user interfaces.",
    },
    {
      id: 2,
      text: "I work with React and Tailwind CSS to create modern web experiences.",
    },
    { id: 3, text: "I enjoy turning designs into real, usable products." },
  ];

  const iconsCard = [
    {
      id: "icon-1",
      icon: LuSearchCode,
      text: "Clean, maintainable, and well-structured code",
      iconBgColor: "bg-sky-500",
      boxColor: "border-sky-500 shadow-sky-700 dark:shadow-sky-400",
    },
    {
      id: "icon-2",
      icon: LuTabletSmartphone,
      text: "Fully responsive layouts for all screen sizes",
      iconBgColor: "bg-rose-500",
      boxColor: "border-rose-500 shadow-rose-700 dark:shadow-rose-400",
    },
    {
      id: "icon-3",
      icon: LuRefreshCcw,
      text: "Built with modern tools like React and Tailwind CSS",
      iconBgColor: "bg-emerald-500",
      boxColor: "border-emerald-500 shadow-emerald-700 dark:shadow-emerald-400",
    },
  ];

  return (
    <section
      className="about-section
      w-full
      flex justify-center
      bg-linear-to-r from-gray-100 to-gray-300
      dark:from-gray-700 dark:to-gray-900
      transition-colors duration-500"
    >
      {/* About Container */}
      <div
        id={id}
        className="about-container
        flex flex-col
        min-h-screen
        w-full max-w-4xl
        p-4 md:p-6
        pt-[calc(var(--header-mobile)+1rem)]
        md:pt-[calc(var(--header-desktop)+1.5rem)]"
      >
        {/* About Parent Card */}
        <div
          className={`about-parent-card
          flex justify-center items-center flex-1
          w-full
          `}
        >
          {/* Content Child Cards Start */}

          {/* About + Icons Cards */}

          <div
            className="about-child-cards
            grid md:grid-cols-3 gap-6"
          >
            {/* About Card */}

            <div
              className={`about-card
                md:col-span-3
                p-6 rounded-xl
                shadow-sm dark:shadow-sm shadow-blue-950 dark:shadow-blue-100
                transition-all duration-700 delay-200 ease-out 
          ${
            isSectionVisible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-6 md:translate-y-8 scale-95 opacity-0"
          }`}
            >
              <h2
                className="about-title
                font-heading font-medium text-4xl
                text-sky-900 dark:text-sky-400"
              >
                About me
              </h2>

              <div
                className="line top
                border-b w-26 mt-4 mb-12 
                text-sky-900 dark:text-sky-400"
              ></div>

              {/* About text content */}

              {aboutContent &&
                aboutContent.map((paragraph) => {
                  const { id, text } = paragraph;
                  return (
                    <p
                      key={id}
                      className="
                      text-lg mt-6 
                      text-gray-700 dark:text-blue-100"
                    >
                      {text}
                    </p>
                  );
                })}

              <div
                className="line bottom
                border-b w-12 mt-12
                text-sky-900 dark:text-sky-400"
              ></div>
            </div>

            {/* Icons Cards */}

            {iconsCard &&
              iconsCard.map((card, index) => {
                const Icon = card.icon;
                const { id, text, iconBgColor, boxColor } = card;

                return (
                  <div
                    key={id}
                    className={`icon-card 
                    p-8 text-center border ${boxColor}
                    rounded-xl shadow-sm dark:shadow-sm
                    transition-all duration-700 delay-200 ease-out 
                    ${
                      isSectionVisible
                        ? "translate-y-0 scale-100 opacity-100"
                        : "translate-y-6 md:translate-y-8 scale-95 opacity-0"
                    }`}
                    style={{ transitionDelay: `${200 + index * 150}ms` }}
                  >
                    <div
                      className={`flex justify-center items-center
                      rounded-full aspect-square w-14 m-auto mb-8 ${iconBgColor}`}
                    >
                      <Icon className={`text-4xl text-blue-50 `} />
                    </div>
                    <p className="text-base text-gray-700 dark:text-blue-100">
                      {text}
                    </p>
                  </div>
                );
              })}
          </div>

          {/* Content Child Cards End */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
