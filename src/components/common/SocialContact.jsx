import { FaGithub, FaLinkedin, FaFreeCodeCamp } from "react-icons/fa";

import useScrollSections from "@/hooks/useScrollSections.js";

const SocialContact = () => {
  const visibleSection = useScrollSections(["contact"]);
  const isSectionVisible = visibleSection["contact"];

  const socialContent = [
    {
      id: "1",
      name: "github",
      Icon: FaGithub,
      link: "https://github.com/",
    },
    {
      id: "2",
      name: "linkedin",
      Icon: FaLinkedin,
      link: "https://www.linkedin.com/",
    },
    {
      id: "3",
      name: "freeCodeCamp",
      Icon: FaFreeCodeCamp,
      link: "https://www.freecodecamp.org/",
    },
  ];
  return (
    <ul
      className="icon-card 
      flex justify-center gap-4 mb-0
      animation-colors"
    >
      {socialContent.map((icon, index) => {
        const { id, name, Icon, link } = icon;
        return (
          <li key={id}>
            <a
              href={link}
              aria-label={name}
              title={name}
              target="_blank"
              rel="noopener noreferrer"
              className={`icons
              rounded-lg p-2

              size-10 md:size-12 
              inline-flex items-center justify-center

              bg-sky-900 hover:bg-sky-950
              dark:bg-gray-100 hover:dark:bg-gray-300

              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-sky-500
              focus-visible:ring-offset-2
              dark:focus-visible:ring-sky-400

              animation-transform
              
              ${
                isSectionVisible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-6 md:translate-y-8 scale-95 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <Icon
                aria-hidden="true"
                className="size-9 md:size-10
                text-gray-100
                dark:text-sky-950
                hover:dark:text-sky-950"
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialContact;
