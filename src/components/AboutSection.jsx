import { LuCodeXml, LuSmartphone, LuZap } from "react-icons/lu";

const AboutSection = ({ id }) => {
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
      id: 1,
      icon: LuCodeXml,
      text: "Clean, maintainable, and well-structured code",
      iconColor: "text-rose-500",
      boxColor: "border-rose-500 shadow-rose-700 dark:shadow-rose-400",
    },
    {
      id: 2,
      icon: LuSmartphone,
      text: "Fully responsive layouts for all screen sizes",
      iconColor: "text-amber-500",
      boxColor: "border-amber-400 shadow-amber-700 dark:shadow-amber-400",
    },
    {
      id: 3,
      icon: LuZap,
      text: "Modern tools like React & Tailwind CSS",
      iconColor: "text-cyan-500",
      boxColor: "border-cyan-500 shadow-cyan-700 dark:shadow-cyan-400",
    },
  ];

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
        className="about-section-card
        grid grid-rows-1 md:grid-cols-3 gap-4
        w-full max-w-4xl 
        m-4 md:m-6
        mt-[calc(var(--header-mobile)+0.5rem)]
        md:mt-[calc(var(--header-desktop)+1.5rem)]"
      >
        {/* About Card */}

        <div
          className="about-card
          md:col-span-3 p-6
          rounded-xl shadow-sm shadow-blue-950 dark:shadow-blue-100"
        >
          <h2
            className="about-title
        font-oswald font-semibold text-4xl
        text-sky-900 dark:text-sky-400"
          >
            About me
          </h2>

          <div
            className="line top
          border-b w-26 mt-4 mb-12 
          text-sky-900 dark:text-sky-400"
          ></div>

          {/* About Text content */}

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

        {/* Cards Icon */}

        {iconsCard &&
          iconsCard.map((card) => {
            const Icon = card.icon;
            const { id, text, iconColor, boxColor } = card;
            return (
              <div
                key={id}
                className={`icon-card 
                p-6 text-center border ${boxColor}
                rounded-xl shadow-sm`}
              >
                <Icon className={`text-5xl ${iconColor} mb-6 m-auto`} />
                <p className="text-base text-gray-700 dark:text-blue-100">
                  {text}
                </p>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default AboutSection;
