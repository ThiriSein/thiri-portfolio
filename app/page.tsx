import Image from "next/image";

const skills = [
  { category: "Programming", items: ["Python", "SQL", "Git"] },
  {
    category: "Data Analysis",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    category: "Machine Learning",
    items: ["Scikit-learn", "Regression", "Random Forest", "Model Evaluation"],
  },
  {
    category: "Tools",
    items: ["Jupyter Notebook", "VS Code", "GitLab", "GitHub"],
  },
];

const projects = [
  {
    number: "01",
    title: "Predicting London House Prices",
    category: "MACHINE LEARNING · DATA SCIENCE",
    description:
      "Predicting monthly house prices across London's 33 boroughs, investigating market activity, CPI and Bank Rate, and comparing Ridge Regression, Random Forest and seasonal naive forecasting.",
    tags: ["Python", "Pandas", "Scikit-learn", "Regression"],
    github: "https://gitlab.com/YOUR_USERNAME/YOUR_REPOSITORY",
  },
  {
    number: "02",
    title: "Your Next Data Project",
    category: "DATA ANALYTICS",
    description:
      "Add your next project here, including the problem, analytical approach, key findings and outcome.",
    tags: ["Python", "SQL", "Visualisation"],
    github: "",
  },
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a href="#home" className="logo">
          THIRI<span>.</span>
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="container hero-content">
          <div className="eyebrow">
            <span className="status-dot" /> WELCOME TO MY PORTFOLIO
          </div>
          <h1>
            Hi, I'm <span>Thiri Sein.</span>
          </h1>
          <h2>Data Science &amp; Machine Learning</h2>
          <p>
            I explore data, build predictive models and turn complex information
            into meaningful insights. Welcome to my collection of projects,
            skills and learning experiences.
          </p>
          <div className="actions">
            <a href="#projects" className="btn primary">
              Explore My Work ↗
            </a>
            <a href="#contact" className="btn outline">
              Get In Touch →
            </a>
          </div>
          <div className="hero-detail">
            PYTHON <span>✦</span> MACHINE LEARNING <span>✦</span> DATA ANALYTICS
          </div>
        </div>
        <div className="hero-glow" />
      </section>

      <section id="about" className="section light">
        <div className="container about-grid">
          <div>
            <div className="section-label">01 / ABOUT ME</div>
            <h2 className="section-heading">
              A little about <span>me.</span>
            </h2>
          </div>
          <div className="about-text">
            <p>
              I'm Thiri, with a postgraduate background at the University of the
              West of England (UWE Bristol) and a strong interest in data
              science, predictive modelling and real-world analytics.
            </p>
            <p>
              My academic work includes investigating London's housing market
              through machine learning, statistical analysis and time-aware
              forecasting techniques.
            </p>
            <p>
              I enjoy understanding not just how a model performs, but why it
              performs that way and how its results can be communicated clearly.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="section pale">
        <div className="container">
          <div className="section-label">02 / MY TOOLKIT</div>
          <h2 className="section-heading">
            Technical <span>skills.</span>
          </h2>
          <p className="section-intro">
            Technologies and methods I use to explore data and develop
            solutions.
          </p>
          <div className="skills-grid">
            {skills.map((group) => (
              <div className="skill-card" key={group.category}>
                <h3>{group.category}</h3>
                <div className="tags">
                  {group.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section light">
        <div className="container">
          <div className="section-label">03 / SELECTED WORK</div>
          <h2 className="section-heading">
            Featured <span>projects.</span>
          </h2>
          <p className="section-intro">
            A selection of my work in machine learning and data analysis.
          </p>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-visual">
                  <span>PROJECT / {project.number}</span>
                  <div className="visual-decoration">↗</div>
                </div>
                <div className="project-body">
                  <div className="project-category">{project.category}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View Repository ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container">
          <div className="section-label">04 / LET'S CONNECT</div>
          <h2>
            Let's build something <span>meaningful.</span>
          </h2>
          <p>
            Interested in my work or would like to connect? I'd love to hear
            from you.
          </p>
          <div className="actions">
            <a href="mailto:YOUR_EMAIL@example.com" className="btn primary">
              Email Me ↗
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn outline"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <strong>
            THIRI<span>.</span>
          </strong>
          <p>© 2026 Thiri Sein. Built with Next.js.</p>
          <a href="#home">Back to Top ↑</a>
        </div>
      </footer>
    </main>
  );
}
