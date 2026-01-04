import DarkMode from "./DarkMode.jsx";
import MobileNavLink from "./MobileNavLink.jsx";

const Header = () => {
  const pages = [
    {
      name: "About",
      link: "#",
    },
    {
      name: "Work",
      link: "#",
    },
    {
      name: "Contact",
      link: "#",
    },
  ];

  return (
    <header
      className="header
    sticky top-0
    flex w-full h-14 md:h-16 px-4
    border-b border-blue-100
    bg-linear-to-tr from-gray-200 via-gray-400 to-gray-500
    dark:from-gray-700 dark:via-gray-900 dark:to-gray-950
    transition-colors duration-500
    shadow-[0_4px_12px_-4px_#dbeafe]"
    >
      <div
        className="header-container m-auto
      flex justify-between items-center w-full max-w-4xl"
      >
        {/*Brand Name*/}
        <div className="brand">
          {/* Logo */}

          <h1
            className="text-2xl font-bold text-blue-900 dark:text-amber-200
          transition-colors duration-200 hover:text-blue-950 dark:hover:text-amber-300"
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
              const { name, link } = page;
              return (
                <li key={name} className="">
                  <a
                    className="font-medium
                    hover:border-b
                    text-gray-900 hover:text-blue-900
                    dark:text-gray-200 dark:hover:text-blue-300
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
