import "./App.scss";
import { useRef } from "react";
import { useScrollFade } from "./hooks/useScrollFade";

function App() {
  const containerRef = useRef(null);
  const fadeRef1 = useScrollFade(containerRef);
  const fadeRef2 = useScrollFade(containerRef);
  return (
    <div className="scroll-container" ref={containerRef}>
      <div className="scroll-section section-2">
        <h1>Graphic Designer</h1>
      </div>
      <div className="scroll-section section-1">
        <div className="text-dynamic-container">
          <h1 className="text-dynamic">
            <span ref={fadeRef1}>I AM</span>
            <span>
              <br />
            </span>
          </h1>
        </div>
        <div className="text-static-container">
          <h1 className="text-static" style={{ background: "gray" }}>
            <span ref={fadeRef2}>RACHEL</span>
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
