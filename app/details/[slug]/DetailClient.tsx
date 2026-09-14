"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Experience } from "../../portfolio-data";

export default function DetailClient({ experience }: { experience: Experience }) {
  const [lightMode, setLightMode] = useState(true);

  useEffect(() => {
    const saved = window.localStorage.getItem("rumi-theme");
    const timer = window.setTimeout(() => {
      if (saved === "dark") setLightMode(false);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const switchTheme = () => {
    setLightMode((current) => {
      window.localStorage.setItem("rumi-theme", current ? "dark" : "light");
      return !current;
    });
  };

  return (
    <div className="detail-site" data-theme={lightMode ? "light" : "dark"}>
      <header className="detail-nav">
        <Link className="brand" href="/" aria-label="Return to Rumi's portfolio"><span>R</span><strong>RUMI</strong></Link>
        <div className="detail-nav-actions">
          <button type="button" onClick={switchTheme} aria-label={`Switch to ${lightMode ? "dark" : "light"} mode`}>{lightMode ? "☾" : "☀"}</button>
          <Link href="/">Close story ×</Link>
        </div>
      </header>

      <main>
        <section className="detail-hero">
          <div className="detail-index">EXPERIENCE / {experience.kind.toUpperCase()}</div>
          <div className="detail-title">
            <div className="status">● {experience.status.toUpperCase()}</div>
            <h1>{experience.role}</h1>
            <p>{experience.organisation}</p>
          </div>
          <div className="detail-meta"><span>{experience.period}</span><span>{experience.kind}</span><span>London, United Kingdom</span></div>
        </section>

        <section className={`detail-simple detail-accent-${experience.accent}`}>
          <span>IN SIMPLE WORDS</span>
          <h2>{experience.simple}</h2>
        </section>

        <section className="detail-story">
          <h2>The story</h2>
          <p>{experience.story}</p>
          <div className="detail-skills" aria-label="Skills used in this role">{experience.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
        </section>

        <section className="detail-columns">
          <div>
            <h2>What Rumi does</h2>
            <ol>{experience.actions.map((action, index) => <li key={action}><span>{String(index + 1).padStart(2, "0")}</span>{action}</li>)}</ol>
          </div>
          <div>
            <h2>Why it matters</h2>
            <ol>{experience.outcomes.map((outcome, index) => <li key={outcome}><span>{String(index + 1).padStart(2, "0")}</span>{outcome}</li>)}</ol>
          </div>
        </section>

        <section className="detail-cta">
          <p>LIKE THE WAY RUMI WORKS?</p>
          <h2>Start with a simple hello.</h2>
          <div>
            <a href="mailto:ramim3.1416@gmail.com?subject=Hello%20Rumi">Email Rumi ↗</a>
            <a href="/rumi-rahman-cv.pdf" download>Download CV ↓</a>
            <a href="https://www.linkedin.com/in/mdrahman56" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </section>
      </main>
    </div>
  );
}
