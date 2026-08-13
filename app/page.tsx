"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa6";
import { PiMicrosoftOutlookLogoFill, PiMicrosoftTeamsLogoFill } from "react-icons/pi";
import { SiGmail, SiZoom } from "react-icons/si";
import {
  coreSkills,
  education,
  experiences,
  journey,
  recommendations,
} from "./portfolio-data";

const currentExperiences = experiences.filter((item) => item.status === "Current");

const roleSignals = [
  "Lead Representative",
  "CSI Outreach Ambassador",
  "Digital Marketing",
  "Creative Technology",
  "Encode Hub Scholar",
  "ZeroDay Founder",
];

const organisations = [
  { mark: "LSBU", name: "London South Bank University", area: "Leadership · Outreach" },
  { mark: "M", name: "Meamo", area: "Digital · E-commerce" },
  { mark: "EC", name: "Encode Club", area: "Technology · Community" },
  { mark: "ZD", name: "LSBU ZeroDay", area: "Campaigns · Events" },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Md Shah Habibur Rahman",
    alternateName: ["Rumi", "Md Rahman", "Rumi Rahman"],
    url: "https://md-rahman-cyber-portfolio.rumi56.chatgpt.site",
    sameAs: ["https://www.linkedin.com/in/mdrahman56"],
    jobTitle: "Digital Marketing, Creative Technology & Community Leadership Professional",
    description:
      "London-based Computer Science undergraduate combining digital marketing, content creation, product optimisation, AI-assisted workflows and community leadership.",
    worksFor: {
      "@type": "Organization",
      name: "Meamo",
    },
    memberOf: [
      { "@type": "Organization", name: "LSBU ZeroDay" },
      { "@type": "Organization", name: "Encode Club" },
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "London South Bank University",
    },
    knowsAbout: coreSkills,
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "GB",
    },
  },
};

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [lightMode, setLightMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeRecommendation, setActiveRecommendation] = useState(0);
  const [testimonialPaused, setTestimonialPaused] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("rumi-theme");
    const alreadyVisited = window.sessionStorage.getItem("rumi-loaded");
    const skipLoader = Boolean(
      alreadyVisited || window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );

    const timer = window.setTimeout(() => {
      if (savedTheme === "light") setLightMode(true);
      setLoading(false);
      if (!skipLoader) window.sessionStorage.setItem("rumi-loaded", "true");
    }, skipLoader ? 0 : 1500);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (testimonialPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActiveRecommendation((current) => (current + 1) % recommendations.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [activeRecommendation, testimonialPaused]);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const move = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      page.style.setProperty("--mx", `${x * 100}%`);
      page.style.setProperty("--my", `${y * 100}%`);
      page.style.setProperty("--tilt-x", `${(0.5 - y) * 7}deg`);
      page.style.setProperty("--tilt-y", `${(x - 0.5) * 9}deg`);
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  const switchTheme = () => {
    setLightMode((current) => {
      window.localStorage.setItem("rumi-theme", current ? "dark" : "light");
      return !current;
    });
  };

  const recommendation = recommendations[activeRecommendation];
  const previousRecommendation = () =>
    setActiveRecommendation((current) =>
      current === 0 ? recommendations.length - 1 : current - 1,
    );
  const nextRecommendation = () =>
    setActiveRecommendation((current) => (current + 1) % recommendations.length);

  return (
    <div className="site" data-theme={lightMode ? "light" : "dark"} ref={pageRef}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className={`loader ${loading ? "visible" : "hidden"}`} aria-hidden={!loading}>
        <div className="loader-orbit"><span>R</span><i /><i /></div>
        <p>RUMI / BUILDING THE NEXT IDEA</p>
        <div className="loader-line"><i /></div>
      </div>

      <div className="pointer-light" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#top" aria-label="Rumi home">
          <span>R</span>
          <strong>RUMI</strong>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#now">Now</a>
          <a href="#journey">Journey</a>
          <a href="#voices">Voices</a>
        </nav>
        <div className="top-actions">
          <button className="theme-button" type="button" onClick={switchTheme} aria-label={`Switch to ${lightMode ? "dark" : "light"} mode`}>
            <span className="theme-core" aria-hidden="true"><i /><b /></span>
            <span className="theme-label"><small>MODE</small><strong>{lightMode ? "LIGHT" : "DARK"}</strong></span>
          </button>
          <a className="cv-button" href="/rumi-rahman-cv.pdf" download>
            CV <span aria-hidden="true">↓</span>
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="availability"><i /> London · open to opportunities</p>
            <p className="legal-name">MD SHAH HABIBUR RAHMAN · KNOWN AS</p>
            <h1>Rumi<span>.</span></h1>
            <h2>I turn digital ideas into things people can understand, trust and use.</h2>
            <p className="hero-intro">
              A Computer Science undergraduate combining <strong>digital marketing</strong>, <strong>creative technology</strong> and <strong>people-first leadership</strong>.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#now">See what I do <span>↓</span></a>
              <a className="button secondary" href="mailto:ramim3.1416@gmail.com?subject=Hello%20Rumi">Ask me something <span>↗</span></a>
            </div>
          </div>

          <div className="hero-tech" aria-label="Rumi's idea-to-impact working system">
            <div className="tech-header"><span>RUMI.OS</span><i>LIVE SYSTEM</i></div>
            <div className="tech-scanner" aria-hidden="true" />
            <div className="tech-map">
              <div className="tech-path" aria-hidden="true" />
              <div className="tech-node tech-node-1"><span>01</span><div><strong>LISTEN</strong><small>Understand people</small></div></div>
              <div className="tech-node tech-node-2"><span>02</span><div><strong>CONNECT</strong><small>Find the clear idea</small></div></div>
              <div className="tech-node tech-node-3"><span>03</span><div><strong>BUILD</strong><small>Make it useful</small></div></div>
              <div className="tech-node tech-node-4"><span>04</span><div><strong>IMPROVE</strong><small>Learn and move forward</small></div></div>
            </div>
            <div className="tech-result"><span>R</span><div><small>OUTPUT</small><strong>IDEAS → IMPACT</strong></div></div>
            <div className="tech-proof"><strong>08</strong><span>REAL LINKEDIN<br />RECOMMENDATIONS</span></div>
          </div>
        </section>

        <section className="role-marquee" aria-label="Rumi's professional focus">
          <div className="role-marquee-track">
            {[...roleSignals, ...roleSignals].map((role, index) => <span key={`${role}-${index}`}>{role}<i>✦</i></span>)}
          </div>
        </section>

        <section className="proof-strip" aria-label="Professional proof">
          <div><strong>500+</strong><span>Connections</span></div>
          <div><strong>922</strong><span>Followers</span></div>
          <div><strong>1</strong><span>LSBU Group Award</span></div>
          <div><strong>5</strong><span>Current roles</span></div>
        </section>

        <section className="organisation-strip" aria-labelledby="organisation-title">
          <div className="organisation-intro"><span>TRUSTED TO CONTRIBUTE ACROSS</span><h2 id="organisation-title">Education, technology and growing communities.</h2></div>
          <div className="organisation-grid">
            {organisations.map((organisation) => (
              <article key={organisation.name}>
                <span>{organisation.mark}</span>
                <div><strong>{organisation.name}</strong><small>{organisation.area}</small></div>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <div className="section-tag"><span>01</span> RUMI IN 30 SECONDS</div>
          <div className="about-main">
            <h2>
              <span>Curious enough to ask <strong>why.</strong></span>
              <span>Practical enough to ask <em>what next?</em></span>
            </h2>
            <p>
              Rumi is at his best when people, ideas and technology need to work together. He listens first, explains things simply and keeps moving until the idea becomes useful.
            </p>
          </div>
          <div className="value-grid">
            <article><span>01</span><h3>Make it clear</h3><p>Turn complicated information into words and visuals people understand.</p></article>
            <article><span>02</span><h3>Make it human</h3><p>Build trust, welcome different voices and help people feel included.</p></article>
            <article><span>03</span><h3>Make it happen</h3><p>Move from a good idea to practical action, one useful step at a time.</p></article>
          </div>
        </section>

        <section className="now" id="now">
          <div className="section-heading">
            <div className="section-tag light"><span>02</span> WHAT RUMI IS BUILDING NOW</div>
            <div><h2>Five roles.<br /><em>One clear direction.</em></h2><p>Short version here. Full story opens in a clean new page.</p></div>
          </div>
          <div className="role-grid">
            {currentExperiences.map((item, index) => (
              <article className={`role-card accent-${item.accent}`} key={item.slug}>
                <div className="role-top"><span>{String(index + 1).padStart(2, "0")}</span><i>● CURRENT</i></div>
                <p className="role-kind">{item.kind}</p>
                <h3>{item.role}</h3>
                <p className="role-org">{item.organisation}</p>
                <p className="role-simple">{item.simple}</p>
                <div className="role-bottom"><span>{item.period}</span><a href={`/details/${item.slug}`} target="_blank" rel="noreferrer">Read the story ↗</a></div>
              </article>
            ))}
          </div>
        </section>

        <section className="journey-section" id="journey">
          <div className="journey-head">
            <div className="section-tag"><span>03</span> THE JOURNEY</div>
            <h2>A clear path from <em>curiosity</em> to impact.</h2>
            <p>Swipe or scroll sideways. Each step explains what changed.</p>
          </div>
          <div className="journey-track" tabIndex={0} aria-label="Rumi's education and career journey">
            {journey.map((item, index) => (
              <article key={item.year}>
                <div className="journey-node"><span>{index + 1}</span><i /></div>
                <strong>{item.year}</strong>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="proof-story">
          <div className="proof-art" aria-hidden="true"><span>✦</span><i>LEARN<br />BUILD<br />DEFEND</i></div>
          <div className="proof-copy">
            <div className="section-tag light"><span>04</span> PROOF, NOT PROMISES</div>
            <p className="proof-kicker">LSBU GROUP EDUCATION AWARDS · 2026</p>
            <h2>An idea became an <em>award-winning community.</em></h2>
            <p>ZeroDay was created so students could learn, connect and grow. Rumi helped build its voice, campaigns and community—then the team earned Extra-Curricular Activity of the Year.</p>
            <a href="/details/zeroday" target="_blank" rel="noreferrer">See how it happened <span>↗</span></a>
          </div>
        </section>

        <section className="voices" id="voices" aria-labelledby="voices-title">
          <div className="voices-head">
            <div className="section-tag"><span>05</span> PEOPLE WHO WORKED WITH RUMI</div>
            <h2 id="voices-title">Different people.<br />The same <em>signal.</em></h2>
          </div>
          <article className={`voice-card voice-${(activeRecommendation % 4) + 1}`} key={recommendation.name}>
            <div className="voice-count">{String(activeRecommendation + 1).padStart(2, "0")} / 08</div>
            <div className="voice-mark" aria-hidden="true">“</div>
            <blockquote>“{recommendation.quote}”</blockquote>
            <footer>
              <a href={recommendation.url} target="_blank" rel="noreferrer"><strong>{recommendation.name}</strong><span>{recommendation.title}</span></a>
              <small>{recommendation.relationship} · Verified LinkedIn recommendation</small>
            </footer>
            <div className="voice-controls">
              <button type="button" onClick={previousRecommendation} aria-label="Previous recommendation">←</button>
              <button type="button" onClick={() => setTestimonialPaused((current) => !current)} aria-label={testimonialPaused ? "Resume recommendation rotation" : "Pause recommendation rotation"}>{testimonialPaused ? "PLAY" : "PAUSE"}</button>
              <button type="button" onClick={nextRecommendation} aria-label="Next recommendation">→</button>
            </div>
            <div className={`voice-timer ${testimonialPaused ? "paused" : ""}`}><i /></div>
          </article>
          <div className="voice-dots" aria-label="Choose recommendation">
            {recommendations.map((item, index) => (
              <button key={item.name} className={index === activeRecommendation ? "active" : ""} type="button" onClick={() => setActiveRecommendation(index)} aria-label={`Show recommendation from ${item.name}`} />
            ))}
          </div>
        </section>

        <section className="education">
          <div className="education-head">
            <div className="section-tag"><span>06</span> EDUCATION</div>
            <h2>Learning in class.<br /><em>Testing it in real life.</em></h2>
          </div>
          <div className="education-list">
            {education.map((item) => (
              <article key={item.place}><strong>{item.period}</strong><div><h3>{item.qualification}</h3><p>{item.place}</p></div><p>{item.note}</p></article>
            ))}
          </div>
          <div className="skill-row" aria-label="Core skills">{coreSkills.map((skill) => <span key={skill}>{skill}</span>)}</div>
        </section>

        <section className="connect" id="connect">
          <div className="connect-copy">
            <p>HAVE A ROLE, PROJECT OR QUESTION?</p>
            <h2>Let’s turn a quick hello into <em>something useful.</em></h2>
          </div>
          <div className="connect-dashboard">
            <a className="contact-primary" href="mailto:ramim3.1416@gmail.com?subject=Hello%20Rumi%20%E2%80%94%20I%20have%20a%20question"><span>ASK ME SOMETHING</span><strong>Email Rumi</strong><i>↗</i></a>
            <a className="contact-primary meeting" href="mailto:ramim3.1416@gmail.com?subject=Quick%20meeting%20with%20Rumi&body=Hi%20Rumi%2C%0A%0AI%27d%20like%20to%20arrange%20a%20quick%20Zoom%20or%20Teams%20meeting.%0A%0APreferred%20date%2Ftime%3A%20"><span>15-MINUTE INTRO</span><strong>Request a meeting</strong><i>↗</i></a>
            <a className="contact-link" href="/rumi-rahman-cv.pdf" download><span>CV</span><strong>Download résumé</strong><i>↓</i></a>
            <a className="contact-link" href="https://www.linkedin.com/in/mdrahman56" target="_blank" rel="noreferrer"><span>in</span><strong>LinkedIn</strong><i>↗</i></a>
          </div>
          <div className="social-dock" aria-label="Social profiles">
            <a href="mailto:ramim3.1416@gmail.com" aria-label="Email Rumi"><SiGmail aria-hidden="true" /><small>Gmail</small></a>
            <a href="https://www.linkedin.com/in/mdrahman56" target="_blank" rel="noreferrer" aria-label="Rumi on LinkedIn"><FaLinkedinIn aria-hidden="true" /><small>LinkedIn</small></a>
            <button type="button" disabled title="Profile link coming soon"><FaInstagram aria-hidden="true" /><small>Instagram</small></button>
            <button type="button" disabled title="Profile link coming soon"><FaTiktok aria-hidden="true" /><small>TikTok</small></button>
            <button type="button" disabled title="Profile link coming soon"><FaFacebookF aria-hidden="true" /><small>Facebook</small></button>
            <button type="button" disabled title="Profile link coming soon"><PiMicrosoftOutlookLogoFill aria-hidden="true" /><small>Outlook</small></button>
            <button type="button" disabled title="Profile link coming soon"><PiMicrosoftTeamsLogoFill aria-hidden="true" /><small>Teams</small></button>
            <button type="button" disabled title="Booking link coming soon"><SiZoom aria-hidden="true" /><small>Zoom</small></button>
            <button type="button" disabled title="Profile link coming soon"><FaGithub aria-hidden="true" /><small>GitHub</small></button>
          </div>
          <footer className="footer"><div className="brand"><span>R</span><strong>RUMI</strong></div><p>MD SHAH HABIBUR RAHMAN · LONDON, UK</p><a href="#top">Back to top ↑</a></footer>
        </section>
      </main>
    </div>
  );
}
