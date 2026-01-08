import { useEffect } from "react";

const useScroll = (ref) => {
  const handleScroll = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("Entry:", entry.target.id);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll);
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);
};

export default useScroll;
