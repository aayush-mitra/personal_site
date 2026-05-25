"use client";

import { useState } from "react";
import styles from "./page.module.css";

const filters = ["All", "Scientific", "Systems", "Full-Stack"];

const projects = [
  {
    title: "Linear Algebra Simulation Engine",
    category: "Scientific",
    description:
      "A low-dependency, high-performance C++ implementation targeting optimized matrix operations, decomposition modules, and vector calculus pipelines.",
    tags: ["C++", "Numerical Methods", "Linear Algebra"],
  },
  {
    title: "Custom Assembly Compiler Pipeline",
    category: "Systems",
    description:
      "Built for Unix-like environments. Implements lexing, lexical parsing tree evaluation, memory optimizations, and execution profiles.",
    tags: ["Assembly", "Systems", "COS 217"],
  },
  {
    title: "Methane Monitor Infrastructure",
    category: "Full-Stack",
    description:
      "Geospatial environment dashboard ingesting telemetry endpoints. Relies on structured real-time tracking pipelines and geometric rendering layers.",
    tags: ["Python", "React", "Geospatial"],
  },
  {
    title: "Sparse Autoencoder Architecture",
    category: "ML Theory",
    description:
      "Exploratory models mapping dictionary learning and feature extraction paradigms over complex computational hidden layer fields.",
    tags: ["PyTorch", "ML Theory", "Notebook"],
  },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section id="projects" className={`${styles.projects} ${styles.reveal}`} data-reveal>
      <div className={styles.projectsHeader}>
        <div className={styles.sectionIntro}>
          <h2>Projects</h2>
          <p>Production systems, low-level tooling, and scientific software.</p>
        </div>

        <div className={styles.projectFilters} aria-label="Project categories">
          {filters.map((filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? styles.activeFilter : undefined}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <article key={project.title} className={styles.projectCard}>
            <div className={styles.projectTitleRow}>
              <h3>{project.title}</h3>
              <p>{project.category}</p>
            </div>

            <p className={styles.projectDescription}>{project.description}</p>

            <div className={styles.projectFooter}>
              <div className={styles.projectTags}>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <button className={styles.projectLink} type="button">
                View More <span aria-hidden="true">→</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
