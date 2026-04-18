import useScrollSections from "@/hooks/useScrollSections.js";
import PAGES from "@/data/pages.js";
import aboutContent from "@/data/aboutContent.js";
import iconsCardContent from "@/data/iconsCardContent.js";

const AboutSection = ({ id }) => {
  const visibleSection = useScrollSections([id]);
  const isSectionVisible = visibleSection[id];

  const page = PAGES.find((page) => page.id === id);
  if (!page || !page.enabled) return null;

  return (
    <section
      className="about-section
      w-full flex justify-center min-h-screen

      sections-background
      animation-colors"
    >
      {/* About Container */}
      <div
        id={id}
        className="about-container
        flex items-center

        w-full max-w-6xl
        px-4 md:px-6 lg:px-8 pb-16
        pt-[calc(var(--header-mobile)+1rem)]
        md:pt-[calc(var(--header-desktop)+1.5rem)]"
      >
        {/* About Parent Card */}
        <div
          className={`about-parent-card
            animation-transform
            grid gap-6 md:gap-8 transition-all duration-700
            ${
              isSectionVisible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-8 scale-95 opacity-0"
            }`}
        >
          {/* Content Child Cards Start */}

          {/* About + Icons Cards */}

          {/* <div
            className="about-child-cards
            grid md:grid-cols-3 gap-6"
          > */}
          {/* About Card */}

          <div
            className={`about-card

                md:col-span-3
            rounded-2xl border border-white/10
            bg-white/70 dark:bg-white/5 backdrop-blur-xl
            p-6 md:p-7
            shadow-xl shadow-blue-500/15 dark:shadow-sm dark:shadow-blue-500/50
            transition-all duration-700 delay-200
            ${
              isSectionVisible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-6 md:translate-y-8 scale-95 opacity-0"
            }`}
          >
            <p
              className="mb-3 text-sm font-medium uppercase tracking-[0.2em]
              text-sky-600 dark:text-sky-400"
            >
              Personal Profile
            </p>
            <h2
              className="about-title
                font-heading
                text-3xl md:text-4xl
                font-semibold leading-tight
                text-slate-900 dark:text-white"
            >
              About me
            </h2>

            <div
              className="line top
                mt-5 h-px w-16 bg-sky-500/70"
            ></div>

            {/* About text content */}

            <div className="mt-6 space-y-6">
              {aboutContent &&
                aboutContent.map((paragraph) => {
                  const { id, text } = paragraph;
                  return (
                    <p
                      key={id}
                      className="
                      leading-7 text-slate-700 dark:text-slate-300"
                    >
                      {text}
                    </p>
                  );
                })}
            </div>

            <div
              className="line bottom
                mt-6 h-px w-12 bg-sky-500/70"
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

                    rounded-2xl border border-white/10
                    bg-white/70 dark:bg-white/5 backdrop-blur-xl
                    p-6 md:p-7 text-center
                    shadow-xl dark:shadow-sm 
                    transition-all duration-700
                    ${boxColor}
                    ${
                      isSectionVisible
                        ? "translate-y-0 scale-100 opacity-100"
                        : "translate-y-8 scale-95 opacity-0"
                    }`}
                  style={{ transitionDelay: `${300 + index * 120}ms` }}
                >
                  <div
                    className={`flex justify-center items-center
                      rounded-2xl aspect-square h-14 w-14 m-auto mb-6 ${iconBgColor}`}
                  >
                    <Icon className={`text-3xl text-white `} />
                  </div>
                  <p className="leading-7 text-slate-700 dark:text-slate-300">
                    {text}
                  </p>
                </div>
              );
            })}
          {/* </div> */}

          {/* Content Child Cards End */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
