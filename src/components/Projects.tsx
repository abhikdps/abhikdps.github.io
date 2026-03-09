import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Adaptive Query Accelerator",
    description:
      "An adaptive database storage layer built from scratch in C++20, optimizing data access via learned caching and memory-mapped files.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
    tags: ["C++", "Storage Engine", "mmap", "Buffer Pool", "Database Internals"],
    github: "https://github.com/abhikdps/adaptive-query-accelerator",
    live: "",
    featured: true,
    metrics: ["1.62M ops/sec", "Zero-copy reads", "C++20"],
  },
  {
    id: 2,
    title: "Distributed Task Queue",
    description:
      "Highly available task queue system with priority scheduling, retry logic, and real-time monitoring.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    tags: ["Python", "Redis", "gRPC", "Prometheus", "Grafana"],
    github: "https://github.com/abhikdps/distributed-task-queue",
    live: "",
    featured: true,
    metrics: ["10M tasks/day", "Zero downtime", "Sub-ms P99"],
  },
  {
    id: 3,
    title: "Netflix Clone",
    description:
      "A full-stack clone of the Netflix application with authentication, user profiles, and video streaming.",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800",
    tags: ["Next.js", "React", "MongoDB", "OAuth", "TypeScript"],
    github: "https://github.com/abhikdps/netflix-clone/",
    live: "https://netflix-clone-six-phi-87.vercel.app/auth",
    featured: true,
    metrics: ["Full Auth", "NoSQL", "Deployed"],
  },
];

function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const filteredProjects =
    filter === "featured" ? projects.filter((p) => p.featured) : projects;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".projects-title",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-title",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      document.querySelectorAll(".project-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.to(card.querySelector(".project-image"), {
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
          y: -50,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [filter]);

  return (
    <section ref={sectionRef} id="projects" className="projects section">
      <div className="container">
        <div className="projects-header">
          <span className="section-label">// PORTFOLIO</span>
          <h2 className="projects-title section-title">
            Featured
            <br />
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="projects-subtitle">
            A selection of projects that showcase my expertise in building
            scalable, production-ready systems
          </p>

          <div className="projects-filter">
            <button
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All Projects
            </button>
            <button
              className={`filter-btn ${filter === "featured" ? "active" : ""}`}
              onClick={() => setFilter("featured")}
            >
              Featured
            </button>
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`project-card ${project.featured ? "featured" : ""}`}
            >
              <div className="project-image-container">
                <div className="project-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="project-image-overlay" />
                </div>
                <div className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View source code"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View live site"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                    </a>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-metrics">
                  {project.metrics.map((metric, idx) => (
                    <span key={idx} className="metric">
                      {metric}
                    </span>
                  ))}
                </div>

                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-cta">
          <p>Want to see more?</p>
          <a
            href="https://github.com/abhikdps"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View All on GitHub
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
