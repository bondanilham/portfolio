// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit this file to update the site.
//  Images: put files in /public/images and set e.g. image: '/images/about.jpg'.
//  Project images left as null show a labelled placeholder;
//  section banners left as null are simply hidden.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Bondan Ilham Akbar',
  title: 'Full-Stack JavaScript Developer',
  tagline:
    'I build web and mobile apps with React, Next.js and Node.js — from real-time auctions to AI-powered recipe generators — with a mechanical engineer’s eye for systems.',
  photo: null, // e.g. '/images/profile.jpg'
  resumeUrl: '/Bondan_Ilham_Akbar_20-11-2026.pdf',
  email: 'me@ilham.bond',
  location: 'Jakarta, Indonesia',
  contactText:
    'I’m open to full-stack, front-end and back-end JavaScript roles. The best way to reach me is by email.',
  socials: [
    { label: 'GitHub', url: 'https://github.com/bondanilham' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/bondan-ilham-akbar/' },
  ],
}

export const about = {
  image: null, // optional banner, e.g. '/images/about.jpg'
  paragraphs: [
    'I’m a junior full-stack JavaScript developer based in Jakarta, building web and mobile applications with React, Next.js, React Native, Node.js and Express.js. I enjoy designing REST and GraphQL APIs, adding real-time features with Socket.IO, and integrating AI services such as Google Gemini and Google Cloud Vision into products people actually use.',
    'Before code, I earned a B.Eng. in Mechanical Engineering from Gadjah Mada University and worked in engineering — designing and manufacturing special-purpose machines, and planning boiler maintenance at a textile plant. That background shapes how I build software: think in systems, keep things reliable, and plan for what can go wrong.',
  ],
  highlights: [
    { value: '7', label: 'Full-stack projects built' },
    { value: '3', label: 'AI-powered applications' },
    { value: 'B.Eng.', label: 'Mechanical Engineering, UGM' },
  ],
}

// Filter tabs shown above the project cards. Each project lists the tags it matches.
export const projectFilters = ['AI-powered', 'Next.js', 'React + Express', 'Mobile']

// kind: 'web' | 'mobile' — controls the card's accent color
export const projects = [
  {
    title: 'Bastionfall',
    subtitle: 'Fantasy City Defense Game',
    kind: 'web',
    type: 'Full-Stack Web App',
    date: 'Nov 2026',
    description:
      'A city defense game where players manage gold, upgrade walls, troops and the city, and try to survive 100 days. Runs on a server-side TypeScript game engine with deterministic battles, AI-generated story events from Google Gemini, and animated battle scenes with Web Audio sound effects.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Zod', 'JWT', 'Google Gemini'],
    tags: ['AI-powered', 'Next.js'],
    image: '/images/bastionfall.jpg',
    liveUrl: 'https://bastionfall.ilham.bond',
    codeUrl: null,
  },
  {
    title: 'Laundry List',
    subtitle: 'Laundry Tracker',
    kind: 'web',
    type: 'Full-Stack Web App',
    date: 'Nov 2026',
    description:
      'Track what’s in your laundry bag when you drop it off, mark it retrieved when you pick it up, and see what you spend each month. Built with Next.js Server Actions, per-user data in MongoDB.',
    tech: ['Next.js', 'React', 'TypeScript', 'Server Actions', 'Tailwind CSS', 'MongoDB', 'bcryptjs'],
    tags: ['Next.js'],
    image: '/images/laundry-list.jpg',
    liveUrl: 'https://laundry.ilham.bond',
    codeUrl: null,
  },
  {
    title: 'Audio Dealer',
    subtitle: 'E-Commerce Application',
    kind: 'web',
    type: 'Full-Stack Web App',
    date: 'Nov 2026',
    description:
      'An e-commerce platform for audio products with category browsing, color variants, debounced search, price sorting, infinite scrolling and wishlists — plus JWT auth, protected routes and dynamic SEO metadata.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'JWT', 'bcryptjs'],
    tags: ['Next.js'],
    image: '/images/audio-dealer.jpg',
    liveUrl: 'https://audio-dealer.ilham.bond',
    codeUrl: null,
  },
  {
    title: 'Smart Hammer',
    subtitle: 'Real-Time Auction Platform',
    kind: 'web',
    type: 'Full-Stack Web App',
    date: 'Oct 2026',
    description:
      'Create auctions and bid live: Socket.IO powers real-time bid updates, bidder tracking, bidding history and automatic auction closing. Includes OAuth sign-in and an AI product assistant that answers questions about each listing.',
    tech: ['React', 'Redux', 'Node.js', 'Express.js', 'Socket.IO', 'Supabase', 'Sequelize', 'OAuth', 'GPT-OSS-120B'],
    tags: ['AI-powered', 'React + Express'],
    image: '/images/smart-hammer.jpg',
    liveUrl: 'https://smart-hammer.ilham.bond',
    codeUrl: null,
  },
  {
    title: 'Omakase',
    subtitle: 'AI-Powered Recipe Generator',
    kind: 'web',
    type: 'Full-Stack Web App',
    date: 'Oct 2026',
    description:
      'Turns the ingredients you have into personalized recipes — even from a photo of your fridge. Uses Google Cloud Vision for ingredient recognition, GPT-OSS-120B for recipe generation and the Edamam API for nutrition facts.',
    tech: ['React', 'Redux Toolkit', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS', 'Google Cloud Vision', 'GPT-OSS-120B'],
    tags: ['AI-powered', 'React + Express'],
    image: '/images/omakase.jpg',
    liveUrl: 'https://omakase.ilham.bond',
    codeUrl: null,
  },
  {
    title: 'MukaBuku',
    subtitle: 'Social Media Application',
    kind: 'mobile',
    type: 'React Native App',
    date: 'Oct 2026',
    description:
      'An Android social media app with user profiles, image posts, likes, comments, following, user search and a chronological feed — backed by a GraphQL API on Apollo Server and MongoDB.',
    tech: ['React Native', 'Apollo Client', 'Apollo Server', 'GraphQL', 'Node.js', 'MongoDB', 'JWT'],
    tags: ['Mobile'],
    image: null,
    liveUrl: null,
    codeUrl: null,
  },
  {
    title: 'NgiFlix',
    subtitle: 'Movie Database',
    kind: 'web',
    type: 'Full-Stack Web App',
    date: 'Oct 2026',
    description:
      'A movie discovery platform with genre browsing, search and release-date sorting, served by a RESTful Express.js API over a locally seeded PostgreSQL database, with JWT authentication.',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'REST APIs', 'JWT', 'bcryptjs'],
    tags: ['React + Express'],
    image: null,
    liveUrl: 'https://ngiflix.ilham.bond',
    codeUrl: null,
  },
]

// type: 'software' | 'engineering' — controls the accent color on the timeline
export const experience = [
  {
    role: 'Full-Stack JavaScript Program',
    company: 'Hacktiv8 Indonesia · Jakarta',
    period: 'Completed Nov 2026',
    type: 'software',
    points: [
      'Intensive training in JavaScript, front-end and back-end development, databases, APIs and testing.',
      'Built and deployed full-stack web and mobile applications — see Projects above.',
    ],
  },
  {
    role: 'Management Trainee — Engineering',
    company: 'PT. Golden Tekstil Indonesia · Kendal',
    period: 'Jul — Oct 2024',
    type: 'engineering',
    points: [
      'Planned and scheduled routine boiler maintenance to support daily operations.',
      'Performed maintenance and coordinated assignments for seven field personnel.',
      'Reviewed daily reports from all shifts to monitor boiler operations.',
      'Rotated through Production and Winding, learning the textile process from yarn to finished fabric.',
    ],
  },
  {
    role: 'B.Eng. in Mechanical Engineering',
    company: 'Gadjah Mada University (UGM) · Yogyakarta',
    period: 'Graduated Jan 2024',
    type: 'engineering',
    points: [
      'GPA 3.44 / 4.00. Coursework included Advanced Thermodynamics, Industrial Heat Transfer and Railway Engineering.',
      'Students Association (KMTM): led a Mechanical Engineering × English Literature focus group discussion (2018) and served as Liaison Officer for the UGM Mechanical Design Competition (2019).',
    ],
  },
  {
    role: 'Manufacture Division Intern — Design & Manufacture',
    company: 'UD Rekayasa Wangdi · Yogyakarta',
    period: 'Jan — Feb 2023',
    type: 'engineering',
    points: ['Designed, analyzed and manufactured special-purpose machines and tools.'],
  },
]

// type: 'software' | 'engineering' — controls the group's accent color
// icon: code | layout | mobile | server | lock | database | tools | spark | gear | flame | users | globe
export const skills = [
  {
    group: 'Development',
    type: 'software',
    items: [
      { icon: 'code', name: 'Languages', detail: 'JavaScript, TypeScript, Python, C++' },
      { icon: 'layout', name: 'Front End', detail: 'React, Next.js, Redux Toolkit, Context API, Tailwind CSS, HTML5, CSS3' },
      { icon: 'mobile', name: 'Mobile', detail: 'React Native, Apollo Client, Android Studio' },
      { icon: 'server', name: 'Back End', detail: 'Node.js, Express.js, Apollo Server, REST APIs, GraphQL, Socket.IO, Redis' },
      { icon: 'lock', name: 'Auth & Validation', detail: 'JWT, OAuth, bcryptjs, Zod' },
      { icon: 'database', name: 'Database & ORM', detail: 'PostgreSQL, MongoDB, Supabase, Sequelize' },
      { icon: 'spark', name: 'AI Integration', detail: 'Google Gemini, GPT-OSS-120B, Google Cloud Vision' },
      { icon: 'tools', name: 'Tools', detail: 'VS Code, GitHub, DBeaver, Postman' },
    ],
  },
  {
    group: 'Beyond Code',
    type: 'engineering',
    items: [
      { icon: 'gear', name: 'Design & Manufacture', detail: 'Designing, analyzing and building special-purpose machines and tools' },
      { icon: 'flame', name: 'Thermal Systems', detail: 'Thermodynamics, industrial heat transfer, boiler operation & maintenance' },
      { icon: 'users', name: 'Team Coordination', detail: 'Scheduling maintenance and coordinating a seven-person field team' },
      { icon: 'globe', name: 'Languages', detail: 'English (TOEFL ITP 623), Japanese (N5), Indonesian (native)' },
    ],
  },
]
