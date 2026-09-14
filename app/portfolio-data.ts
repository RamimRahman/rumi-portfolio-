export type Experience = {
  slug: string;
  role: string;
  organisation: string;
  period: string;
  status: "Current" | "Past";
  kind: string;
  simple: string;
  story: string;
  actions: string[];
  outcomes: string[];
  skills: string[];
  accent: "lime" | "violet" | "coral" | "cyan" | "paper";
};

export const experiences: Experience[] = [
  {
    slug: "lsbu-energy-advice-centre",
    role: "Community Energy Advice",
    organisation: "Energy Advice Centre at LSBU",
    period: "August 2026 — Present",
    status: "Current",
    kind: "Part-time · On-site",
    simple: "I help local people understand their energy bills, use energy more efficiently and find the support available to them.",
    story:
      "At the LSBU Energy Advice Centre in London, Rumi supports the community with free, impartial energy guidance. He helps people understand household energy consumption and bills, offers practical recommendations to improve efficiency and reduce costs, and signposts clients to relevant grants, schemes and specialist services. Working alongside colleagues, he supports community engagement and an accessible, professional and confidential service.",
    actions: [
      "Explain household energy consumption and bills in clear, accessible language",
      "Offer practical energy-efficiency and cost-saving guidance",
      "Signpost clients to relevant grants, support schemes and specialist services",
      "Support community engagement and collaborate with colleagues to provide confidential advice",
    ],
    outcomes: [
      "Helps residents make informed choices about household energy use",
      "Makes available support and specialist services easier to navigate",
      "Supports an accessible, impartial service for the local community",
    ],
    skills: ["Community engagement", "Sustainability", "Energy efficiency", "Client communication", "Service signposting"],
    accent: "cyan",
  },
  {
    slug: "lead-representative",
    role: "Lead Representative",
    organisation: "London South Bank University",
    period: "April 2026 — Present",
    status: "Current",
    kind: "Student leadership",
    simple: "I listen to Computer Science students, find the biggest problems and help the university act on them.",
    story:
      "Rumi represents students across Computer Science and Digital Technologies. He gathers feedback, spots repeated themes and brings the important points to academic staff and the Students’ Union in a clear, constructive way.",
    actions: [
      "Gather and organise student feedback",
      "Work with course representatives and academic staff",
      "Raise concerns in meetings and follow up on progress",
      "Help more students feel heard and included",
    ],
    outcomes: [
      "Clearer communication between students and staff",
      "Better visibility of student concerns",
      "A more connected student experience",
    ],
    skills: ["Stakeholder communication", "Insight synthesis", "Leadership", "Problem solving"],
    accent: "violet",
  },
  {
    slug: "csi-ambassador",
    role: "CSI Outreach Student Ambassador",
    organisation: "London South Bank University",
    period: "November 2025 — Present",
    status: "Current",
    kind: "Outreach",
    simple: "I help young people understand online safety without using confusing technical language.",
    story:
      "Rumi delivers friendly, hands-on sessions about cybersecurity, online safety and digital wellbeing for school and college students. His job is to make technical ideas feel simple, useful and safe to ask questions about.",
    actions: [
      "Deliver interactive cyber-awareness sessions",
      "Support practical activities for different age groups",
      "Represent LSBU at campus and community events",
      "Work with academic staff and other ambassadors",
    ],
    outcomes: [
      "Technical ideas become easier to understand",
      "Young visitors feel welcome on campus",
      "More students see a possible future in technology",
    ],
    skills: ["Public speaking", "Cyber awareness", "Inclusive communication", "Event support"],
    accent: "cyan",
  },
  {
    slug: "meamo",
    role: "Digital Marketing & Social Media Assistant",
    organisation: "Meamo Ltd",
    period: "January 2025 — Present",
    status: "Current",
    kind: "Digital business",
    simple: "I make products easier to find, understand and trust online.",
    story:
      "At Meamo, Rumi combines product research, clear writing, visual design and AI-assisted tools to improve e-commerce content. He also supports reporting, promotions and customer enquiries.",
    actions: [
      "Research products and customer needs",
      "Improve product titles, descriptions and images",
      "Use AI tools to speed up careful creative work",
      "Track stock and simple performance reports in Excel",
    ],
    outcomes: [
      "Clearer and more useful product listings",
      "A stronger and more consistent visual identity",
      "Improved performance on selected listings",
    ],
    skills: ["Digital marketing", "Product optimisation", "AI workflows", "E-commerce"],
    accent: "coral",
  },
  {
    slug: "encode-hub-scholar",
    role: "Hub Scholar",
    organisation: "Encode Club",
    period: "April 2026 — Present",
    status: "Current",
    kind: "Technology community",
    simple: "I help tech events run smoothly and make new people feel part of the community.",
    story:
      "As an Encode Hub Scholar, Rumi supports events that bring developers, builders and startup founders together. He helps with planning, setup, ideas and the small human details that make a community experience work.",
    actions: [
      "Support hackathons, workshops and in-person events",
      "Coordinate event setup and participation",
      "Share ideas with the Encode team",
      "Connect with builders and startup founders",
    ],
    outcomes: [
      "Welcoming and well-organised events",
      "Stronger connections between community members",
      "Practical exposure to fast-moving technology ecosystems",
    ],
    skills: ["Community building", "Event coordination", "Networking", "Technology ecosystems"],
    accent: "lime",
  },
  {
    slug: "zeroday",
    role: "Founder · Digital Outreach & Campaign Lead",
    organisation: "LSBU ZeroDay",
    period: "September 2025 — Present",
    status: "Current",
    kind: "Community & campaigns",
    simple: "I helped turn a small idea into an award-winning student community.",
    story:
      "ZeroDay was built to help students learn, connect and grow around cybersecurity. Rumi shapes its digital voice, creates content, promotes events and works with the team on workshops and awareness campaigns.",
    actions: [
      "Build and manage the club’s digital presence",
      "Create content and promote events",
      "Support workshops, campaigns and partner communication",
      "Help the team keep the community active and welcoming",
    ],
    outcomes: [
      "LSBU Group Education Award 2026",
      "Extra-Curricular Activity of the Year",
      "A growing student-led community with a clear purpose",
    ],
    skills: ["Brand building", "Campaigns", "Social media", "Community leadership"],
    accent: "lime",
  },
];

export const journey = [
  {
    year: "2017",
    title: "The builder appears",
    text: "Clubs, coding workshops and an award-winning automated irrigation system sparked Rumi’s interest in practical technology.",
  },
  {
    year: "2018–20",
    title: "Science becomes a platform",
    text: "A Levels in Science (AAA), Science Club leadership, technology exhibitions and outreach at St. Gregory’s.",
  },
  {
    year: "2024",
    title: "London chapter begins",
    text: "Started a BSc in Computer Science at LSBU and began turning academic learning into practical digital work.",
  },
  {
    year: "2025",
    title: "Creative work meets community",
    text: "Joined Meamo, launched ZeroDay and became a CSI Outreach Student Ambassador.",
  },
  {
    year: "2026",
    title: "Leadership earns proof",
    text: "Became Lead Representative and Encode Hub Scholar. ZeroDay won an LSBU Group Education Award.",
  },
  {
    year: "Now",
    title: "Building the next opportunity",
    text: "Combining digital marketing, creative technology and people-first leadership in London.",
  },
];

export const recommendations = [
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

export const education = [
  {
    period: "2024 — 2027",
    place: "London South Bank University",
    qualification: "BSc Computer Science",
    note: "Learning how software, data and systems work — then applying that thinking to real people and real problems.",
  },
  {
    period: "2018 — 2020",
    place: "St. Gregory’s High School & College",
    qualification: "A Levels in Science · AAA",
    note: "Built the curiosity, discipline and early leadership habits that still shape Rumi’s work today.",
  },
];

export const coreSkills = [
  "Digital marketing",
  "Content creation",
  "Product optimisation",
  "AI-assisted workflows",
  "Community leadership",
  "Stakeholder communication",
  "Graphic design",
  "Cyber awareness",
];
