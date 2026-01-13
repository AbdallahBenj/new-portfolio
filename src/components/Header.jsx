import DarkMode from "./DarkMode.jsx";
import MobileNavLink from "./MobileNavLink.jsx";

const Header = () => {
  const pages = [
    {
      id: 1,
      name: "Home",
      link: "#home",
    },
    {
      id: 2,
      name: "About",
      link: "#about",
    },
    {
      id: 3,
      name: "Skills",
      link: "#skills",
    },
    {
      id: 4,
      name: "Projects",
      link: "#projects",
    },
    {
      id: 5,
      name: "Contact",
      link: "#test",
    },
  ];

  return (
    <header
      className="header font-heading
      overflow-hidden fixed top-0 z-10
      flex w-full h-(--header-mobile) md:h-(--header-desktop)
      border-b border-blue-100
      shadow-[0_4px_12px_-4px_#dbeafe]
      "
    >
      {/* Light gradient */}
      <div
        className="absolute inset-0 -z-10
        bg-linear-to-tr from-gray-200/70 via-gray-400/80 to-gray-500/90
        transition-opacity duration-700 ease-in-out
        dark:opacity-0"
      />

      {/* Dark gradient */}
      <div
        className="absolute inset-0 -z-10
        dark:bg-linear-to-tr dark:from-gray-700/70 dark:via-gray-900/80 dark:to-gray-950/90
        opacity-0 transition-opacity duration-700 ease-in-out
        dark:opacity-100"
      />

      <div
        className="header-container
        relative z-10
        m-auto px-6
        flex justify-between items-center w-full max-w-4xl"
      >
        {/*Brand Name*/}
        <a href="./" className="brand">
          {/* Logo */}

          <span
            className="text-2xl md:text-4xl
            font-medium
            text-sky-900 hover:text-sky-950
            dark:text-sky-400 dark:hover:text-sky-500
            transition-colors duration-200"
          >
            Portfolio
          </span>
        </a>

        {/* Navbar */}

        <nav
          aria-label="Main navigation"
          className="nav-content
          flex flex-row gap-2 md:justify-between"
        >
          {/* Desktop Nav Link */}
          <ul className="hidden md:flex flex-row gap-6">
            {pages.map((page) => {
              const { id, name, link } = page;
              return (
                <li key={`${id}-${name}`} className="">
                  <a
                    className="font-medium
                    hover:border-b
                    text-gray-900 hover:text-sky-950
                    dark:text-gray-300 dark:hover:text-sky-500
                    transition-colors duration-200"
                    href={link}
                  >
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Dark Mode */}

          <DarkMode />

          {/* mobile Nav Link */}

          <MobileNavLink navLinks={pages} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
