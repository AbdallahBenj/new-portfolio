import useScrollSections from "@/hooks/useScrollSections.js";
import PAGES from "@/data/pages.js";
import aboutContent from "@/data/aboutContent.js";
import iconsCardContent from "@/data/iconsCardContent.js";

const AboutSection = ({ id }) => {
  const visibleSection = useScrollSections([id]);
  const isSectionVisible = visibleSection[id];

  const page = PAGES.find((page) => page.id === id);
  if (!page || !page.enabled) return true;

  return (
    <section
      className="about-section
      w-full
      flex justify-center

      min-h-[min(100dvh,700px)]
      md:min-h-[min(100dvh,900px)]
      lg:min-h-[min(100dvh,1000px)]


      sections-background
      animation-colors"
    >
      {/* About Container */}
      <div
        id={id}
        className="about-container
        flex flex-col
        w-full max-w-5xl
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
                animation-transform delay-200
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

            {iconsCardContent &&
              iconsCardContent.map((card, index) => {
                const Icon = card.icon;
                const { id, text, iconBgColor, boxColor } = card;

                return (
                  <div
                    key={id}
                    className={`icon-card 
                    p-8 text-center border ${boxColor}
                    rounded-xl shadow-sm dark:shadow-sm
                    animation-transform delay-300
                    ${
                      isSectionVisible
                        ? "translate-y-0 scale-100 opacity-100"
                        : "translate-y-6 md:translate-y-8 scale-95 opacity-0"
                    }`}
                    style={{ transitionDelay: `${400 + index * 150}ms` }}
                  >
                    <div
                      className={`flex justify-center items-center
                      rounded-lg aspect-square w-14 m-auto mb-8 ${iconBgColor}`}
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
