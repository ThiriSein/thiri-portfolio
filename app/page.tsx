import Image from "next/image";
import { PortfolioHero } from "./pages/portfolioHero";

const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "SQL", "JavaScript", "TypeScript", "PHP", "Kotlin"],
  },
  {
    category: "Web & Mobile Development",
    items: [
      "React",
      "Next.js",
      "React Native",
      "Laravel",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Databases & Backend Services",
    items: ["MySQL", "SQLite", "MongoDB", "Firebase"],
  },
  {
    category: "Data Analysis & Visualisation",
    items: [
      "pandas",
      "NumPy",
      "Exploratory Data Analysis",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    category: "Machine Learning & Forecasting",
    items: [
      "scikit-learn",
      "Feature Engineering",
      "Ridge Regression",
      "Random Forest",
      "Time-Series Validation",
      "Model Evaluation",
    ],
  },
  {
    category: "Version Control & Deployment",
    items: ["Git", "GitHub", "GitLab", "Docker", "Vercel"],
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
          THIRI SEIN<span>.</span>
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <PortfolioHero />

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
              I’m a curious, organised problem solver with over two years of
              experience in the software industry. Advising businesses taught me
              to start with a simple question: what are we trying to achieve?
              That helps me focus on work that can make a practical difference.
            </p>
            <p>
              I identify with the ENTJ personality type, especially the habit of
              planning ahead and taking initiative. I tackle complex problems by
              breaking them into smaller questions, testing my assumptions, and
              letting the evidence guide my decisions. In teams, I help organise
              the work, listen to different perspectives, and explain technical
              findings in plain language. I welcome feedback and take time to
              reflect on what worked and what I could do better next time.
            </p>
            <p>
              I’m also interested in risk management and entrepreneurship,
              particularly how businesses recognise opportunities and weigh
              trade-offs when information is incomplete.
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
            Technologies and methods I use to build web and mobile apps, analyse
            data, and develop predictive models.
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
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=thirisein24%40gmail.com&su=Portfolio%20inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              Email Me ↗
            </a>
            <a
              href="https://www.linkedin.com/in/thiri-sein/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn outline"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/ThiriSein"
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <strong>
            THIRI SEIN<span>.</span>
          </strong>
          <p>© 2026 Thiri Sein. Built with Next.js.</p>
          <a href="#home">Back to Top ↑</a>
        </div>
      </footer>
    </main>
  );
}
