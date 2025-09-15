// page.tsx
/* eslint-disable react/no-unescaped-entities */
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Moon,
  Sun,
  Calendar,
  MapPin,
} from "lucide-react";

import {
  personalInfo,
  socialLinks,
  navigationItems,
  aboutContent,
  projects,
  skills,
  experiences,
  contactContent,
  texts,
} from "./data/content";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoaded, setIsLoaded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme =
      typeof window !== "undefined" ? localStorage?.getItem("theme") : null;
    const prefersDark =
      typeof window !== "undefined"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
        : false;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }

    setIsLoaded(true);

    const handleScroll = () => {
      for (const section of navigationItems) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      if (typeof window !== "undefined" && localStorage) {
        localStorage.setItem("theme", "light");
      }
    } else {
      document.documentElement.classList.add("dark");
      if (typeof window !== "undefined" && localStorage) {
        localStorage.setItem("theme", "dark");
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 68;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* Header/Navigation */}
      <header className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50 transition-colors duration-300">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold">Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors duration-200 hover:scale-105 transform ${
                  activeSection === item
                    ? "text-blue-600 dark:text-blue-400 font-medium border-b-2 border-blue-600 dark:border-blue-400 pb-1"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300"
                }`}
              >
                {item === "home"
                  ? "Home"
                  : item === "about"
                  ? "About"
                  : item === "skills"
                  ? "Skills"
                  : item === "experience"
                  ? "Experience"
                  : item === "projects"
                  ? "Projects"
                  : item === "contact"
                  ? "Contact"
                  : item}
              </button>
            ))}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-110 transform"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="bg-white dark:bg-gray-800 shadow-md py-4 px-6 md:hidden animate-fadeIn transition-colors duration-300 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 text-left py-2 px-3 rounded-lg ${
                    activeSection === item
                      ? "text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  {item === "home"
                    ? "Home"
                    : item === "about"
                    ? "About"
                    : item === "skills"
                    ? "Skills"
                    : item === "experience"
                    ? "Experience"
                    : item === "projects"
                    ? "Projects"
                    : item === "contact"
                    ? "Contact"
                    : item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className={`min-h-screen flex items-center pt-20 px-6 transition-colors duration-300 ${
          isLoaded ? "animate-fadeIn" : ""
        }`}
      >
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg mb-2 text-gray-600 dark:text-gray-300">
              {texts.hero.greeting}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeInUp">
              <span className="text-blue-600 dark:text-blue-400">
                {personalInfo.name}
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-gray-600 dark:text-gray-300 animate-fadeInUp animate-delay-1s">
              {personalInfo.title}
            </h2>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300 max-w-lg animate-fadeInUp animate-delay-2s">
              {personalInfo.bio}
            </p>
            <div className="flex space-x-4 animate-fadeInUp animate-delay-3s">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
              >
                {texts.hero.ctaContact}
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 font-medium py-2 px-6 rounded-md transition-colors duration-300"
              >
                {texts.hero.ctaWork}
              </button>
            </div>
            <div className="flex space-x-4 mt-8 animate-fadeInUp animate-delay-3s">
              <a
                href={socialLinks.github}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href={socialLinks.linkedin}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={socialLinks.email}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fadeInRight">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl">
              <Image
                src={personalInfo.images.profile}
                alt={personalInfo.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce animate-infinite">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen-minus-header flex pt-header pb-16 px-6 bg-white dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            {texts.sections.about.split(" ")[0]}{" "}
            <span className="text-blue-600 dark:text-blue-400">
              {texts.sections.about.split(" ")[1]}
            </span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Image Section */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-md lg:max-w-lg h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={personalInfo.images.profile}
                  alt="About Me"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {aboutContent.title}
                </h3>
                <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              </div>

              {aboutContent.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg"
                >
                  {paragraph}
                </p>
              ))}

              {/* Personal Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 dark:text-white flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Name
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 ml-4">
                    {personalInfo.name}
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 dark:text-white flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Phone
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 ml-4">
                    {personalInfo.phone}
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg md:col-span-2">
                  <p className="font-semibold text-gray-900 dark:text-white flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Email
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 ml-4">
                    {personalInfo.email}
                  </p>
                </div>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 flex items-center mt-8 group">
                <span className="mr-2">{texts.buttons.downloadCV}</span>
                <svg
                  className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen-minus-header pt-header pb-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            {texts.sections.skills.split(" ")[0]}{" "}
            <span className="text-blue-600 dark:text-blue-400">
              {texts.sections.skills.split(" ")[1]}
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                {/* Icon based on category */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    {skill.category === "Frontend" && (
                      <svg
                        className="w-8 h-8 text-blue-600 dark:text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                    {skill.category === "Backend" && (
                      <svg
                        className="w-8 h-8 text-blue-600 dark:text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                        />
                      </svg>
                    )}
                    {skill.category === "Database" && (
                      <svg
                        className="w-8 h-8 text-blue-600 dark:text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                        />
                      </svg>
                    )}
                    {skill.category === "Tools" && (
                      <svg
                        className="w-8 h-8 text-blue-600 dark:text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
                  {skill.category}
                </h3>

                <div className="space-y-3">
                  {skill.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center text-gray-700 dark:text-gray-300 group"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                      <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="min-h-screen-minus-header pt-header pb-20 px-6 bg-white dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            {texts.sections.experience.split(" ")[0]}{" "}
            <span className="text-blue-600 dark:text-blue-400">
              {texts.sections.experience.split(" ")[1]}
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-800"></div>

              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-16 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900 px-3 py-1 rounded-full">
                            {experience.period}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {experience.title}
                        </h3>
                        <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold">
                          <MapPin className="w-4 h-4 mr-1" />
                          {experience.company}
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div className="space-y-3">
                        {experience.responsibilities.map(
                          (responsibility, responsibilityIndex) => (
                            <div
                              key={responsibilityIndex}
                              className="flex items-start"
                            >
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {responsibility}
                              </p>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen-minus-header pt-header pb-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            {texts.sections.projects.split(" ")[0]}{" "}
            <span className="text-blue-600 dark:text-blue-400">
              {texts.sections.projects.split(" ")[1]}
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Conditional rendering untuk links */}
                  <div className="flex flex-wrap gap-4">
                    {/* Github single link */}
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center transition-colors duration-200"
                      >
                        <Github size={18} className="mr-1" />
                        <span>Code</span>
                      </a>
                    )}

                    {/* Multiple github links */}
                    {project.additionalLinks && (
                      <>
                        {project.additionalLinks.frontend && (
                          <a
                            href={project.additionalLinks.frontend}
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center transition-colors duration-200"
                          >
                            <Github size={18} className="mr-1" />
                            <span>Frontend</span>
                          </a>
                        )}
                        {project.additionalLinks.backend && (
                          <a
                            href={project.additionalLinks.backend}
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center transition-colors duration-200"
                          >
                            <Github size={18} className="mr-1" />
                            <span>Backend</span>
                          </a>
                        )}
                      </>
                    )}

                    {/* Demo link - hanya tampil jika ada dan bukan "#" */}
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center transition-colors duration-200"
                      >
                        <ExternalLink size={18} className="mr-1" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>

                  {/* Credentials info jika ada */}
                  {project.credentials && (
                    <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 font-semibold">
                        Demo Credentials:
                      </p>
                      <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                        <p>User: {project.credentials.user}</p>
                        <p>Admin: {project.credentials.admin}</p>
                        <p>Password: {project.credentials.password}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 font-medium py-2 px-6 rounded-md transition-colors duration-300"
            >
              {texts.buttons.viewAllProjects}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen-minus-HF pt-header pb-20 px-6 bg-white dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            {contactContent.title.split(" ")[0]}{" "}
            {contactContent.title.split(" ")[1]}{" "}
            <span className="text-blue-600 dark:text-blue-400">
              {contactContent.title.split(" ")[2]}
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                {contactContent.description}
              </p>
              <div className="space-y-6">
                {contactContent.contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-blue-600 dark:text-blue-400 mr-4">
                      <i className={`fa-solid ${info.icon} text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="font-medium">{info.label}</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex space-x-4 mt-8">
                <a
                  href={socialLinks.github}
                  className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full text-gray-700 dark:text-gray-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href={socialLinks.linkedin}
                  className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full text-gray-700 dark:text-gray-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={socialLinks.email}
                  className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full text-gray-700 dark:text-gray-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors duration-300"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
            <div>
              <form className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 shadow-lg transition-colors duration-300">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      {texts.form.labels.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white transition-colors duration-200"
                      placeholder={texts.form.placeholders.name}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      {texts.form.labels.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white transition-colors duration-200"
                      placeholder={texts.form.placeholders.email}
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {texts.form.labels.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white transition-colors duration-200"
                    placeholder={texts.form.placeholders.subject}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {texts.form.labels.message}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white transition-colors duration-200"
                    placeholder={texts.form.placeholders.message}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
                >
                  {texts.buttons.sendMessage}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 py-8 px-6 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
              {texts.footer.copyright}
            </p>
            <div className="flex space-x-4">
              <a
                href={socialLinks.github}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href={socialLinks.linkedin}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={socialLinks.email}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
