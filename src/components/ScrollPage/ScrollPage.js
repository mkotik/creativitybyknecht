import "./scrollpage.css";

const ScrollPage = () => {
  return (
    <div>
      <style>{`
        body {
          background-color: #000000;
        }
      `}</style>
      <header className="site-header">
        <div className="fieldset-wrapper">
          <fieldset>
            <legend className="sr-only">Effects</legend>

            <input
              type="radio"
              id="blink-effect"
              name="effect"
              value="blink"
              checked
              className="sr-only"
            />
            <label htmlFor="blink-effect">Blink</label>

            <input
              type="radio"
              id="horizontal-scroll-effect"
              name="effect"
              value="horizontal-scroll"
              className="sr-only"
            />
            <label htmlFor="horizontal-scroll-effect">Horizontal scroll</label>

            <input
              type="radio"
              id="backwards-scroll-effect"
              name="effect"
              value="backwards-scroll"
              className="sr-only"
            />
            <label htmlFor="backwards-scroll-effect">Backwards scroll</label>

            <input
              type="radio"
              id="zoom-scroll-effect"
              name="effect"
              value="zoom-scroll"
              className="sr-only"
            />
            <label htmlFor="zoom-scroll-effect">Zoom scroll</label>
          </fieldset>
        </div>

        <nav>
          <ul className="indicator">
            <li>
              <a href="#snapping">
                <span className="sr-only">Snapping</span>
              </a>
            </li>
            <li>
              <a href="#scrolling">
                <span className="sr-only">Scrolling</span>
              </a>
            </li>
            <li>
              <a href="#layout">
                <span className="sr-only">Layout</span>
              </a>
            </li>
            <li>
              <a href="#transition">
                <span className="sr-only">Transition</span>
              </a>
            </li>
            <li>
              <a href="#caveats">
                <span className="sr-only">Caveats</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="snapping" className="section">
          <div className="content">
            <h2>
              <strong>First</strong>
            </h2>
          </div>
        </section>
        <section id="scrolling" className="section">
          <div className="content">
            <h2>
              <strong>Next</strong>
            </h2>
          </div>
        </section>
        <section id="layout" className="section">
          <div className="content">
            <h2>
              <strong>Then</strong>
            </h2>
          </div>
        </section>
        <section id="transition" className="section">
          <div className="content">
            <h2>
              <strong>Finally</strong>
              effects
            </h2>
          </div>
        </section>
        <section id="caveats" className="section">
          <div className="content">
            <h2>
              <strong>Caveats</strong>
            </h2>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ScrollPage;
