"use client";

import { useEffect, useRef, useState } from "react";

const impactStories = [
  {
    number: "01",
    sector: "Leadership / Insight",
    title: "Turning student voices into useful action.",
    organisation: "London South Bank University",
    summary:
      "As Lead Representative, I gather different perspectives, find the signal in the feedback and communicate it to the people who can create change.",
    contribution: ["Stakeholder communication", "Insight synthesis", "Representation"],
    accent: "lime",
  },
  {
    number: "02",
    sector: "Business / Digital",
    title: "Improving the way products show up online.",
    organisation: "MEAMO LTD",
    summary:
      "I combine research, AI-assisted workflows, visual judgement and operational detail to make e-commerce content clearer and more effective.",
    contribution: ["Product research", "Content optimisation", "Digital operations"],
    accent: "blue",
  },
  {
    number: "03",
    sector: "Community / Technology",
    title: "Making technical ideas feel human.",
    organisation: "Cyber outreach & Zero Day",
    summary:
      "From online safety sessions to student campaigns, I translate complex ideas into experiences that people can understand, trust and act on.",
    contribution: ["Public speaking", "Campaign thinking", "Accessible learning"],
    accent: "orange",
  },
];

const timeline = [
  {
    date: "2026 — NOW",
    role: "Lead Representative",
    place: "LSBU · School of Computer Science & Digital Technologies",
    type: "Leadership",
  },
  {
    date: "2026 — NOW",
    role: "Hub Scholar",
    place: "Encode Club",
    type: "Community",
  },
  {
    date: "2025 — NOW",
    role: "CSI Outreach Student Ambassador",
    place: "London South Bank University",
    type: "Communication",
  },
  {
    date: "2025 — NOW",
    role: "Digital Marketing & Social Media Assistant",
    place: "MEAMO LTD",
    type: "Business",
  },
  {
    date: "2025 — NOW",
    role: "Founder · Digital Outreach & Campaign Lead",
    place: "Zero Day: Cyber Security",
    type: "Initiative",
  },
];

const principles = [
  {
    number: "01",
    word: "Listen",
    copy: "Understand the people, the goal and the reality behind the request.",
  },
  {
    number: "02",
    word: "Analyse",
    copy: "Separate assumptions from evidence and find the pattern that matters.",
  },
  {
    number: "03",
    word: "Design",
    copy: "Shape a practical response that is clear, useful and considerate.",
  },
  {
    number: "04",
    word: "Deliver",
    copy: "Communicate well, follow through and keep improving the outcome.",
  },
];

const toolkit = [
  "Business analysis",
  "Research & synthesis",
  "AI-assisted workflows",
  "Digital strategy",
  "Content & visual design",
  "Excel & reporting",
  "Stakeholder communication",
  "Cybersecurity awareness",
];

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const updatePointer = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      page.style.setProperty("--pointer-x", `${(x * 100).toFixed(2)}%`);
      page.style.setProperty("--pointer-y", `${(y * 100).toFixed(2)}%`);
      page.style.setProperty("--tilt-x", `${((0.5 - y) * 3.5).toFixed(2)}deg`);
      page.style.setProperty("--tilt-y", `${((x - 0.5) * 6).toFixed(2)}deg`);
    };

    const updateScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      page.style.setProperty("--scroll-progress", `${(progress * 100).toFixed(2)}%`);
    };

    window.addEventListener("pointermove", updatePointer, { passive: true });
    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <div
      className="portfolio"
      data-theme={lightMode ? "light" : "dark"}
      ref={pageRef}
    >
      <div className="page-progress" aria-hidden="true" />
      <div className="ambient-light" aria-hidden="true" />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="MD Rahman — home">
          <span>MD</span>
          <strong>RAHMAN</strong>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Impact</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-actions">
          <button
            className="theme-switch"
            type="button"
            onClick={() => setLightMode((value) => !value)}
            aria-label={`Switch to ${lightMode ? "dark" : "light"} theme`}
            aria-pressed={lightMode}
          >
            <span className="theme-icon" aria-hidden="true">
              <i />
            </span>
            {lightMode ? "Dark" : "Light"}
          </button>
          <a className="header-cta" href="mailto:ramim3.1416@gmail.com">
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-pattern" aria-hidden="true">
            <span className="pattern-square square-one" />
            <span className="pattern-square square-two" />
            <span className="pattern-line" />
          </div>

          <div className="hero-copy">
            <div className="availability">
              <i aria-hidden="true" />
              Open to 2026 placement opportunities
            </div>
            <p className="hero-discipline">Technology × Business × People</p>
            <h1>
              Ideas into
              <span>impact.</span>
            </h1>
            <p className="hero-summary">
              I&apos;m MD Rahman—a Computer Science undergraduate who brings together
              analytical thinking, digital creativity and human communication to make
              complex things clearer and more useful.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                See selected impact <span aria-hidden="true">↓</span>
              </a>
              <a
                className="button button-quiet"
                href="https://linkedin.com/in/mdrahman56"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-roles" aria-label="Professional focus areas">
              <span>Business analysis</span>
              <span>Digital strategy</span>
              <span>Emerging technology</span>
            </div>
          </div>

          <div className="portrait-scene">
            <div className="portrait-depth depth-back" aria-hidden="true" />
            <div className="portrait-depth depth-mid" aria-hidden="true" />
            <figure className="portrait-frame">
              <img
                src="/md-rahman-portrait.png"
                alt="MD Rahman standing in a contemporary black and ivory studio portrait"
                width="1024"
                height="1536"
                fetchPriority="high"
              />
              <div className="portrait-shade" aria-hidden="true" />
            </figure>
            <div className="portrait-label label-top" aria-hidden="true">
              <span>Independent thinker</span>
              <strong>01 — 26</strong>
            </div>
            <div className="portrait-label label-side" aria-hidden="true">
              Strategy · Technology · Communication
            </div>
            <div className="portrait-stamp" aria-hidden="true">
              <span>MR</span>
              <small>London / Essex</small>
            </div>
          </div>

          <div className="hero-footnote">
            <span>Scroll to explore</span>
            <i aria-hidden="true" />
            <span>Portfolio / 2026</span>
          </div>
        </section>

        <section className="statement light-section" id="about">
          <div className="statement-index">01 / Point of view</div>
          <p className="statement-lead">
            The best technology starts with a better understanding of
            <em> people.</em>
          </p>
          <div className="statement-grid">
            <div className="statement-aside">
              <span>My perspective</span>
              <div className="micro-diagram" aria-hidden="true">
                <i /><i /><i />
                <b>+</b>
              </div>
            </div>
            <div className="statement-copy">
              <p>
                I&apos;m interested in the space where systems, decisions and human
                behaviour meet. That is why my experience moves across student
                leadership, technology outreach, digital business and content.
              </p>
              <p>
                I ask questions, look for patterns and translate what I learn into a
                clear next step. Cybersecurity is part of that journey—not the boundary
                of it.
              </p>
            </div>
            <div className="statement-fact">
              <strong>AAA</strong>
              <span>A Levels · Science</span>
              <small>Foundation in evidence and structured thinking</small>
            </div>
          </div>
        </section>

        <section className="impact-section" id="work">
          <div className="section-header">
            <div>
              <span className="section-index">02 / Selected impact</span>
              <h2>Work that moves<br />something forward.</h2>
            </div>
            <p>
              Not just tasks completed—examples of how I think, contribute and create
              value across different environments.
            </p>
          </div>

          <div className="impact-list">
            {impactStories.map((story) => (
              <article className={`impact-card impact-${story.accent}`} key={story.number}>
                <div className="impact-meta">
                  <span>{story.number}</span>
                  <p>{story.sector}</p>
                </div>
                <div className="impact-visual" aria-hidden="true">
                  <span className="visual-number">{story.number}</span>
                  <i className="visual-disc disc-one" />
                  <i className="visual-disc disc-two" />
                  <b>MR</b>
                </div>
                <div className="impact-copy">
                  <p className="impact-org">{story.organisation}</p>
                  <h3>{story.title}</h3>
                  <p className="impact-summary">{story.summary}</p>
                  <ul aria-label="Key contribution areas">
                    {story.contribution.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="process-section light-section">
          <div className="section-header process-header">
            <div>
              <span className="section-index">03 / How I think</span>
              <h2>Clarity is a<br />competitive advantage.</h2>
            </div>
            <p>
              My approach borrows from business analysis, design thinking and everyday
              common sense.
            </p>
          </div>
          <div className="process-grid">
            {principles.map((principle) => (
              <article className="process-card" key={principle.number}>
                <div className="process-top">
                  <span>{principle.number}</span>
                  <i aria-hidden="true" />
                </div>
                <h3>{principle.word}</h3>
                <p>{principle.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="experience-intro">
            <span className="section-index">04 / Experience</span>
            <h2>A career already<br />in motion.</h2>
            <p>
              Building range through leadership, digital work, technology education and
              community contribution.
            </p>
          </div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <article className="timeline-row" key={`${item.role}-${item.place}`}>
                <span className="timeline-number">0{index + 1}</span>
                <p className="timeline-date">{item.date}</p>
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.place}</p>
                </div>
                <span className="timeline-type">{item.type}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="toolkit-section light-section">
          <div className="toolkit-title">
            <span className="section-index">05 / Capability</span>
            <h2>Useful range.<br /><em>One point of view.</em></h2>
          </div>
          <div className="toolkit-marquee" aria-hidden="true">
            <span>THINK</span><i>+</i><span>MAKE</span><i>+</i><span>EXPLAIN</span><i>+</i>
          </div>
          <div className="toolkit-grid">
            {toolkit.map((item, index) => (
              <div className="tool-item" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
                <i aria-hidden="true">↗</i>
              </div>
            ))}
          </div>
          <div className="education-panel">
            <div>
              <span>Education</span>
              <h3>BSc Computer Science</h3>
              <p>London South Bank University · Year 2 · 2024—Present</p>
            </div>
            <div className="language-block">
              <span>Languages</span>
              <p>English · Bangla · Hindi</p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-pattern" aria-hidden="true">
            <i /><i /><i /><i />
          </div>
          <span className="section-index">06 / Next chapter</span>
          <p className="contact-eyebrow">Have an opportunity—or an ambitious problem?</p>
          <h2>Let&apos;s make<br /><em>something matter.</em></h2>
          <p className="contact-copy">
            I&apos;m seeking a year-in-industry placement where I can learn quickly,
            contribute thoughtfully and grow across technology and business.
          </p>
          <div className="contact-actions">
            <a className="contact-email" href="mailto:ramim3.1416@gmail.com">
              ramim3.1416@gmail.com <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://linkedin.com/in/mdrahman56"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="wordmark footer-wordmark">
          <span>MD</span>
          <strong>RAHMAN</strong>
        </div>
        <p>Technology · Business · People</p>
        <p>Essex, United Kingdom</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
