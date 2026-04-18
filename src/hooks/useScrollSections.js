import { useEffect, useState, useCallback } from "react";

const useScrollSections = (sectionsIds = []) => {
  const [visible, setVisible] = useState({});

  const handleScroll = useCallback((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;
      const isVisible = entry.isIntersecting;

      setVisible((prev) => {
        if (prev[id] === isVisible) return prev;
        return { ...prev, [id]: isVisible };
      });
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, { threshold: 0.05 });

    sectionsIds.forEach((section) => {
      const id = document.getElementById(section);
      if (id) observer.observe(id);
    });

    return () => observer.disconnect();
  }, [sectionsIds, handleScroll]);

  return visible;
};

export default useScrollSections;
