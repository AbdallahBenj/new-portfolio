import { useState } from "react";

import { MdLightMode, MdNightlight } from "react-icons/md";

const DarkMode = () => {
  const [isDark, setDark] = useState(true);

  const handleDark = () => {
    document.documentElement.classList.toggle("dark");
    setDark((prev) => !prev);
  };

  return (
    <button
      className="font-bold text-2xl md:ml-4
      text-blue-950 dark:text-gray-50"
      onClick={handleDark}
    >
      {isDark ? <MdLightMode /> : <MdNightlight />}
    </button>
  );
};

export default DarkMode;
