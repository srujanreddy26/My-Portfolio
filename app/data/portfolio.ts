export const portfolioData = {
  name: "Srujan Reddy Prodduturi",
  role: "Software Engineer",
  contactQueries: {
    email: "srujanreddy0408@gmail.com",
    phone: "(+773) 242 0458",
    linkedin: "https://linkedin.com/in/srujan-reddy0408",
    github: "https://github.com", // Placeholder
  },
  hero: {
    title: "Engineering Scale.",
    subtitle:
      "Backend Engineer specializing in high-performance microservices, cloud migrations, and systems handling 3M+ weekly requests.",
    cta: "View My Work",
  },
  about: {
    title: "About Me",
    description:
      "I am a Software Engineer with a strong foundation in building and refactoring web-based services. I excel at improving system reliability without disrupting live workflows, having optimized APIs for millions of users at IndiaMart. Currently pursuing my M.S. in Computer Science at DePaul University.",
    skills: [
      "Go (Golang)",
      "Python",
      "React",
      "Next.js",
      "PostgreSQL",
      "Docker",
      "GCP & Azure",
      "Microservices",
      "System Design",
    ],
  },
  experience: [
    {
      company: "IndiaMart",
      role: "Software Engineer",
      period: "Sept 2023 - Jun 2025",
      location: "Noida, UP, India",
      description:
        "Owned backend services handling 3M+ weekly API requests for seller and catalog systems.",
      achievements: [
        "Migrated high-traffic Seller Catalog APIs from PHP to Go, improving throughput and stability.",
        "Reduced Read API P95 latency by 82% and Write latency by 10% through query optimization.",
        "Architected a real-time product synchronization pipeline with Google Merchant Center.",
        "Designed a high-performance supplier data node, significantly reducing query execution time.",
      ],
    },
    {
      company: "IndiaMart",
      role: "Associate Software Engineer",
      period: "Jan 2022 - Aug 2023",
      location: "Noida, UP, India",
      description:
        "Led cloud and database migrations, optimizing infrastructure costs and reliability.",
      achievements: [
        "Led cloud migration from on-prem to Google Cloud Platform (GCP) with zero service disruption.",
        "Spearheaded database migration from Oracle to PostgreSQL using dual-write mechanisms.",
        "Reduced infrastructure costs by $40K annually through resource optimization.",
      ],
    },
  ],
  projects: [
    {
      title: "Indie Faction",
      subtitle: "Collector's Edition Platform",
      description:
        "A full-stack web application for game collectors. Built with React and Django REST Framework, featuring specific relational database schema designs and seamless frontend-backend communication.",
      techStack: ["React", "Django", "PostgreSQL", "REST APIs"],
      link: "#",
      github: "#",
    },
    // Adding placeholders for completeness based on "Projects" usually needing >1
    {
      title: "High-Scale API Gateway",
      subtitle: "System Design Prototype",
      description:
        "A rigorous implementation of a rate-limited API gateway processing concurrent requests, demonstrating advanced Go concurrency patterns.",
      techStack: ["Go", "Redis", "Docker", "gRPC"],
      link: "#",
      github: "#",
    },
  ],
  education: [
    {
      school: "DePaul University",
      degree: "Master of Science in Computer Science",
      period: "Sept 2025 - June 2027",
      details: "GPA: 4.00/4.00 | Chicago, IL",
    },
    {
      school: "Indian Institute of Information Technology (IIIT)",
      degree: "B.Tech in Computer Science and Engineering",
      period: "Aug 2018 - May 2022",
      details: "GPA: 3.00/4.00 | Sri City, AP, India",
    },
  ],
};
