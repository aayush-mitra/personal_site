"use client";

import { useState } from "react";
import styles from "./page.module.css";

const filters = ["All", "Data Science/ML", "Math", "Web"];

const projects = [
  {
    title: "EcoSnap",
    date: "October 2025",
    category: "Web",
    description:
      "Mobile-oriented full-stack app that functions as an AI-powered recycling assistant using Gemini Vision. Gamifies the recycling process and allows for more informed recycling. Submitted as part of HackPrinceton Fall 2025. ",
    tags: ["Next", "Express", "Tailwind", "Gemini Vision", "MongoDB"],
    link: "https://devpost.com/software/ecosnap-3k1rym"
  },
  {
    title: "Reaction Estimation through Computational Training (REACT)",
    date: "March 2025",
    category: "Data Science/ML",
    description:
      "Built a Physics-Informed Neural Network that predicts kinetics for enzyme-catalyzed reactions given subtrate names.",
    tags: ["Python", "PyTorch", "Numpy"],
    link: "disabled"
  },
  {
    title: "DreamHaven",
    date: "January 2025",
    category: "Web",
    description:
      "Full-Stack web app that functions as a \"journal\" for dreams. Leverges Gemini API to analyze and interpret dreams. Won Congressional App Challenge in TX-34.",
    tags: ["Next", "Python", "Flask", "Gemini API", "MongoDB"],
    link: "https://www.congressionalappchallenge.us/24-tx34/"
  },
  {
    title: "The Carbon Cache",
    date: "November 2024",
    category: "Math",
    description:
      "Constructed a system of ODEs modeling the cumulative effects of high-powered computing over time on CO2 emissions. Submitted in High School International Competition for Modeling; Top team from Texas.",
    tags: ["Python", "Scipy"],
    link: "disabled"
  },
  
  {
    title: "Analysis of the Impact of Socioeconomic Variables on Education",
    date: "April 2023",
    category: "Data Science/ML",
    description:
      "Analyzed open-source data from the US Dept. of Education. Employed a variety of methods including regression, clustering, cosine similarity, and principal component analysis. Won 1st place in Texas and 3rd place nationally in TSA Data Science competition. ",
    tags: ["Python", "Pandas", "Numpy", "Plotly"],
    link: "/Analyzing-the-Impact-of-Socioeconomic-Variables-on-Education-Data-Science.pdf"
  },
  {
    title: "DivineByDesign",
    date: "January 2023",
    category: "Web",
    description:
      "Front-end website for hypothetical global event-planning company. Won 1st place in Texas for Business Professionals of America Global Marketing competition.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://divinebydesignbpa.com/"
  }
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);
  const canToggle = filteredProjects.length > 4;

  const transitionProjects = (updateProjects: () => void) => {
    setIsTransitioning(true);

    window.setTimeout(() => {
      updateProjects();
      window.setTimeout(() => setIsTransitioning(false), 40);
    }, 180);
  };

  const handleFilterChange = (filter: string) => {
    if (filter === activeFilter || isTransitioning) {
      return;
    }

    transitionProjects(() => {
      setActiveFilter(filter);
      setShowAll(false);
    });
  };

  const handleToggleProjects = () => {
    if (isTransitioning) {
      return;
    }

    transitionProjects(() => setShowAll((current) => !current));
  };

  return (
    <section id="projects" className={`${styles.projects} ${styles.reveal}`} data-reveal>
      <div className={styles.projectsHeader}>
        <div className={styles.sectionIntro}>
          <h2>Projects</h2>
          {canToggle ? (
        <button className={styles.projectsToggle} type="button" onClick={handleToggleProjects}>
          {showAll ? "View Less" : "View More"} 
        </button>
      ) : null}
        </div>

        <div className={styles.projectFilters} aria-label="Project categories">
          {filters.map((filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? styles.activeFilter : undefined}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => handleFilterChange(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className={`${styles.projectGrid} ${isTransitioning ? styles.projectGridFading : ""}`}>
        {visibleProjects.map((project) => (
          <article key={project.title} className={styles.projectCard}>
            <div className={styles.projectTitleRow}>
              <h3>{project.title}</h3>
              <p>{project.date}</p>
            </div>

            <p className={styles.projectDescription}>{project.description}</p>

            <div className={styles.projectFooter}>
              <div className={styles.projectTags}>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {project.link !== "disabled" ? (
                <a className={styles.projectLink} href={project.link} target="_blank" rel="noreferrer">
                  View <span aria-hidden="true">→</span>
                </a>
              ) : null}
              
            </div>
          </article>
        ))}
      </div>

      
    </section>
  );
}
