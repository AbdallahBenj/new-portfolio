import DarkMode from "./DarkMode.jsx";
import MobileNavLink from "./MobileNavLink.jsx";

const Header = () => {
  const pages = [
    {
      id: 1,
      name: "Home",
      link: "#",
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
      link: "#",
    },
    {
      id: 4,
      name: "Contact",
      link: "#",
    },
  ];

  return (
    <header
      className="header
      font-oswald
    fixed top-0 z-10
    flex w-full h-(--header-mobile) md:h-(--header-desktop)
    border-b border-blue-100
    bg-linear-to-tr from-gray-200/40 via-gray-400/30 to-gray-500/40
    dark:from-gray-700/30 dark:via-gray-900/40 dark:to-gray-950/50
    transition-colors duration-500
    shadow-[0_4px_12px_-4px_#dbeafe]"
    >
      <div
        className="header-container m-auto px-6
      flex justify-between items-center w-full max-w-4xl"
      >
        {/*Brand Name*/}
        <div className="brand">
          {/* Logo */}

          <h1
            className="text-2xl font-bold
        text-sky-900 hover:text-sky-950
        dark:text-sky-400 dark:hover:text-sky-500
          transition-colors duration-200"
          >
            <a href="#">Portfolio</a>
          </h1>
        </div>

        {/* Navbar */}

        <nav
          className="header-content
      flex flex-row gap-2 md:justify-between"
        >
          {/* Desktop Nav Link */}
          <ul className="hidden md:flex flex-row gap-6">
            {pages.map((page) => {
              const { id, name, link } = page;
              return (
                <li key={id} className="">
                  <a
                    className="font-medium
                    hover:border-b
                    text-gray-900 hover:text-blue-900
                    dark:text-gray-300 dark:hover:text-blue-300
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
