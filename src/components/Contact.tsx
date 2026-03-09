import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-title",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-title",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".contact-info",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-info",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".contact-terminal",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-terminal",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="contact section">
      <div className="container">
        <div className="contact-header">
          <span className="section-label">// GET IN TOUCH</span>
          <h2 className="contact-title section-title">
            Let's Build
            <br />
            <span className="text-gradient">Something Great</span>
          </h2>
          <p className="contact-subtitle">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a tech chat.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card glass-card">
              <h3 className="info-title">Let's Connect</h3>
              <p className="info-description">
                Whether you have a question, want to collaborate on a project,
                or just want to say hi, I'd love to hear from you!
              </p>

              <div className="info-items">
                <a href="mailto:abhinavkdps@gmail.com" className="info-item">
                  <span className="info-icon">📧</span>
                  <div>
                    <span className="info-label">Email</span>
                    <span className="info-value">abhinavkdps@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/abhinav-anand-2709/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-item"
                >
                  <span className="info-icon">💼</span>
                  <div>
                    <span className="info-label">LinkedIn</span>
                    <span className="info-value">Connect with me</span>
                  </div>
                </a>

                <a
                  href="https://github.com/abhikdps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-item"
                >
                  <span className="info-icon">💻</span>
                  <div>
                    <span className="info-label">GitHub</span>
                    <span className="info-value">Check my work</span>
                  </div>
                </a>

                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <div>
                    <span className="info-label">Location</span>
                    <span className="info-value">
                      Bengaluru, Karnataka, India
                    </span>
                  </div>
                </div>
              </div>

              <div className="availability">
                <span className="availability-dot"></span>
                Available for opportunities
              </div>
            </div>
          </div>

          <div className="terminal contact-terminal">
            <div className="terminal-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
              <span className="terminal-title">contact.sh</span>
            </div>
            <div className="terminal-body">
              <p>
                <span className="prompt">$</span> echo "Open to:"
              </p>
              <p className="output">→ Full-time opportunities</p>
              <p className="output">→ Technical consulting</p>
              <p className="output">→ Speaking engagements</p>
              <p className="output">→ Open source collaboration</p>
              <p>
                <span className="prompt">$</span>{" "}
                <span className="cursor-blink">_</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
