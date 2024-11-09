import "./App.scss";
import { useEffect, useRef } from "react";

function App() {
  const elementRef = useRef(null);
  const containerRef = useRef(null);

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
        console.log(
          "Top:",
          topPercentage.toFixed(2) + "%",
          "Bottom:",
          bottomPercentage.toFixed(2) + "%",
          "Opacity:",
          opacity.toFixed(2)
        );
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
  }, []);

  return (
    <div className="scroll-container" ref={containerRef}>
      <div className="scroll-section section-2">
        <h1>Graphic Designer</h1>
      </div>
      <div className="scroll-section section-1">
        <div className="text-dynamic-container">
          <h1 className="text-dynamic">
            <span ref={elementRef}>I AM</span>
            <span>
              <br />
            </span>
          </h1>
        </div>
        <div className="text-static-container">
          <h1 className="text-static" style={{ background: "gray" }}>
            <span>RACHEL</span>
            <span>KNECHT</span>
          </h1>
        </div>
      </div>
      <div className="scroll-section section-2">
        <h1>Graphic Designer</h1>
      </div>
      <div className="scroll-section section-3"></div>
      <div className="scroll-section section-4"></div>
      <div className="scroll-section section-5"></div>
    </div>
  );
}

export default App;
