"use client";

import { useEffect, useRef, useState } from "react";
import { ContactIcon, emailLinks, socialLinks, zoomRequest } from "./contact-links";
import {
  coreSkills,
  education,
  experiences,
  journey,
  recommendations,
} from "./portfolio-data";

const experienceLabels: Record<string, string> = {
  "lsbu-energy-advice-centre": "Community energy advice",
  "lead-representative": "Lead Representative",
  "encode-hub-scholar": "Hub Scholar",
  "zeroday": "Social Media & Outreach Officer",
  "csi-ambassador": "CSI Ambassador",
  "meamo": "Digital Marketing & Social Media",
  "school-ambassador": "School Ambassador",
  "science-club-president": "Science Club President",
  "school-volunteering": "Volunteering & extracurriculars",
};

const currentExperiences = experiences.filter((item) => item.status === "Current");

const personSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Md Shah Habibur Rahman",
    alternateName: ["Rumi", "Md Rahman", "Rumi Rahman"],
    url: "https://rumi-portfolio-tau.vercel.app",
    sameAs: socialLinks.filter((link) => link.name !== "LinkedIn").map((link) => link.href),
    jobTitle: "Digital Marketing, Creative Technology & Community Leadership Professional",
    description:
      "London-based Computer Science undergraduate combining digital marketing, content creation, product optimisation, AI-assisted workflows and community leadership.",
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
  const [experienceFilter, setExperienceFilter] = useState<"All" | "Current" | "Past">("All");
  const visibleExperiences = experiences.filter((item) => experienceFilter === "All" || item.status === experienceFilter);
  const [journeyPaused, setJourneyPaused] = useState(false);
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
          <a href="#now">Experience</a>
          <a href="#journey">Journey</a>
          <a href="#voices">Voices</a>
        </nav>
        <div className="top-actions">
          <button className="theme-button" type="button" onClick={switchTheme} aria-label={`Switch to ${lightMode ? "dark" : "light"} mode`}>
            <span aria-hidden="true">{lightMode ? "☾" : "☀"}</span>
            <i>{lightMode ? "DARK" : "LIGHT"}</i>
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

          <div className="hero-signal" aria-label="Interactive Rumi identity graphic">
            <div className="signal-label">CREATIVE × PEOPLE × TECHNOLOGY</div>
            <div className="signal-orbit orbit-a"><span>LISTEN</span></div>
            <div className="signal-orbit orbit-b"><span>BUILD</span></div>
            <div className="signal-core"><span>R</span><i>IDEAS<br />IN MOTION</i></div>
            <div className="signal-proof"><strong>08</strong><span>REAL LINKEDIN<br />RECOMMENDATIONS</span></div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Professional proof">
          <div><strong>500+</strong><span>Connections</span></div>
          <div><strong>922</strong><span>Followers</span></div>
          <div><strong>1</strong><span>LSBU Group Award</span></div>
          <div><strong>{currentExperiences.length}</strong><span>Current roles</span></div>
        </section>

        <section className="about" id="about">
          <div className="section-tag"><span>01</span> RUMI IN 30 SECONDS</div>
          <div className="about-main">
            <h2>Curious enough to ask why.<br />Practical enough to ask <em>what next?</em></h2>
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
            <div className="experience-intro"><div className="section-tag light"><span>02</span> EXPERIENCE</div><div className="experience-orbit" aria-hidden="true"><i /><b>people<br /><em>×</em> ideas</b><span>ALWAYS BUILDING</span></div></div>
            <div><h2>Small steps.<br /><em>Real impact.</em></h2><p>A little creativity. A lot of people. Explore the chapters that shaped how I work.</p></div>
          </div>
          <div className="experience-toolbar">
            <div className="experience-filters" role="group" aria-label="Filter experience">
              {(["All", "Current", "Past"] as const).map((filter) => (
                <button key={filter} type="button" aria-pressed={experienceFilter === filter} aria-controls="experience-grid" onClick={() => setExperienceFilter(filter)}>
                  {filter}<span>{filter === "All" ? experiences.length : experiences.filter((item) => item.status === filter).length}</span>
                </button>
              ))}
            </div>
            <a href="https://www.linkedin.com/in/mdrahman56/details/experience/" target="_blank" rel="noreferrer">View on LinkedIn ↗</a>
          </div>
          <p className="experience-count" role="status">Showing {visibleExperiences.length} {experienceFilter === "All" ? "roles" : `${experienceFilter.toLowerCase()} roles`}</p>
          <div className="role-grid" id="experience-grid">
            {visibleExperiences.map((item) => (
              <details className="experience-row" data-accent={item.accent} key={item.slug}>
                <summary>
                  <span className="experience-marker" data-current={item.status === "Current"} aria-hidden="true">
                    {({ "lsbu-energy-advice-centre": "EA", "lead-representative": "SU", "encode-hub-scholar": "EC", zeroday: "ZD", "csi-ambassador": "CSI", meamo: "M", "school-ambassador": "SG", "science-club-president": "SC", "school-volunteering": "IT" } as Record<string, string>)[item.slug]}
                  </span>
                  <span className="experience-identity">
                    <span className="experience-title">{experienceLabels[item.slug] || item.role}</span>
                    <span className="experience-organisation">{item.organisation}</span>
                  </span>
                  <span className="experience-date">{item.period}<span className="experience-status">{item.status === "Current" ? "Currently here" : "Previous role"}</span></span>
                  <span className="experience-expand" aria-hidden="true">+</span>
                </summary>
                <div className="experience-description">
                  <p>{item.simple}</p>
                  <span className="experience-context">{item.kind} · {item.location}</span>
                  <div className="experience-tags" aria-label="Skills">{item.skills.slice(0, 3).map((skill) => <span key={skill}>{skill}</span>)}</div>
                  <a href={`/details/${item.slug}`}>Explore this role <span aria-hidden="true">→</span><span className="experience-sr-only">: {item.role}</span></a>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="journey-section" id="journey">
          <div className="journey-head">
            <div className="section-tag"><span>03</span> THE JOURNEY</div>
            <h2>A clear path from <em>curiosity</em> to impact.</h2>
            <div className="journey-controls">
              <p>Each step explains what changed. Pause to explore at your own pace.</p>
              <button type="button" aria-pressed={journeyPaused} onClick={() => setJourneyPaused(!journeyPaused)}>
                {journeyPaused ? "Resume journey" : "Pause journey"}
              </button>
            </div>
          </div>
          <div className="journey-track" tabIndex={0} aria-label="Rumi's education and career journey" data-paused={journeyPaused}>
            <div className="journey-marquee">
              {[false, true].map((duplicate) => (
                <div className="journey-group" key={String(duplicate)} aria-hidden={duplicate || undefined}>
                  {journey.map((item, index) => (
                    <article key={item.year}>
                      <div className="journey-node"><span>{index + 1}</span><i /></div>
                      <strong>{item.year}</strong>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </article>
                  ))}
                </div>
              ))}
            </div>
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
          <div className="contact-icons" aria-label="Social and contact links">
            <div className="icon-group" role="group" aria-label="Social profiles">
              {socialLinks.map((link) => <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${link.name} (opens in a new tab)`} title={link.name}><ContactIcon name={link.name} /></a>)}
            </div>
            <div className="icon-group" role="group" aria-label="Email addresses">
              {emailLinks.map((link) => <a key={link.address} href={`mailto:${link.address}`} aria-label={`${link.name}: ${link.address}`} title={`${link.name}: ${link.address}`}><ContactIcon name={link.icon} /></a>)}
            </div>
            <div className="icon-group" role="group" aria-label="Chat, call or meet">
              <a href="https://wa.me/447342344156" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp: 07342 344156" title="WhatsApp: 07342 344156"><ContactIcon name="WhatsApp" /></a>
              <a href="tel:+447342344156" aria-label="Call: 07342 344156" title="Call: 07342 344156"><ContactIcon name="Phone" /></a>
              <a href={zoomRequest} aria-label="Request a Zoom meeting by email" title="Request a Zoom meeting by email"><ContactIcon name="Zoom" /></a>
              <a href="/rumi-rahman-cv.pdf" download aria-label="Download résumé" title="Download résumé"><ContactIcon name="Download" /></a>
            </div>
          </div>
          <footer className="footer"><div className="brand"><span>R</span><strong>RUMI</strong></div><p>MD SHAH HABIBUR RAHMAN · LONDON, UK</p><a href="#top">Back to top ↑</a></footer>
        </section>
      </main>
    </div>
  );
}
