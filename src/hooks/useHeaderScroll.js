import { useState, useEffect } from "react";

// Turn On / Off Scroll Header
const ENABLE_SCROLL_HEADER = false;

const useHeaderScroll = () => {
  const [initial, setInitial] = useState(0);
  const [isUp, setDirection] = useState(false);

  useEffect(() => {
    if (!ENABLE_SCROLL_HEADER) return;
    const handleScroll = () => {
      const current = window.scrollY;
      const interval = Math.abs(current - initial);

      if (current === 0) {
        setDirection(false);
        setInitial(0);
        return;
      }

      if (interval > 5) {
        setDirection(current > initial);
        setInitial(current);
      }
    };

    // console.log("Initial Scroll:", initial);
    // console.log("Direction:", `${isUp ? "Up" : "Down"}`);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [initial]);

  return isUp;
};

export default useHeaderScroll;
