import useScroll from "../hooks/useScroll";

const ContactSection = ({ id }) => {
  const visibleSection = useScroll([id]);
  const isVisible = visibleSection[id];
  return (
    <section
      className="contact-section
      w-full
      flex justify-center
      bg-linear-to-r from-gray-100 to-gray-300
      dark:from-gray-700 dark:to-gray-900
      transition-colors duration-700"
    >
      {/* Contact Container */}
      <div
        id={id}
        className="contact-container
        flex flex-col
        border 
        min-h-screen
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
          border border-red-500
          transition-all duration-700 delay-200 ease-out 
        ${
          isVisible
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
            transition-all duration-700 delay-200 ease-out 
            ${
              isVisible
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
              border-b w-26 mt-4 mb-12 
              text-sky-900 dark:text-sky-400"
            ></div>

            {/* Contact Social Content */}

            <div
              className="line top
              border-b w-26 mt-4 mb-12 
              text-sky-900 dark:text-sky-400"
            ></div>

            {/* Contact Form Content */}

            <div
              className="line bottom
              border-b w-12 mt-12
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
