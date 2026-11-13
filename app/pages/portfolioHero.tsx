export function PortfolioHero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-intro">
          <div className="eyebrow">
            <span className="status-dot" /> Turning Data into Clear Business
            Insights
          </div>
          <h1
            className="python-headline"
            aria-label="From data to insight to business decisions"
          >
            <code aria-hidden="true">
              <span className="python-line">
                insight = <span className="python-function">analyse</span>
                (data)
              </span>
              <span className="python-line">
                business_decision ={" "}
                <span className="python-function">act_on</span>(insight)
              </span>
            </code>
          </h1>

          <style>{`
  #home .python-headline {
    margin: 0;
    padding: clamp(1rem, 3vw, 1rem);
    //border: 1px solid #ffffff;
    border-left: 5px solid #ffffff;
    border-radius: 0.875rem;
    //background: linear-gradient(135deg, #f3f7ff, #eeebff);
    color: #ffffff;
    font-size: clamp(1rem, 2vw, 1.5rem);
    font-weight: 600;
    line-height: 1.65;
    letter-spacing: -0.025em;
  }

  #home .python-headline code {
    font-family: "IBM Plex Mono", "Courier New", monospace;
  }

  #home .python-headline .python-line {
    display: block;
    color: inherit;
    overflow-wrap: anywhere;
  }

  #home .python-headline .python-function {
    //color: #ABD9FF;
  }
`}</style>

          <br />
          <p>
            Hi, I’m Thiri Sein. I have a background in software development and
            use data analysis and predictive modelling to identify trends,
            answer business questions, and help teams make informed decisions.
          </p>
          <div className="actions">
            <a href="#projects" className="btn primary">
              Explore My Work ↗
            </a>
            <a href="#contact" className="btn outline">
              Get In Touch ↗
            </a>
            <a href="#contact" className="btn secondary">
              View CV ↗
            </a>
          </div>
          <div className="hero-detail">
            DATA SCIENCE <span>✦</span> MACHINE LEARNING <span>✦</span> SOFTWARE
            DEVELOPMENT
          </div>
        </div>

        <div className="hero-cards">
          <div className="hero-card hero-card--wide">
            <h3>
              <b style={{ color: "#102e60" }}> Tech Stack</b>
            </h3>
            <ul className="hero-card-tools">
              <li>Python</li>
              <li>SQL</li>
              <li>Power BI</li>
              <li>Excel</li>
              <li>React</li>
              <li>React Native</li>
              <li>Next.js</li>
              <li>TypeScript</li>
            </ul>
          </div>

          <div className="hero-card">
            <h3>
              <b style={{ color: "#102e60" }}>MSc </b>
            </h3>
            <p>Data Sciecne</p>
          </div>

          <div className="hero-card">
            <h3>
              <b style={{ color: "#102e60" }}>2+ years </b>
            </h3>
            <p>Industry Roles</p>
          </div>
        </div>
      </div>
    </section>
  );
}
