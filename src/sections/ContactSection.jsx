import useScrollSections from "@/hooks/useScrollSections.js";
import SocialContact from "@/components/SocialContact.jsx";
import ContactForm from "@/components/ContactForm.jsx";
import PAGES from "@/data/pages.js";

const ContactSection = ({ id }) => {
  const visibleSection = useScrollSections([id]);
  const isSectionVisible = visibleSection[id];

  const page = PAGES.find((page) => page.id === id);
  if (!page || !page.enabled) return null;

  return (
    <section
      className="contact-section
      w-full flex justify-center min-h-screen

      sections-background
      animation-colors"
    >
      {/* Contact Container */}
      <div
        id={id}
        className="contact-container
        flex items-center

        w-full max-w-6xl
        px-4 md:px-6 lg:px-8 pb-16
        pt-[calc(var(--header-mobile)+1rem)]
        md:pt-[calc(var(--header-desktop)+1.5rem)]"
      >
        {/* Contact Parent Card */}
        <div
          className={`contact-cards
            w-full
          animation-transform delay-100 
        ${isSectionVisible ? "opacity-100" : "opacity-0"}`}
        >
          {/* Contents Child Cards Start */}

          {/* Contact Card */}

          <div
            className={`contact-card
              p-6 md:p-7
              rounded-2xl border border-white/10
              bg-white/70 dark:bg-white/5 backdrop-blur-xl
              shadow-xl shadow-sky-500/15 dark:shadow-sm dark:shadow-sky-500/50
              transition-all duration-700 delay-200
              ${
                isSectionVisible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-8 scale-95 opacity-0"
              }`}
          >
            <p
              className="mb-3 text-sm font-medium uppercase tracking-[0.2em]
              text-sky-600 dark:text-sky-400"
            >
              Let’s Connect
            </p>
            <h2
              className="contact-title
              font-heading 
              text-3xl md:text-4xl 
              font-semibold leading-tight
              text-slate-900 dark:text-white"
            >
              Contact Me
            </h2>

            <div
              className="line top
              mt-5 h-px w-16 bg-sky-500/70"
            ></div>

            {/* Contact Social Content */}

            <div className="mt-8">
              <SocialContact />
            </div>

            <div
              className="line medium
              mt-8 h-px w-16 bg-sky-500/40"
            ></div>

            {/* Contact Form Content */}

            <div className="mt-8">
              <ContactForm />
            </div>

            <div
              className="line bottom
              mt-8 h-px w-12 bg-sky-500/70"
            ></div>
          </div>

          {/* Contents Child Cards End */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
