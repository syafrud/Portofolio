// data/content.ts
export const personalInfo = {
  name: "Syahrul Andika Wahyu",
  title: "Full Stack Developer",
  bio: "Passionate about web development with experience in building functional applications and websites.",
  phone: "+62 8950-6867-404",
  email: "syahrulandikaw@gmail.com",
  location:
    "RT03, Sawit, Panggungharjo, Kec. Sewon, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55188",
  images: {
    profile: "/me.jpg",
    about: "/me.jpg",
  },
};

export const socialLinks = {
  github: "https://github.com/syafrud",
  linkedin: "https://www.linkedin.com/in/syahrul-andika-wahyu-14aa76356/",
  email: "mailto:syahrulandikaw@gmail.com",
};

export const navigationItems = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "contact",
];

export const aboutContent = {
  title: "Junior Web Developer",
  description: [
    "Hello, my name is Syahrul Andika Wahyu, and I am a beginner web developer passionate about learning programming and web development. Currently studying at SMKN 1 Bantul, I aspire to become a programmer professional.",
    "I've worked on various projects from small converter applications to complex hotel management websites with database integration. My education has also provided insights into effective website marketing and current industry demands.",
  ],
};

export const projects = [
  {
    title: "Hotel Management Website",
    description:
      "Complete hotel management system with database integration for managing bookings, rooms, and customer information.",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    image: "/api/placeholder/500/300",
    github: "https://github.com/syafrud/hotel",
    demo: "#",
  },
  {
    title: "Website Kasir (Cashier System)",
    description:
      "Point of sale system for managing transactions, inventory, and sales reports.",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    image: "/api/placeholder/500/300",
    github: "https://github.com/syafrud/Kasir-new",
    demo: null,
  },
  {
    title: "MatikaKu - Math Learning Platform",
    description:
      "Educational website for mathematics learning with video content and interactive quizzes. Full-stack application with separate frontend and backend repositories.",
    tags: ["Laravel", "PHP", "MySQL", "Vite", "Video Integration"],
    image: "/api/placeholder/500/300",
    demo: null,
    additionalLinks: {
      frontend: "https://github.com/syafrud/MTKvite",
      backend: "https://github.com/syafrud/MTKlara",
    },
    credentials: {
      user: "user@gmail.com",
      admin: "admin@gmail.com",
      password: "12345678",
    },
  },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      "HTML/CSS",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Design",
      "Vite",
    ],
  },
  {
    category: "Backend",
    items: ["PHP", "Laravel", "Node.js", "API Development"],
  },
  {
    category: "Database",
    items: ["MySQL", "Database Design", "Query Optimization"],
  },
  {
    category: "Tools & Others",
    items: ["Git", "VS Code", "XAMPP", "IoT", "AI Basics"],
  },
];

export const experiences = [
  {
    title: "Web Developer",
    company: "Global Intermedia (PKL)",
    period: "Jun 2024 - Nov 2024",
    responsibilities: [
      "Redesigned and improved existing website interfaces for better user experience",
      "Developed school attendance system using Laravel framework",
      "Collaborated with students from other schools on web development projects",
      "Gained hands-on experience in full-stack web development",
    ],
  },
  {
    title: "Participant",
    company: "Samsung Innovation Campus Batch 6",
    period: "Jan 2025 - Feb 2025",
    responsibilities: [
      "Attended comprehensive training program on Internet of Things (IoT) technologies",
      "Learned artificial intelligence concepts and practical applications",
      "Participated in hands-on projects combining IoT and AI technologies",
      "Enhanced technical skills in emerging technology domains",
    ],
  },
  {
    title: "Student Developer",
    company: "SMK 1 Bantul",
    period: "2023 - Present",
    responsibilities: [
      "Developed Hotel Management Website with complete database integration",
      "Created cashier system (Website Kasir) for point-of-sale operations",
      "Built MatikaKu mathematics learning platform with video integration",
      "Continuously learning and applying new web development technologies",
    ],
  },
];

export const contactContent = {
  title: "Get In Touch",
  description:
    "Feel free to reach out to me! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
  contactInfo: [
    {
      icon: "fa-location-dot",
      label: "Location",
      value: personalInfo.location,
    },
    {
      icon: "fa-envelope",
      label: "Email",
      value: personalInfo.email,
    },
    {
      icon: "fa-phone",
      label: "Phone",
      value: personalInfo.phone,
    },
  ],
};

export const texts = {
  hero: {
    greeting: "Hi, I'm",
    ctaContact: "Contact Me",
    ctaWork: "View Work",
  },
  sections: {
    about: "About Me",
    skills: "My Skills",
    projects: "My Projects",
    experience: "Experience",
    contact: "Get In Touch",
  },
  buttons: {
    downloadCV: "Download CV",
    viewAllProjects: "View All Projects",
    sendMessage: "Send Message",
  },
  form: {
    labels: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
    },
    placeholders: {
      name: "Your Name",
      email: "Your Email",
      subject: "Subject",
      message: "Your Message",
    },
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Syahrul Andika Wahyu. All rights reserved.`,
  },
};
