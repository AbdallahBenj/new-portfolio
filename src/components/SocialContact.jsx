import { FaGithub, FaLinkedin, FaFreeCodeCamp } from "react-icons/fa";

import useScrollSections from "@/hooks/useScrollSections.js";

const SocialContact = () => {
  const visibleSection = useScrollSections(["contact"]);
  const isSectionVisible = visibleSection["contact"];

  const socialContent = [
    {
      id: "1",
      name: "LinkedIn",
      Icon: FaLinkedin,
      link: "https://www.linkedin.com/in/abdallah-benjalal/",
    },
    {
      id: "2",
      name: "GitHub",
      Icon: FaGithub,
      link: "https://github.com/AbdallahBenj/",
    },
    {
      id: "3",
      name: "freeCodeCamp",
      Icon: FaFreeCodeCamp,
      link: "https://www.freecodecamp.org/abdallahben/",
    },
  ];
  return (
    <ul
      className="icon-card 
      max-w-2xl m-auto
      flex flex-wrap justify-center gap-4
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
              className={`icons group
              rounded-lg pl-2 pr-3 py-2

              border border-sky-500
              inline-flex items-center justify-center gap-2
              bg-gray-200/50 dark:bg-gray-900/50 backdrop-blur-xl
              shadow-xl shadow-sky-500/15
              dark:shadow-sm dark:shadow-sky-500/50
              hover:-translate-y-1

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
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center
                rounded-lg bg-sky-500 text-white
                shadow-lg shadow-sky-500/25
                transition duration-300 group-hover:scale-105"
              >
                <Icon aria-hidden="true" className="size-5 md:size-6" />
              </div>
              <div className="min-w-0">
                <p
                  className="truncate text-base font-medium
                  text-slate-900 dark:text-white"
                >
                  {name || "social"}
                </p>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialContact;
