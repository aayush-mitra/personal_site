import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const languages = ["HTML", "CSS", "JavaScript", "Python", "C", "C++", "Java", "SQL", "R"];
  const frameworks = ["Next", "Express", "React", "Flask", "Numpy", "Pandas", "Plotly", "Matplotlib", "Scipy", "Tailwind", "Pytorch", "TypeScript"];
  const tools = ["Revit", "Fusion", "Calculus", "Linear Algebra", "Differential Equations", "Git", "Figma", "Bash", "LaTeX", "Probability", "Time Series Analysis"];
  const agendas = [
    "Partial Differential Equations & Analysis",
    "Systems Programming & High-Performance Computing",
    "Stochastic Processes & ML Theory",
  ];
  const active = [
    ["Reading", "Evans' PDE, Stein & Shakarchi, Tao"],
    ["Building", "Custom numerical linear algebra compiler library in C++"],
    ["Investigating", "Inverse problems & high-dimensional data kinetics"],
  ];

  return (
    <div className={styles.page}>
      <header className={styles.navShell}>
        <nav className={styles.nav}>
          <a className={styles.brand} href="#about">AM.</a>
          <div className={styles.navLinks}>
            <a href="#about">About</a>
            <a href="#focus">Focus</a>
            <a href="#research">Research</a>
            <a href="#projects">Projects</a>
            <a href="#toolkit">Toolkit</a>
            <a href="/private/prince_application_datalog">Blog ↗</a>
          </div>
        </nav>
      </header>

      <main className={styles.mainContainer}>
        <section id="about" className={styles.hero}>
          <div className={styles.briefDescription}>
            <p className={styles.kicker}>Hi! 👋 I&apos;m</p>
            <h1 className={styles.name}>Aayush Mitra</h1>

            <div className={styles.meta}>
              <p>
                <span className={styles.metaIcon}>
                  <Image src="/Princeton_seal.svg" alt="" height={18} width={18} />
                </span>
                Freshman @ Princeton University
              </p>
              <p>
                <span className={styles.metaIcon}>🌎</span>
                From Edinburg, Texas
              </p>
            </div>

            <p className={styles.shortDescription}>
              My studies are concentrated on <span>Mathematics & Computer Science</span>. I have
              experience in full-stack web development, alongside core academic work involving
              Data Science, Machine Learning, and PDE Modeling.
            </p>

            <blockquote className={styles.quote}>
              &quot;My work sits at the intersection of <em>mathematical theory</em>, scientific
              computing, and low-level intelligent systems.&quot;
            </blockquote>

            <div className={styles.socials}>
              <a className={styles.resumeLink} target="_blank" rel="noreferrer" href="/Aayush_Resume.pdf">
                Resume
              </a>
              <a className={styles.socialIcon} target="_blank" rel="noreferrer" href="https://github.com/aayush-mitra" aria-label="GitHub">
                <Image src="/icons8-github.svg" alt="" height={25} width={25} />
              </a>
              <a className={styles.socialIcon} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aayushmitra121" aria-label="LinkedIn">
                <Image src="/icons8-linkedin.svg" alt="" height={25} width={25} />
              </a>
              <a className={styles.socialIcon} href="mailto:aayush.mitra121@gmail.com" aria-label="Email">
                <Image src="/icons8-email-50.png" alt="" height={25} width={25} />
              </a>
              <a className={styles.socialIcon} href="tel:19569002051" aria-label="Phone">
                <Image src="/icons8-phone-50.png" alt="" height={25} width={25} />
              </a>
            </div>
          </div>

          <div className={styles.portraitFrame}>
            <Image src="/pfp.jpeg" alt="Aayush Mitra" className={styles.hiImage} width={150} height={150} priority />
          </div>
        </section>

        <section id="focus" className={styles.focusGrid}>
          <div className={styles.focusColumn}>
            <h2>Core Agendas</h2>
            <ul className={styles.agendaList}>
              {agendas.map((agenda) => (
                <li key={agenda}>{agenda}</li>
              ))}
            </ul>
          </div>

          <div id="research" className={styles.focusColumn}>
            <h2>Currently Active</h2>
            <div className={styles.activeList}>
              {active.map(([label, detail]) => (
                <p key={label}>
                  <strong>{label}:</strong> {detail}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="toolkit" className={styles.skills}>
          <h2>Toolkit</h2>
          <div className={styles.skill}>
            <h3>Languages</h3>
            <div className={styles.carousel}>
              <div className={styles.track}>
                <div className={styles.trackGroup}>
                  {languages.map((skill) => (
                    <div key={skill} className={styles.item1}>
                      {skill}
                    </div>
                  ))}
                </div>
                <div className={styles.trackGroup} aria-hidden="true">
                  {languages.map((skill) => (
                    <div key={`copy-${skill}`} className={styles.item1}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.skill}>
            <h3>Libraries/Frameworks</h3>
            <div className={styles.carousel}>
              <div className={styles.track}>
                <div className={styles.trackGroup}>
                  {frameworks.map((skill) => (
                    <div key={skill} className={styles.item2}>
                      {skill}
                    </div>
                  ))}
                </div>
                <div className={styles.trackGroup} aria-hidden="true">
                  {frameworks.map((skill) => (
                    <div key={`copy-${skill}`} className={styles.item2}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.skill}>
            <h3>Tools/Other</h3>
            <div className={styles.carousel}>
              <div className={styles.track}>
                <div className={styles.trackGroup}>
                  {tools.map((skill) => (
                    <div key={skill} className={styles.item3}>
                      {skill}
                    </div>
                  ))}
                </div>
                <div className={styles.trackGroup} aria-hidden="true">
                  {tools.map((skill) => (
                    <div key={`copy-${skill}`} className={styles.item3}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
