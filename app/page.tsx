"use client";

import { useEffect, useRef, useState } from "react";

type LensKey = "creative" | "leadership" | "technology";

const lenses: Record<
  LensKey,
  { number: string; kicker: string; title: string; copy: string; skills: string[] }
> = {
  creative: {
    number: "01",
    kicker: "Make people look",
    title: "Creative",
    copy: "I shape ideas into visual stories, campaigns and digital experiences that feel clear, current and worth remembering.",
    skills: ["Content creation", "Graphic design", "Video editing", "Social media", "Visual branding"],
  },
  leadership: {
    number: "02",
    kicker: "Make people move",
    title: "Leadership",
    copy: "I bring people together, turn feedback into action and keep the details moving—from student representation to award-winning communities.",
    skills: ["Stakeholder engagement", "Public speaking", "Team coordination", "Outreach", "Project management"],
  },
  technology: {
    number: "03",
    kicker: "Make systems smarter",
    title: "Technology",
    copy: "I use computing, AI-assisted workflows and digital risk thinking to simplify work, improve products and make technical ideas human.",
    skills: ["AI integration", "Product optimisation", "Cyber awareness", "Digital research", "Automation"],
  },
};

const experience = [
  {
    period: "APR — JUL 2026",
    role: "Lead Representative",
    organisation: "London South Bank University",
    type: "Leadership · Part-time",
    summary: "Represented Computer Science and Digital Technologies students, bringing course representatives, academic staff and the Students’ Union into one clearer feedback loop.",
  },
  {
    period: "DEC 2025 — JUL 2026",
    role: "CSI Ambassador",
    organisation: "London South Bank University",
    type: "Outreach · Contract",
    summary: "Made cyber awareness, online safety and digital wellbeing practical and accessible through student-facing outreach.",
  },
  {
    period: "APR — JUL 2026",
    role: "Hub Scholar",
    organisation: "Encode Club",
    type: "Community · Contract",
    summary: "Helped deliver high-impact hackathons, workshops and community experiences connecting developers, builders and startup founders.",
  },
  {
    period: "AUG 2025 — JUL 2026",
    role: "Founder · Social Media & Outreach Officer",
    organisation: "LSBU ZeroDay",
    type: "Community · Campaigns",
    summary: "Built the club’s digital presence and helped turn an idea into an award-winning student community through content, events, workshops and campaigns.",
  },
  {
    period: "NOV 2024 — JUL 2026",
    role: "Customer Experience Crew Member",
    organisation: "Domino’s",
    type: "Operations · Part-time",
    summary: "Worked across customer service, ordering systems, POS and live restaurant operations—building speed, judgement and calm teamwork under pressure.",
  },
  {
    period: "2024 — FEB 2026",
    role: "Digital Marketing & Social Media Assistant",
    organisation: "Meamo",
    type: "Digital · Volunteer",
    summary: "Created AI-assisted visuals, improved product listings and explored product research, branding and e-commerce ideas for a growing business.",
  },
];

const impact = [
  {
    index: "A",
    category: "Community",
    title: "From an idea to an award.",
    copy: "ZeroDay grew into a place where students could learn, connect and build confidence in cybersecurity—recognised with LSBU Group’s 2026 Extra-Curricular Activity of the Year award.",
    proof: "Award-winning team",
  },
  {
    index: "B",
    category: "Outreach",
    title: "Technical ideas, made human.",
    copy: "A London Building Futures outreach story brought digital safety and opportunity into a wider conversation, reaching 941 LinkedIn impressions.",
    proof: "941 impressions",
  },
  {
    index: "C",
    category: "Digital business",
    title: "Better product stories.",
    copy: "At Meamo, product research, visual judgement and AI-assisted content came together to make listings clearer, sharper and more useful.",
    proof: "Research × creative",
  },
];

const skills = [
  "Social media marketing",
  "Product optimisation",
  "Stakeholder engagement",
  "AI integration & automation",
  "Community building",
  "Graphic design",
  "Digital risk awareness",
  "Content creation",
  "Team leadership",
  "Public speaking",
  "Project management",
  "Customer experience",
  "Video editing",
  "Canva & Photoshop",
  "Problem solving",
  "Business analysis",
];

const origins = [
  {
    year: "2019 — 2021",
    title: "School Ambassador & Outreach Lead",
    copy: "Led open days, community events and educational initiatives at St. Gregory’s High School & College.",
  },
  {
    year: "2018 — 2019",
    title: "President, Science Club",
    copy: "Organised science fairs, STEM activities and technology exhibitions that made learning collaborative.",
  },
  {
    year: "2015 — 2018",
    title: "Builder from the beginning",
    copy: "Created an award-winning automated irrigation system using programming and sensors, alongside coding workshops and science projects.",
  },
];

const recommendations = [
  {
    name: "MD Rakib Hasan",
    title: "Lead Representative · LSBU Computer Science & Digital Technologies",
    relationship: "ZeroDay & LSBU teammate",
    quote: "Rumi brings good energy while always staying professional. He is reliable, punctual, takes responsibility and always gives his best.",
    url: "https://www.linkedin.com/in/md-rakib-hasan-481a7726a/",
  },
  {
    name: "Sayra Begum",
    title: "First-Class Business Graduate · Sales Associate at ASICS EMEA",
    relationship: "Senior university colleague",
    quote: "His positive attitude and willingness to support others make him a valued colleague and friend.",
    url: "https://www.linkedin.com/in/sayra-begum-11551b251/",
  },
  {
    name: "Aaron Gillich",
    title: "Professor of Building Performance & Policy",
    relationship: "LSBU event partner",
    quote: "Rumi was absolutely brilliant. He helped create a welcoming atmosphere and fun events that were a big hit with our guests.",
    url: "https://www.linkedin.com/in/aaron-gillich-2b430215/",
  },
  {
    name: "Joshua Owolabi",
    title: "London University Student · Encode community peer",
    relationship: "Worked together at Encode",
    quote: "We shared great ideas together, and he is definitely someone with great vision.",
    url: "https://www.linkedin.com/in/joshua-owolabi-227671175/",
  },
  {
    name: "Esra Alioglu, MSc",
    title: "MSc Artificial Intelligence Student · IT Graduate",
    relationship: "Student Ambassador manager",
    quote: "He makes people feel comfortable, communicates confidently and always represents the university positively.",
    url: "https://www.linkedin.com/in/esra-alioglu-msc-642911203/",
  },
  {
    name: "Asma Akter",
    title: "Entrepreneur & Mentor",
    relationship: "Entrepreneurship mentor",
    quote: "He is accountable, enthusiastic and open-minded, with a genuine passion for learning and sharing knowledge.",
    url: "https://www.linkedin.com/in/asma-akter-5bb92b2aa/",
  },
  {
    name: "Ramya Shree Babu",
    title: "Data Science Student · Data Analytics Intern",
    relationship: "Student Ambassador teammate",
    quote: "His communication skills, willingness to help and ability to take initiative make him a valuable asset to any team.",
    url: "https://www.linkedin.com/in/ramyashree07/",
  },
  {
    name: "Md Mujaheed Shahariar Riad",
    title: "Computer Science Student · Data Analytics & FinTech",
    relationship: "CSI Ambassador & ZeroDay teammate",
    quote: "He brings positive energy to every project, keeps everyone motivated and always makes sure everyone’s ideas are heard.",
    url: "https://www.linkedin.com/in/enthusiastsrd/",
  },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Md Rahman",
  alternateName: "Rumi Rahman",
  url: "https://md-rahman-cyber-portfolio.rumi56.chatgpt.site",
  sameAs: ["https://www.linkedin.com/in/mdrahman56"],
  jobTitle: "Digital Marketing, Creative Technology & Community Leadership Professional",
  description:
    "London-based Computer Science undergraduate working across digital marketing, content creation, product optimisation, AI integration, community leadership and cybersecurity awareness.",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "London South Bank University",
  },
  knowsAbout: skills,
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
};

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [lightMode, setLightMode] = useState(false);
  const [activeLens, setActiveLens] = useState<LensKey>("creative");
  const [activeRecommendation, setActiveRecommendation] = useState(0);
  const [recommendationsPaused, setRecommendationsPaused] = useState(false);
  const [recommendationEngaged, setRecommendationEngaged] = useState(false);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const move = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      page.style.setProperty("--mx", `${(x * 100).toFixed(2)}%`);
      page.style.setProperty("--my", `${(y * 100).toFixed(2)}%`);
      page.style.setProperty("--rx", `${((0.5 - y) * 9).toFixed(2)}deg`);
      page.style.setProperty("--ry", `${((x - 0.5) * 12).toFixed(2)}deg`);
    };

    const scroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      page.style.setProperty("--progress", `${max > 0 ? (scrollY / max) * 100 : 0}%`);
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("scroll", scroll, { passive: true });
    scroll();
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  useEffect(() => {
    if (
      recommendationsPaused ||
      recommendationEngaged ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveRecommendation((current) => (current + 1) % recommendations.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [activeRecommendation, recommendationEngaged, recommendationsPaused]);

  const lens = lenses[activeLens];
  const recommendation = recommendations[activeRecommendation];

  const showPreviousRecommendation = () => {
    setActiveRecommendation((current) =>
      current === 0 ? recommendations.length - 1 : current - 1,
    );
  };

  const showNextRecommendation = () => {
    setActiveRecommendation((current) => (current + 1) % recommendations.length);
  };

  return (
    <div className="site" data-theme={lightMode ? "light" : "dark"} ref={pageRef}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div className="progress" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />

      <header className="nav-shell">
        <a className="brand" href="#top" aria-label="MD Rahman home">
          <span>MR</span>
          <strong>MD RAHMAN</strong>
        </a>
        <nav aria-label="Main navigation">
          <a href="#profile">Profile</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#voices">Voices</a>
        </nav>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setLightMode((current) => !current)}
            aria-label={`Use ${lightMode ? "dark" : "light"} mode`}
          >
            <i aria-hidden="true" />
            {lightMode ? "DARK" : "LIGHT"}
          </button>
          <a className="nav-linkedin" href="https://linkedin.com/in/mdrahman56" target="_blank" rel="noreferrer">
            LINKEDIN ↗
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <div className="eyebrow"><span /> MD RAHMAN · LONDON · OPEN TO OPPORTUNITIES</div>
            <h1>
              <small>DIGITAL MARKETING × CREATIVE TECHNOLOGY × LEADERSHIP</small>
              I build attention
              <span>into momentum.</span>
            </h1>
            <div className="hero-bottom">
              <p>
                Creative thinker, community builder and Computer Science undergraduate working where digital culture, business and technology meet.
              </p>
              <a className="round-arrow" href="#profile" aria-label="Explore the portfolio">↓</a>
            </div>
          </div>

          <div className="identity-stage" aria-label="Interactive MD Rahman identity sculpture">
            <div className="stage-index">PORTFOLIO / 2026</div>
            <div className="stage-proof proof-left"><strong>08</strong><span>LINKEDIN<br />RECOMMENDATIONS</span></div>
            <div className="stage-proof proof-right"><strong>922</strong><span>FOLLOWERS<br />& GROWING</span></div>
            <div className="orbit orbit-one" aria-hidden="true"><span>CREATIVE</span></div>
            <div className="orbit orbit-two" aria-hidden="true"><span>LEADERSHIP</span></div>
            <div className="orbit orbit-three" aria-hidden="true"><span>TECHNOLOGY</span></div>
            <div className="identity-core" aria-hidden="true">
              <div className="cube">
                <div className="cube-face face-front">MR</div>
                <div className="cube-face face-back">IDEA</div>
                <div className="cube-face face-right">MOVE</div>
                <div className="cube-face face-left">MAKE</div>
                <div className="cube-face face-top">GROW</div>
                <div className="cube-face face-bottom">2026</div>
              </div>
            </div>
            <div className="stage-note">MOVE YOUR CURSOR <span>↗</span></div>
          </div>
        </section>

        <div className="signal-strip" aria-label="Professional focus">
          <div className="signal-track">
            <span>SOCIAL MEDIA & DIGITAL MARKETING</span><i>✦</i>
            <span>CONTENT CREATION</span><i>✦</i>
            <span>PRODUCT OPTIMISATION</span><i>✦</i>
            <span>AI INTEGRATION & AUTOMATION</span><i>✦</i>
            <span>CYBER AWARENESS & DIGITAL RISK</span><i>✦</i>
            <span>SOCIAL MEDIA & DIGITAL MARKETING</span><i>✦</i>
            <span>CONTENT CREATION</span><i>✦</i>
          </div>
        </div>

        <section className="proof-bar" aria-label="LinkedIn profile highlights">
          <div><strong>500+</strong><span>CONNECTIONS</span></div>
          <div><strong>922</strong><span>FOLLOWERS</span></div>
          <div><strong>32</strong><span>SKILL AREAS</span></div>
          <div><strong>08</strong><span>RECOMMENDATIONS</span></div>
        </section>

        <section className="profile-section" id="profile">
          <div className="section-label"><span>01</span> THE PROFILE</div>
          <div className="profile-statement">
            <p className="lead-in">I don’t fit inside one job title.</p>
            <h2>
              I connect <em>people</em>, shape <em>ideas</em> and use <em>technology</em> to make both move further.
            </h2>
          </div>
          <div className="profile-note">
            <span>THE SHORT VERSION</span>
            <p>
              At LSBU and beyond, I’ve represented students, built communities, supported tech events, created digital content and improved customer and product experiences. The thread through all of it is simple: understand what matters, communicate it clearly, then make something useful happen.
            </p>
          </div>
        </section>

        <section className="lens-section" aria-labelledby="lens-title">
          <div className="lens-intro">
            <div className="section-label"><span>02</span> THREE LENSES</div>
            <h2 id="lens-title">One profile.<br />Three ways of thinking.</h2>
          </div>
          <div className="lens-interface">
            <div className="lens-tabs" role="tablist" aria-label="Professional lenses">
              {(Object.keys(lenses) as LensKey[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={activeLens === key}
                  className={activeLens === key ? "active" : ""}
                  onClick={() => setActiveLens(key)}
                >
                  <span>{lenses[key].number}</span>{lenses[key].title}
                </button>
              ))}
            </div>
            <div className={`lens-panel lens-${activeLens}`} role="tabpanel">
              <div className="lens-orb" aria-hidden="true"><span>{lens.number}</span></div>
              <div className="lens-content">
                <span className="lens-kicker">{lens.kicker}</span>
                <h3>{lens.title}</h3>
                <p>{lens.copy}</p>
                <div className="lens-skills">
                  {lens.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="award-section" id="work">
          <div className="award-mark" aria-hidden="true"><span>✦</span></div>
          <div className="award-copy">
            <div className="section-label section-label-light"><span>03</span> FEATURED STORY</div>
            <p className="award-kicker">LSBU GROUP EDUCATION AWARDS · 2026</p>
            <h2>From an idea<br />to an <em>award.</em></h2>
            <p>
              ZeroDay began with a belief that cybersecurity should feel open, practical and connected. Through outreach, content, workshops and a committed team, it became an award-winning student community.
            </p>
            <div className="award-footer">
              <strong>EXTRA-CURRICULAR<br />ACTIVITY OF THE YEAR</strong>
              <span>LEARN / BUILD / DEFEND</span>
            </div>
          </div>
        </section>

        <section className="impact-section">
          <div className="impact-heading">
            <div className="section-label"><span>04</span> SELECTED IMPACT</div>
            <h2>Work with a pulse.</h2>
            <p>Different environments. The same instinct: find the signal and make it useful.</p>
          </div>
          <div className="impact-grid">
            {impact.map((item) => (
              <article className="impact-card" key={item.index}>
                <div className="impact-card-top"><span>{item.index}</span><i>{item.category}</i></div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <div className="impact-proof">{item.proof}<span>↗</span></div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="experience-heading">
            <div className="section-label section-label-light"><span>05</span> EXPERIENCE</div>
            <h2>Proof across<br />different rooms.</h2>
          </div>
          <div className="experience-list">
            {experience.map((item, index) => (
              <article className="experience-row" key={`${item.role}-${item.organisation}`}>
                <span className="experience-number">{String(index + 1).padStart(2, "0")}</span>
                <div className="experience-main"><h3>{item.role}</h3><p>{item.organisation}</p></div>
                <div className="experience-detail"><span>{item.period}</span><span>{item.type}</span></div>
                <p className="experience-summary">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="origins-section">
          <div className="origins-heading">
            <div className="section-label"><span>06</span> THE ORIGIN STORY</div>
            <h2>Leadership didn’t start with a job title.</h2>
          </div>
          <div className="origins-list">
            {origins.map((item, index) => (
              <article key={item.title}>
                <div className="origin-line"><span>{String(index + 1).padStart(2, "0")}</span><i /></div>
                <p className="origin-year">{item.year}</p>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section">
          <div className="skills-head">
            <div className="section-label"><span>07</span> CAPABILITY SYSTEM</div>
            <p>Not a keyword wall. A connected set of ways I create value.</p>
          </div>
          <div className="skills-cloud">
            {skills.map((skill, index) => <span className={`skill skill-${(index % 4) + 1}`} key={skill}>{skill}</span>)}
          </div>
        </section>

        <section className="education-quote">
          <div className="education-card">
            <div className="section-label section-label-light"><span>08</span> EDUCATION</div>
            <div className="education-year">2024<br />— 2027</div>
            <h2>BSc Computer Science</h2>
            <p>London South Bank University</p>
            <div className="education-meta"><span>LONDON, UK</span><span>BUILDING THE NEXT CHAPTER</span></div>
          </div>
        </section>

        <section
          className="recommendations-section"
          id="voices"
          onMouseEnter={() => setRecommendationEngaged(true)}
          onMouseLeave={() => setRecommendationEngaged(false)}
          onFocusCapture={() => setRecommendationEngaged(true)}
          onBlurCapture={() => setRecommendationEngaged(false)}
          aria-labelledby="recommendations-title"
        >
          <div className="recommendations-intro">
            <div className="section-label"><span>09</span> PROFESSIONAL RECOMMENDATIONS</div>
            <p className="recommendations-kicker">REAL WORDS · REAL WORK · LINKEDIN VERIFIED</p>
            <h2 id="recommendations-title">
              People who’ve worked with Rumi say he makes the <em>team stronger.</em>
            </h2>
            <div className="recommendations-summary">
              <p>
                Eight recommendations. Different roles and relationships. One consistent signal: Rumi shows up with energy, responsibility and care for the people around him.
              </p>
              <a href="https://www.linkedin.com/in/mdrahman56/details/recommendations/" target="_blank" rel="noreferrer">
                VIEW ON LINKEDIN ↗
              </a>
            </div>
          </div>

          <div className="recommendations-player">
            <aside className="recommendation-sidebar" aria-label="Choose a recommendation">
              {recommendations.map((item, index) => (
                <button
                  type="button"
                  key={item.name}
                  className={activeRecommendation === index ? "active" : ""}
                  aria-pressed={activeRecommendation === index}
                  onClick={() => setActiveRecommendation(index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span><strong>{item.name}</strong><small>{item.relationship}</small></span>
                </button>
              ))}
            </aside>

            <article
              className={`recommendation-card recommendation-${(activeRecommendation % 4) + 1}`}
              aria-live="polite"
              key={recommendation.name}
            >
              <div className="recommendation-topline">
                <span>WHAT PEOPLE SAY</span>
                <span>{String(activeRecommendation + 1).padStart(2, "0")} / {String(recommendations.length).padStart(2, "0")}</span>
              </div>
              <div className="recommendation-mark" aria-hidden="true">“</div>
              <blockquote>“{recommendation.quote}”</blockquote>
              <footer className="recommendation-person">
                <a href={recommendation.url} target="_blank" rel="noreferrer">
                  <strong>{recommendation.name}</strong>
                  <span>{recommendation.title}</span>
                </a>
                <small>{recommendation.relationship} · LinkedIn recommendation</small>
              </footer>
              <div className="recommendation-controls">
                <button type="button" onClick={showPreviousRecommendation} aria-label="Show previous recommendation">←</button>
                <button
                  type="button"
                  onClick={() => setRecommendationsPaused((current) => !current)}
                  aria-label={recommendationsPaused ? "Resume automatic recommendations" : "Pause automatic recommendations"}
                  aria-pressed={recommendationsPaused}
                >
                  {recommendationsPaused ? "PLAY" : "PAUSE"}
                </button>
                <button type="button" onClick={showNextRecommendation} aria-label="Show next recommendation">→</button>
              </div>
              <div className={`recommendation-timer ${recommendationsPaused || recommendationEngaged ? "paused" : ""}`} aria-hidden="true">
                <i key={activeRecommendation} />
              </div>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-rings" aria-hidden="true"><span /><span /><span /></div>
          <div className="contact-copy">
            <p>HAVE AN IDEA, ROLE OR CONVERSATION?</p>
            <h2>Let’s make<br /><em>something move.</em></h2>
            <a href="mailto:ramim3.1416@gmail.com">START A CONVERSATION <span>↗</span></a>
          </div>
          <footer>
            <div className="brand"><span>MR</span><strong>MD RAHMAN</strong></div>
            <p>LONDON · UNITED KINGDOM</p>
            <div><a href="https://linkedin.com/in/mdrahman56" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="#top">BACK TO TOP ↑</a></div>
          </footer>
        </section>
      </main>
    </div>
  );
}
