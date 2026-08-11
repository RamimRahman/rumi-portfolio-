"use client";

import { useEffect, useRef } from "react";

const experiences = [
  {
    number: "01",
    period: "APR 2026 — NOW",
    role: "Lead Student Representative",
    organisation: "London South Bank University",
    detail:
      "Representing students across Computer Science and Digital Technologies, turning feedback into clearer communication and positive change.",
    tone: "cyan",
  },
  {
    number: "02",
    period: "NOV 2025 — NOW",
    role: "CSI Outreach Ambassador",
    organisation: "London South Bank University",
    detail:
      "Making cybersecurity, online safety and digital wellbeing accessible through interactive sessions for school and college students.",
    tone: "violet",
  },
  {
    number: "03",
    period: "JAN 2025 — NOW",
    role: "Digital Marketing Assistant",
    organisation: "MEAMO LTD",
    detail:
      "Using AI-assisted creative tools, research and content optimisation to improve e-commerce listings and digital workflows.",
    tone: "orange",
  },
];

const missions = [
  {
    code: "MISSION / 01",
    title: "Zero Day: Cyber Security",
    label: "Founder · Digital Outreach & Campaign Lead",
    copy: "A student-led platform promoting cybersecurity awareness, online safety and meaningful student engagement.",
    tag: "CYBER AWARENESS",
    className: "mission-zero",
  },
  {
    code: "MISSION / 02",
    title: "Encode Hub Scholar",
    label: "Community · Events · Technology",
    copy: "Supporting tech events, developing new ideas and helping create a welcoming environment for a diverse community.",
    tag: "TECH COMMUNITY",
    className: "mission-encode",
  },
  {
    code: "MISSION / 03",
    title: "Cyber Outreach",
    label: "Education · Digital Wellbeing",
    copy: "Explaining technical ideas clearly through hands-on activities for young people from different backgrounds.",
    tag: "ACCESSIBLE TECH",
    className: "mission-outreach",
  },
];

const capabilities = [
  ["01", "Cybersecurity awareness", "Security concepts, online safety and digital risk"],
  ["02", "AI & digital tools", "Research, content creation and workflow improvement"],
  ["03", "Design & content", "Canva, Illustrator, Photoshop and Acrobat"],
  ["04", "Research & analysis", "Clear thinking, investigation and decision support"],
  ["05", "Communication", "Outreach, representation and confident collaboration"],
  ["06", "Leadership", "Initiative, teamwork and community building"],
];

export default function Home() {
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return;

    const updatePointer = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      shell.style.setProperty("--pointer-x", x.toFixed(3));
      shell.style.setProperty("--pointer-y", y.toFixed(3));
    };

    window.addEventListener("pointermove", updatePointer, { passive: true });
    return () => window.removeEventListener("pointermove", updatePointer);
  }, []);

  return (
    <div className="site-shell" ref={shellRef}>
      <div className="noise" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#top" aria-label="MD Rahman — home">
          <span className="brand-mark">MR</span>
          <span className="brand-copy">
            MD RAHMAN
            <small>DIGITAL ID / 2026</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">Profile</a>
          <a href="#experience">Experience</a>
          <a href="#missions">Missions</a>
        </nav>
        <a className="nav-contact" href="#contact">
          Let&apos;s connect <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="vertical-code left-code" aria-hidden="true">
            LSBU · COMPUTER SCIENCE · 51.505N / 0.090W
          </div>
          <div className="vertical-code right-code" aria-hidden="true">
            SCROLL TO EXPLORE · ID 03/1416
          </div>

          <div className="hero-copy">
            <div className="eyebrow">
              <span className="live-dot" /> AVAILABLE FOR A YEAR-IN-INDUSTRY PLACEMENT
            </div>
            <h1>
              HUMAN MIND.
              <span>SECURE FUTURE.</span>
            </h1>
            <p className="hero-intro">
              I&apos;m <strong>MD Rahman</strong>, a Computer Science undergraduate exploring
              cybersecurity, digital trust and the human side of technology.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#missions">
                Explore my work <span aria-hidden="true">↓</span>
              </a>
              <a
                className="text-link"
                href="https://linkedin.com/in/mdrahman56"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="identity-stage" aria-label="Futuristic portrait placeholder">
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />
            <div className="scan-plane" aria-hidden="true" />
            <div className="human-model" aria-hidden="true">
              <div className="model-glow" />
              <div className="model-head">
                <span className="face-line line-one" />
                <span className="face-line line-two" />
              </div>
              <div className="model-neck" />
              <div className="model-body">
                <div className="model-core">MR</div>
              </div>
              <div className="model-arm model-arm-left" />
              <div className="model-arm model-arm-right" />
              <div className="model-leg model-leg-left" />
              <div className="model-leg model-leg-right" />
            </div>
            <div className="portrait-status status-top">
              <span>VISUAL ID</span>
              <strong>PORTRAIT READY</strong>
            </div>
            <div className="portrait-status status-bottom">
              <span>SUBJECT</span>
              <strong>MD RAHMAN</strong>
            </div>
            <div className="floor-disc" aria-hidden="true">
              <span />
            </div>
          </div>

          <aside className="hero-data" aria-label="Profile details">
            <div className="data-card availability-card">
              <span className="data-label">CURRENT STATUS</span>
              <strong>BUILDING TOWARD CYBERSECURITY</strong>
              <div className="signal-bars" aria-hidden="true">
                <i /><i /><i /><i /><i />
              </div>
            </div>
            <div className="coordinates">
              <div>
                <span>BASE</span>
                <strong>ESSEX, UK</strong>
              </div>
              <div>
                <span>LANGUAGES</span>
                <strong>EN · BN · HI</strong>
              </div>
              <div>
                <span>FOCUS</span>
                <strong>SECURITY OPS</strong>
              </div>
            </div>
          </aside>

          <div className="hero-index" aria-hidden="true">
            <span>01</span>
            <i />
            <small>05</small>
          </div>
        </section>

        <section className="profile-section section-pad" id="about">
          <div className="section-kicker">
            <span>01</span> PROFILE
          </div>
          <div className="profile-layout">
            <h2>
              CURIOUS BY NATURE.
              <span>SECURITY-MINDED BY CHOICE.</span>
            </h2>
            <div className="profile-copy">
              <p>
                I&apos;m a second-year BSc Computer Science student at London South Bank
                University with a growing interest in how organisations protect their
                systems, data and people.
              </p>
              <p>
                My experience crosses student leadership, cyber outreach and digital
                content. The thread connecting it all is simple: understand the problem,
                communicate clearly and make technology work better for real people.
              </p>
            </div>
            <div className="profile-stat">
              <strong>AAA</strong>
              <span>A LEVELS · SCIENCE</span>
            </div>
          </div>
        </section>

        <section className="experience-section section-pad" id="experience">
          <div className="section-heading">
            <div className="section-kicker">
              <span>02</span> EXPERIENCE LOG
            </div>
            <p>Learning in public. Leading through action.</p>
          </div>
          <div className="experience-stack">
            {experiences.map((item) => (
              <article className={`experience-card ${item.tone}`} key={item.number}>
                <span className="experience-number">{item.number}</span>
                <div className="experience-period">{item.period}</div>
                <div className="experience-main">
                  <h3>{item.role}</h3>
                  <p className="organisation">{item.organisation}</p>
                </div>
                <p className="experience-detail">{item.detail}</p>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="missions-section section-pad" id="missions">
          <div className="missions-header">
            <div>
              <div className="section-kicker light-kicker">
                <span>03</span> ACTIVE MISSIONS
              </div>
              <h2>WORK WITH A SIGNAL.</h2>
            </div>
            <p>
              Projects and communities where I turn curiosity into practical contribution.
            </p>
          </div>
          <div className="mission-grid">
            {missions.map((mission) => (
              <article className={`mission-card ${mission.className}`} key={mission.code}>
                <div className="mission-topline">
                  <span>{mission.code}</span>
                  <i aria-hidden="true" />
                </div>
                <div className="mission-visual" aria-hidden="true">
                  <div className="visual-orbit orbit-a" />
                  <div className="visual-orbit orbit-b" />
                  <div className="visual-core">{mission.code.slice(-2)}</div>
                  <div className="visual-grid" />
                </div>
                <div className="mission-content">
                  <span className="mission-tag">{mission.tag}</span>
                  <h3>{mission.title}</h3>
                  <p className="mission-label">{mission.label}</p>
                  <p>{mission.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="capabilities-section section-pad">
          <div className="capabilities-intro">
            <div className="section-kicker">
              <span>04</span> CAPABILITY MATRIX
            </div>
            <h2>A HYBRID TOOLKIT FOR A CONNECTED WORLD.</h2>
            <p>
              Technical curiosity supported by design thinking, communication and a
              reliable way of working.
            </p>
          </div>
          <div className="capability-list">
            {capabilities.map(([number, title, copy]) => (
              <div className="capability-row" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <i aria-hidden="true">+</i>
              </div>
            ))}
          </div>
        </section>

        <section className="education-strip">
          <div className="education-track" aria-hidden="true">
            <span>COMPUTER SCIENCE</span><i>✦</i><span>CYBERSECURITY</span><i>✦</i>
            <span>DIGITAL TRUST</span><i>✦</i><span>HUMAN IMPACT</span><i>✦</i>
          </div>
          <div className="education-card">
            <span className="education-year">2024 — PRESENT</span>
            <div>
              <small>EDUCATION</small>
              <h2>BSc COMPUTER SCIENCE</h2>
              <p>London South Bank University · Year 2</p>
            </div>
            <strong>LSBU</strong>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-radar" aria-hidden="true">
            <i className="radar-ring radar-one" />
            <i className="radar-ring radar-two" />
            <i className="radar-ring radar-three" />
            <span>+</span>
          </div>
          <div className="section-kicker light-kicker">
            <span>05</span> OPEN CHANNEL
          </div>
          <h2>LET&apos;S BUILD A MORE SECURE DIGITAL FUTURE.</h2>
          <p>
            I&apos;m looking for a year-in-industry opportunity where I can learn fast,
            contribute meaningfully and gain hands-on exposure to security operations.
          </p>
          <div className="contact-actions">
            <a className="contact-email" href="mailto:ramim3.1416@gmail.com">
              ramim3.1416@gmail.com <span aria-hidden="true">↗</span>
            </a>
            <a
              className="contact-linkedin"
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
        <div className="footer-brand">MD RAHMAN / DIGITAL ID</div>
        <p>Designed for the next opportunity.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
