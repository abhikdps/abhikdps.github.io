import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Skills.css";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Languages",
    icon: "💻",
    skills: [
      { name: "C++", level: 95 },
      { name: "Python", level: 95 },
      { name: "TypeScript", level: 85 },
    ],
  },
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 95 },
      { name: "GraphQL", level: 85 },
      { name: "PostgreSQL", level: 90 },
      { name: "Redis", level: 85 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      { name: "AWS", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "Docker", level: 95 },
      { name: "Terraform", level: 80 },
      { name: "CI/CD", level: 90 },
    ],
  },
];

const techLogos = [
  "React",
  "Node.js",
  "TypeScript",
  "Python",
  "AWS",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "Redis",
  "GraphQL",
  "C++",
  "Next.js",
  "MongoDB",
  "Git",
];

function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skills-title",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skills-title",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".skill-category",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      document.querySelectorAll(".skill-progress-fill").forEach((bar) => {
        const progress = bar.getAttribute("data-progress") || "0";
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: `${progress}%`,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );
      });

      gsap.to(".marquee-content", {
        xPercent: -50,
        repeat: -1,
        duration: 30,
        ease: "none",
      });

      gsap.fromTo(
        ".hex-item",
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: {
            amount: 0.8,
            from: "random",
          },
          duration: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".skills-hex-grid",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="skills section">
      <div className="container">
        <div className="skills-header">
          <span className="section-label">// TECH STACK</span>
          <h2 className="skills-title section-title">
            Skills &<br />
            <span className="text-gradient">Technologies</span>
          </h2>
          <p className="skills-subtitle">
            Constantly evolving my toolkit to build cutting-edge solutions
          </p>
        </div>

        <div className="skills-marquee">
          <div className="marquee-content">
            {[...techLogos, ...techLogos].map((tech, index) => (
              <span key={index} className="marquee-item">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="skill-category glass-card">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-progress">
                      <div
                        className="skill-progress-fill"
                        data-progress={skill.level}
                        style={
                          {
                            "--progress-color": getProgressColor(catIndex),
                          } as React.CSSProperties
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-hex-section">
          <h3 className="hex-title">Core Competencies</h3>
          <div className="skills-hex-grid">
            {[
              "Full Stack",
              "System Design",
              "APIs",
              "Microservices",
              "Testing",
              "Security",
              "Performance",
              "Scalability",
              "Agile",
            ].map((skill, index) => (
              <div key={index} className="hex-item">
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-code">
          <div className="terminal">
            <div className="terminal-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
              <span className="terminal-title">skills.json</span>
            </div>
            <div className="terminal-body">
              <pre>{`{
  "engineer": {
    "mindset": "Growth-oriented",
    "approach": "Problem-first",
    "philosophy": "Clean code is better than clever code",
    "passion": "Building products that scale"
  }
}`}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getProgressColor(index: number): string {
  const colors = [
    "var(--color-cyan)",
    "var(--color-purple)",
    "var(--color-orange)",
    "var(--color-green)",
  ];
  return colors[index % colors.length];
}

export default Skills;
