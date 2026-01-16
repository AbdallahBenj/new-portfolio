import useScroll from "../hooks/useScroll";
import SocialContact from "./SocialContact.jsx";
import ContactForm from "./ContactForm.jsx";
import PAGES from "../data/pages.js";

const ContactSection = ({ id }) => {
  const visibleSection = useScroll([id]);
  const isSectionVisible = visibleSection[id];

  const page = PAGES.find((page) => page.id === id);
  if (!page || !page.enabled) return;

  return (
    <section
      className="contact-section
      w-full
      flex justify-center

      min-h-[min(100dvh,700px)]
      md:min-h-[min(100dvh,900px)]
      lg:min-h-[min(100dvh,1000px)]

      bg-linear-to-r from-gray-200 to-gray-300
      dark:from-gray-800 dark:to-gray-900
      animation-colors"
    >
      {/* Contact Container */}
      <div
        id={id}
        className="contact-container
        flex flex-col
        w-full max-w-4xl
        p-4 md:p-6
        pt-[calc(var(--header-mobile)+1rem)]
        md:pt-[calc(var(--header-desktop)+1.5rem)]"
      >
        {/* Contact Parent Card */}
        <div
          className={`contact-cards
          flex justify-center items-center flex-1
          w-full
          animation-transform delay-200 
        ${
          isSectionVisible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-6 md:translate-y-8 scale-95 opacity-0"
        }`}
        >
          {/* Contents Child Cards Start */}

          {/* Contact Card */}

          <div
            className={`contact-card
            w-full
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
              className="contact-title
              font-heading font-medium text-4xl
              text-sky-900 dark:text-sky-400"
            >
              Contact Us
            </h2>

            <div
              className="line top
              border-b w-26 mt-2 mb-6 md:mt-6 md:mb-10 
              text-sky-900 dark:text-sky-400"
            ></div>

            {/* Contact Social Content */}

            <SocialContact />

            <div
              className="line medium
              border-b w-26 my-6 md:mt-10 md:mb-6 
              text-sky-900 dark:text-sky-400"
            ></div>

            {/* Contact Form Content */}

            <ContactForm />

            <div
              className="line bottom
              border-b w-12 mt-6 md:mt-12
              text-sky-900 dark:text-sky-400"
            ></div>
          </div>

          {/* Contents Child Cards End */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
