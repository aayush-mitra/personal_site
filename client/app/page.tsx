import Image from "next/image";
import Link from "next/link";
import { Fragment } from 'react'
import ProjectsSection from "./ProjectsSection";
import ScrollReveal from "./ScrollReveal";
import styles from "./page.module.css";

export default function Home() {
  const languages = ["Python", "Java", "C", "C++", "HTML", "CSS", "JavaScript", "TypeScript", "SQL", "R"];
  const frameworks = ["Numpy", "Pandas", "Plotly", "Matplotlib", "Scipy", "PyTorch", "Flask", "Next", "Express", "React", "Tailwind"];
  const tools = ["Git", "Figma", "Bash", "LaTeX", "Revit", "Fusion"];
  const agendas = [
    "Steady Water Waves & Nonlinear Elliptic PDEs",
    "Database Systems & Architecture",
    "Neural ODEs & Scientific Machine Learning",
    "Probability Theory & Stochastic Processes"
  ];
  const courseCategories = [
    {
      category: "Mathematics", 
      courses: [
        ["Real Analysis (MAT 215)", "https://registrar.princeton.edu/course-offerings/course-details?term=1262&courseid=004158"], 
        ["Honors Linear Algebra (MAT 217)", "https://registrar.princeton.edu/course-offerings/course-details?term=1264&courseid=004159"], 
        ["Fourier Analysis & PDEs (MAT 325)", "https://registrar.princeton.edu/course-offerings/course-details?term=1264&courseid=004193"]
      ]
    },
    {
      category: "Computer Science",
      courses: [["Systems Programming (COS 217)", "https://registrar.princeton.edu/course-offerings/course-details?term=1262&courseid=002053"]]
    },
    {
      category: "Other",
      courses: [["Advanced Spanish (SPA 108)", "https://registrar.princeton.edu/course-offerings/course-details?term=1262&courseid=006665"]]
    }
    
    
  ];
  const highlightDescription = (description: string, terms: string[]) => {
    const remainingTerms = [...terms];
    const pieces = [];
    let rest = description;
    while (remainingTerms.length > 0) {
      const term = remainingTerms.shift();
      if (!term) {
        continue;
      }

      const index = rest.indexOf(term);

      if (index === -1) {
        continue;
      }

      if (index > 0) {
        pieces.push(rest.slice(0, index));
      }

      pieces.push(<span key={`${term}-${pieces.length}`}>{term}</span>);
      rest = rest.slice(index + term.length);
    }
    pieces.push(rest);
    return pieces;
  };



  const experiences = [
    {
      period: "Spring 2026",
      title: "Directed Reading Program in Curve Shortening Flow",
      organization: "Princeton University DRP",
      role: "",
      description: "Studied theory behind Curve Shortening Flow, a geometric process described by a nonlinear parabolic PDE. Discussed questions of existence, uniqueness, monotonicity, and convergence of shape.",
      highlights: ["Curve Shortening Flow"],
      links: [["https://www.math.utoronto.ca/roberth/pde2/curve_shortening_flow.pdf", "[Notes Used]"]],
      tags: ["Directed Reading", "Mathematical Analysis", "Parabolic Nonlinear PDE"],
    },
    {
      period: "Fall 2025",
      title: "Directed Reading Program in Nonlinear Wave Equations",
      organization: "Princeton University DRP",
      role: "",
      description: "Studied theory of Nonlinear Wave Equations, including use of energy estimates and questions of local and global existence and regularity.",
      highlights: ["Nonlinear Wave Equations"],
      links: [["https://web.stanford.edu/~jluk/NWnotes.pdf", "[Notes Used]"]],
      tags: ["Directed Reading", "Mathematical Analysis", "Hyperbolic Nonlinear PDE"],
    },
    {
      period: "Summers 2024, 2025",
      title: "Mathematical Modeling For Alzheimer's Disease (NSF REU)",
      organization: "The University of Texas Rio Grande Valley",
      role: "Research Assistant",
      links: [["https://meetings.ams.org/math/fall2024c/meetingapp.cgi/Paper/37509", "[AMS Presentation]"]],
      description:
        "Developed PDE models to study the kinetics of the critical protein Amyloid Beta in Alzheimer's Disease. Implemented Finite Difference Methods and used Asymptotic Analysis to achieve numerical and analytical results. Presented work at the American Mathematical Society San Antonio Meeting.",
      highlights: ["PDE models", "Finite Difference Methods", "Asymptotic Analysis"],
      tags: ["Research", "Mathematical Modeling", "Python", "Numpy", "Scipy", "Asymptotics"],
    },
    {
      period: "June 2023 - May 2024",
      title: "Analysis of Psychiatric Data (High Scholars Program)",
      organization: "The University of Texas Rio Grande Valley",
      role: "Research Assistant",
      links: [],
      description:
        "Performed statistical and computational analyses on the Mental Health Client Level Dataset from SAMHSA. Used Python to aggregate and visualize data and implement models.",
      highlights: ["statistical",  "computational analyses", "Python"],
      tags: ["Research", "Statistics", "Data Science", "Linear Algebra", "Python", "Numpy"],
    },
    {
      period: "June 2024 - June 2025",
      title: "Mathematics Instructor",
      organization: "Mathnasium Sharyland",
      role: "Instructor",
      links: [],
      description:
        "Tutored students in grades K-12 across topics ranging from basic arithmetic to SAT/ACT Math preparation.",
      highlights: [],
      tags: ["Tutoring"],
    },
  ];


  return (
    <div className={styles.page}>
      <ScrollReveal />
      <header className={styles.navShell}>
        <nav className={styles.nav}>
          <Link className={styles.brand} href="/">AM</Link>
          <div className={styles.navLinks}>
            
            <a href="#experiences">Experiences</a>
            <a href="#projects">Projects</a>
            <a href="#toolkit">Toolkit</a>
            <Link href="/private/prince_application_datalog">Blog</Link>
          </div>
        </nav>
      </header>

      <main className={styles.mainContainer}>
        <section id="about" className={`${styles.hero} ${styles.reveal}`} data-reveal>
          <div className={styles.briefDescription}>
            <p className={styles.kicker}>Hi! 👋 I&apos;m</p>
            <h1 className={styles.name}>Aayush Mitra</h1>

            <div className={styles.meta}>
              <p>
                <span className={styles.metaIcon}>
                  <Image src="/Princeton_seal.svg" alt="" height={18} width={18} />
                </span>
                Undergrad @ Princeton University
              </p>
              <p>
                <span className={styles.metaIcon}>🌎</span>
                From Edinburg, Texas
              </p>
            </div>

            <p className={styles.shortDescription}>
              My studies are concentrated on <span>Mathematics & Computer Science</span>. I have
              experience in Mathematical Modeling, Data Science, and Full Stack Web Development alongside coursework in Mathematical Analysis and Systems Programming.
            </p>

            <blockquote className={styles.quote}>
              My interests lie at the intersection of <em>mathematical theory</em>,  <em>scientific
              computing</em>, and  <em>low-level systems</em>.
            </blockquote>

            <div className={styles.socials}>
              {/* <a className={styles.resumeLink} target="_blank" rel="noreferrer" href="/Aayush_Resume.pdf">
                Resume
              </a> */}
              <a className={styles.emailLink} href="mailto:aayush.mitra@princeton.edu" aria-label="Email">
                <Image src="/icons8-email-50.png" alt="" height={25} width={25} />
                <span>aayush.mitra@princeton.edu</span>
              </a>
              <a className={styles.socialIcon} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aayushmitra121" aria-label="LinkedIn">
                <Image src="/icons8-linkedin.svg" alt="" height={25} width={25} />
              </a>
              <a className={styles.socialIcon} target="_blank" rel="noreferrer" href="https://github.com/aayush-mitra" aria-label="GitHub">
                <Image src="/icons8-github.svg" alt="" height={25} width={25} />
              </a>
              
              
              {/* <a className={styles.socialIcon} href="tel:19569002051" aria-label="Phone">
                <Image src="/icons8-phone-50.png" alt="" height={25} width={25} />
              </a> */}
            </div>
          </div>

          <div className={styles.portraitFrame}>
            <Image src="/pfp.jpeg" alt="Aayush Mitra" className={styles.hiImage} width={150} height={150} priority />
          </div>
        </section>
        <section id="experiences" className={`${styles.experiences} ${styles.reveal}`} data-reveal>
          <div className={styles.sectionIntro}>
            <h2>Experiences</h2>
            <p>DRPs, research, and teaching work.</p>
          </div>

          <div className={styles.experienceList}>
            {experiences.map((experience, i) => (
              <article key={i} className={styles.experienceItem} >
                <p className={styles.experiencePeriod}>{experience.period}</p>
                <h3>{experience.title}</h3>
                <p className={styles.experienceMeta}>
                  {experience.organization} <span>·</span> <em>{experience.role}</em>
                </p>
                <p className={styles.experienceDescription}>
                  {highlightDescription(experience.description, experience.highlights)}
                </p>
                {experience.links.map((link, j) => (
                  <a key={j} className={styles.experienceLink} target="_blank" href={link[0]}>{link[1]}</a>
                ))}
                <div className={styles.experienceTags}>
                  {experience.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="focus" className={`${styles.focusGrid} ${styles.reveal}`} data-reveal>
          <div className={styles.focusColumn}>
            <h2>Current Interests</h2>
            <ul className={styles.agendaList}>
              {agendas.map((agenda) => (
                <li key={agenda}>{agenda}</li>
              ))}
            </ul>
          </div>

          <div id="research" className={styles.focusColumn}>
            <h2>Coursework</h2>
            <div className={styles.courseList}>
              {courseCategories.map((c) => (
                <p key={c.category}>
                  <strong>{c.category}:</strong> {c.courses.map(c1 => {
                    return (<Fragment key={c1[0]}><a key={c1[0]} href={c1[1]} target="_blank">{c1[0]} </a>, </Fragment>)
                  })}
                </p>
              ))}
            </div>
          </div>
        </section>

        <ProjectsSection />

        <section id="toolkit" className={`${styles.skills} ${styles.reveal}`} data-reveal>
          <h2>Toolkit</h2>
          <div className={styles.skill}>
            <h3>Languages</h3>
            <div className={styles.staticSkills}>
              {languages.map((skill) => (
                <div key={skill} className={styles.item1}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.skill}>
            <h3>Libraries/Frameworks</h3>
            <div className={styles.staticSkills}>
              {frameworks.map((skill) => (
                <div key={skill} className={styles.item2}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.skill}>
            <h3>Tools/Other</h3>
            <div className={styles.staticSkills}>
              {tools.map((skill) => (
                <div key={skill} className={styles.item3}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className={`${styles.blogCta} ${styles.reveal}`} aria-label="Blog" data-reveal>
          <h2>See what I&apos;m up to.</h2>
          <a href="/private/prince_application_datalog">Blog</a>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2026 Aayush Mitra</p>
        <div className={styles.footerSocials}>
          <a className={styles.emailLink} href="mailto:aayush.mitra@princeton.edu" aria-label="Email">
            <Image src="/icons8-email-50.png" alt="" height={25} width={25} />
            <span>aayush.mitra@princeton.edu</span>
          </a>
          <a className={styles.socialIcon} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aayushmitra121" aria-label="LinkedIn">
            <Image src="/icons8-linkedin.svg" alt="" height={25} width={25} />
          </a>
          <a className={styles.socialIcon} target="_blank" rel="noreferrer" href="https://github.com/aayush-mitra" aria-label="GitHub">
            <Image src="/icons8-github.svg" alt="" height={25} width={25} />
          </a>
          
          
          {/* <a className={styles.socialIcon} href="tel:19569002051" aria-label="Phone">
            <Image src="/icons8-phone-50.png" alt="" height={25} width={25} />
          </a> */}
        </div>
      </footer>
    </div>
  );
}
