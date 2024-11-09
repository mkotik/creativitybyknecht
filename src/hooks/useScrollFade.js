import { useEffect } from "react";

const useScrollFade = (elementRef, containerRef) => {
  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const topPercentage = (rect.top / viewportHeight) * 100;
        const bottomPercentage = (rect.bottom / viewportHeight) * 100;

        // Calculate opacity based on percentage
        let opacity = 1;
        if (topPercentage < 15) {
          opacity = topPercentage / 15; // Goes from 1 to 0 as top goes from 15 to 0
        } else if (bottomPercentage > 85) {
          opacity = (100 - bottomPercentage) / 15; // Goes from 1 to 0 as bottom goes from 85 to 100
        }

        elementRef.current.style.opacity = opacity;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [elementRef, containerRef]);
};

export default useScrollFade;
