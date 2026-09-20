export type Experience = {
  slug: string;
  role: string;
  organisation: string;
  period: string;
  location: string;
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
    role: "LSBU Energy Advice Centre: Supporting the Community with Free Energy Advice",
    organisation: "Energy Advice Centre at LSBU",
    location: "London Area, United Kingdom",
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
    role: "Lead Representative | Computer Science and Digital Technologies",
    organisation: "South Bank Students’ Union",
    location: "London Area, United Kingdom",
    period: "April 2026 — Present",
    status: "Current",
    kind: "Contract · Hybrid",
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
    slug: "encode-hub-scholar",
    role: "Hub Scholar – Encode Club",
    organisation: "Encode Club",
    location: "London, United Kingdom",
    period: "April 2026 — Present",
    status: "Current",
    kind: "Internship · On-site",
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
    role: "Social Media & Outreach Officer",
    organisation: "LSBU ZeroDay",
    location: "London Area, United Kingdom",
    period: "February 2025 — September 2026",
    status: "Past",
    kind: "Apprenticeship · Hybrid",
    simple: "I built the digital voice of a student cybersecurity community through content, events and outreach.",
    story:
      "ZeroDay was built to help students learn, connect and grow around cybersecurity. Rumi shaped its digital voice, created content, promoted events and worked with the team on workshops and awareness campaigns.",
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
  {
    slug: "csi-ambassador",
    role: "CSI Ambassador",
    organisation: "London South Bank University",
    location: "London, United Kingdom",
    period: "December 2025 — August 2026",
    status: "Past",
    kind: "Contract · Hybrid",
    simple: "I made cyber awareness, online safety and digital wellbeing accessible through student outreach.",
    story:
      "Rumi supported cyber-awareness initiatives through student outreach and practical learning sessions. He promoted online safety and digital wellbeing, using clear communication to make cybersecurity accessible.",
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
    role: "Digital Marketing and Social Media Assistant (Volunteer)",
    organisation: "Meamo",
    location: "Basildon, England, United Kingdom",
    period: "2024 — February 2026",
    status: "Past",
    kind: "Apprenticeship · Hybrid",
    simple: "I combined creative content, AI tools and product visuals to strengthen an online brand.",
    story:
      "At Meamo, Rumi collaborated on creative digital projects, using AI tools to improve product visuals and content. He optimised product listings and visual branding, bringing together creativity and technology to strengthen the team’s online presence.",
    actions: [
      "Research products and customer needs",
      "Improve product titles, descriptions and images",
      "Use AI tools to speed up careful creative work",
      "Collaborate with the team on creative digital ideas",
    ],
    outcomes: [
      "Clearer and more useful product listings",
      "A stronger and more consistent visual identity",
      "Practical experience combining creative work with AI tools",
    ],
    skills: ["Digital marketing", "Product optimisation", "AI workflows", "E-commerce"],
    accent: "coral",
  },
  {
    "slug": "school-ambassador",
    "role": "School Ambassador | Outreach & Community Engagement Lead",
    "organisation": "St. Gregory’s High School & College",
    "period": "January 2019 — December 2021",
    "location": "Dhaka, Bangladesh",
    "status": "Past",
    "kind": "Apprenticeship · Hybrid",
    "simple": "I welcomed future students and brought people together through school events and outreach.",
    "story": "As a School Ambassador at St. Gregory’s, Rumi represented the school at open days and inter-school events. He collaborated with teachers and student leaders on educational initiatives, building relationships with prospective students and partner schools.",
    "actions": [
      "Represent the school at open days and inter-school events",
      "Collaborate with teachers and student leaders",
      "Coordinate science fairs, IT events and workshops",
      "Welcome prospective students and promote school activities"
    ],
    "outcomes": [
      "More opportunities for student participation and learning",
      "Practical experience in outreach and event coordination"
    ],
    "skills": [
      "Communication",
      "Community engagement",
      "Event coordination",
      "Team management"
    ],
    "accent": "violet"
  },
  {
    "slug": "science-club-president",
    "role": "President | Science Club",
    "organisation": "St. Gregory’s High School & College",
    "period": "January 2018 — December 2019",
    "location": "Dhaka, Bangladesh",
    "status": "Past",
    "kind": "Apprenticeship · Hybrid",
    "simple": "I led a student committee creating science fairs, STEM workshops and technology exhibitions.",
    "story": "Rumi led the Science Club at St. Gregory’s, overseeing a committee of student volunteers. He worked with teachers, sponsors and external organisations to organise events that encouraged scientific inquiry and participation in innovation.",
    "actions": [
      "Lead a committee of student volunteers",
      "Plan science fairs, STEM workshops and technology exhibitions",
      "Coordinate with teachers, sponsors and external organisations"
    ],
    "outcomes": [
      "Created opportunities for students to explore science and innovation",
      "Developed leadership and teamwork through practical projects"
    ],
    "skills": [
      "Leadership",
      "Team coordination",
      "Event planning",
      "STEM outreach"
    ],
    "accent": "cyan"
  },
  {
    "slug": "school-volunteering",
    "role": "Volunteering & Extracurricular Activities",
    "organisation": "St. Gregory’s High School & College",
    "period": "February 2015 — October 2018",
    "location": "Dhaka, Bangladesh",
    "status": "Past",
    "kind": "Apprenticeship · On-site",
    "simple": "I explored practical technology through clubs, coding workshops and an award-winning irrigation project.",
    "story": "Through school clubs and extracurricular activities, Rumi helped organise coding workshops, quizzes, science fairs and inter-school competitions. Working with teachers and peers, he developed an award-winning automated irrigation system using basic programming and sensors.",
    "actions": [
      "Organise coding workshops, quizzes and technology activities",
      "Support science fairs and inter-school competitions",
      "Build an automated irrigation system with programming and sensors"
    ],
    "outcomes": [
      "Award-winning automated irrigation project",
      "Early foundations in teamwork, problem solving and practical technology"
    ],
    "skills": [
      "Teamwork",
      "Problem solving",
      "Programming",
      "Event support"
    ],
    "accent": "lime"
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
    text: "Led social media and outreach at ZeroDay and became a CSI Ambassador.",
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
