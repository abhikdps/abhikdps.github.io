import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Experience.css";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 1,
    company: "Red Hat",
    role: "Software Engineer",
    period: "Oct 2024 - Present",
    location: "Bengaluru, India",
    description:
      "Full-stack engineer in the Ansible Platform Experience team, building frontend and backend services for Backstage plugins that power developer platforms and automation workflows.",
    achievements: [
      "Developed full-stack Backstage plugins using React, TypeScript, and Node.js",
      "Built SCM integrations with GitHub, GitLab, and Bitbucket for repository management",
      "Implemented OAuth-based authentication for enterprise automation platforms",
      "Contributed to Ansible ecosystem tools: Navigator, Creator, Lint, and Molecule",
      "Designed CI/CD workflows using GitHub Actions and migrated pipelines to Tekton",
    ],
    technologies: ["TypeScript", "React", "Node.js", "Backstage", "Python"],
    logo: "🏢",
  },
  {
    id: 2,
    company: "MapleLabs Solutions",
    role: "Software Engineer",
    period: "Aug 2023 - Oct 2024",
    location: "Bengaluru, India",
    description:
      "Worked on nFerence Labs and Cisco Tetration projects, developing automation scripts and Kubernetes migrations.",
    achievements: [
      "Developed Python pre-flight checklist scripts to validate deployment environments",
      "Used AWS CLI and Terraform for resource provisioning automation",
      "Migrated VM-based microservices to Kubernetes for Cisco Tetration",
      "Migrated base OS from CentOS-7 to Alma Linux 8 for improved security",
      "Developed automation scripts to make clusters scalable",
    ],
    technologies: ["Python", "Kubernetes", "AWS", "Terraform", "Linux"],
    logo: "🚀",
  },
  {
    id: 3,
    company: "MapleLabs Solutions",
    role: "Associate Software Engineer",
    period: "Aug 2022 - Aug 2023",
    location: "Bengaluru, India",
    description:
      "Worked on Cisco Tetration GCP Migration, developing automation scripts and infrastructure provisioning.",
    achievements: [
      "Developed Python automation scripts for 40-node Tetration cluster deployment",
      "Designed commission/decommission features for GCP nodes",
      "Created custom GCP images using shell scripting",
      "Configured Jenkins jobs for deployment, upgrade, and testing automation",
      "Developed Ansible playbooks and roles for infrastructure management",
    ],
    technologies: ["Python", "GCP", "Terraform", "Jenkins", "Ansible"],
    logo: "💡",
  },
];

const education = {
  degree: "B.E. Information Science",
  school: "Acharya Institute of Technology",
  period: "2018 - 2022",
  achievements: ["8.4 CGPA"],
};

function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".experience-title",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".experience-title",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          scrollTrigger: {
            trigger: ".timeline",
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        },
      );

      document.querySelectorAll(".timeline-item").forEach((item, index) => {
        gsap.fromTo(
          item,
          { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );

        const dot = item.querySelector(".timeline-dot");
        if (dot) {
          gsap.fromTo(
            dot,
            { scale: 0 },
            {
              scale: 1,
              duration: 0.5,
              ease: "back.out(1.7)",
              delay: 0.3,
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            },
          );
        }
      });

      gsap.fromTo(
        ".education-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".education-card",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="experience section">
      <div className="container">
        <div className="experience-header">
          <span className="section-label">// CAREER</span>
          <h2 className="experience-title section-title">
            Professional
            <br />
            <span className="text-gradient">Experience</span>
          </h2>
        </div>

        <div className="timeline" ref={timelineRef}>
          <div className="timeline-line" />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-dot">
                <span>{exp.logo}</span>
              </div>

              <div className="timeline-content glass-card">
                <div className="experience-header-card">
                  <div>
                    <h3 className="experience-company">{exp.company}</h3>
                    <p className="experience-role">{exp.role}</p>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-period">{exp.period}</span>
                    <span className="experience-location">{exp.location}</span>
                  </div>
                </div>

                <p className="experience-description">{exp.description}</p>

                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>
                      <span className="achievement-marker">→</span>
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="experience-tech">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="education-section">
          <h3 className="education-title">
            <span className="education-icon">🎓</span>
            Education
          </h3>
          <div className="education-card glass-card">
            <div className="education-header">
              <div>
                <h4 className="degree">{education.degree}</h4>
                <p className="school">{education.school}</p>
              </div>
              <span className="edu-period">{education.period}</span>
            </div>
            <div className="education-achievements">
              {education.achievements.map((achievement, idx) => (
                <span key={idx} className="tag">
                  {achievement}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="resume-cta">
          <a
            href="/Abhinav's-Resume-2024.pdf"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Experience;
