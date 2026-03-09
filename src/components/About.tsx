import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "Projects Delivered" },
];

const highlights = [
  {
    icon: "🎯",
    title: "System Design",
    description:
      "Architecting scalable distributed systems that handle millions of requests",
  },
  {
    icon: "⚡",
    title: "Performance",
    description:
      "Optimizing applications for speed, efficiency, and exceptional UX",
  },
  {
    icon: "🔒",
    title: "Security",
    description: "Building secure applications with industry best practices",
  },
  {
    icon: "🤝",
    title: "Leadership",
    description: "Mentoring teams and driving technical excellence",
  },
];

function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-title",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-title",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".about-bio",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: ".about-bio",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".stat-item",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-stats",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      const statValues = document.querySelectorAll(".stat-value");
      statValues.forEach((stat) => {
        const value = stat.textContent || "";
        const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
        const suffix = value.replace(/[0-9.]/g, "");

        ScrollTrigger.create({
          trigger: stat,
          start: "top 80%",
          onEnter: () => {
            gsap.fromTo(
              stat,
              { textContent: 0 },
              {
                textContent: numericValue,
                duration: 2,
                ease: "power2.out",
                snap: { textContent: 1 },
                onUpdate: function () {
                  const current = Math.round(
                    parseFloat(stat.textContent || "0"),
                  );
                  stat.textContent = current + suffix;
                },
                onComplete: () => {
                  stat.textContent = value;
                },
              },
            );
          },
          once: true,
        });
      });

      gsap.fromTo(
        ".highlight-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-highlights",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.to(".about-decoration", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -100,
        rotation: 180,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="about section">
      <div className="container">
        <div className="about-header">
          <span className="section-label">// ABOUT ME</span>
          <h2 className="about-title section-title">
            Crafting Digital
            <br />
            <span className="text-gradient">Excellence</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <div className="about-bio">
              <p className="bio-intro">
                I'm a <span className="highlight">Software Engineer</span> with
                a passion for building products that make a difference. My
                journey in tech started with curiosity and evolved into
                expertise.
              </p>

              <p>
                With experience at leading tech companies, I've contributed to
                systems and tools serving millions of users. I specialize in
                full-stack development, distributed systems, and creating
                seamless user experiences.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open source, or mentoring aspiring developers. I
                believe in writing code that's not just functional, but elegant
                and maintainable.
              </p>

              <div className="tech-focus">
                <span className="tech-label">Current Focus:</span>
                <div className="tech-tags">
                  <span className="tag">Distributed Systems</span>
                  <span className="tag">Cloud Architecture</span>
                  <span className="tag">ML/AI Integration</span>
                  <span className="tag">Performance Engineering</span>
                </div>
              </div>
            </div>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-highlights">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card glass-card">
                <span className="highlight-icon">{item.icon}</span>
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-decoration">
          <svg viewBox="0 0 200 200" className="decoration-svg">
            <defs>
              <linearGradient
                id="gradient-about"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="var(--color-cyan)"
                  stopOpacity="0.2"
                />
                <stop
                  offset="100%"
                  stopColor="var(--color-purple)"
                  stopOpacity="0.2"
                />
              </linearGradient>
            </defs>
            <polygon
              points="100,10 190,50 190,150 100,190 10,150 10,50"
              fill="none"
              stroke="url(#gradient-about)"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default About;
