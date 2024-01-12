import React from "react";
import "./Experience.css";
import { GoPrimitiveDot } from "react-icons/go";

const Experience = () => {
  const skills = [
    {
      title: "Software Development Highlights",
      items: [
        {
          name: "Vanilla JavaScript, Typescript",
          description: "Local & session storage, API's, quiz, Date object",
        },
        {
          name: "Design",
          description:
            "SCSS/SASS, Material UI, Bootstrap, Tailwind, Flex, Grid",
        },
        { name: "Gatsby JS", description: "I18n" },
        {
          name: "State Management",
          description: "Redux Toolkit, React Context",
        },

        { name: "Headless CMS", description: "Storyblok" },
        {
          name: "MongoDB, Node.js & Express",
          description: "MERN briefs, creating an API",
        },
        { name: "Firebase", description: "Quiz, Firebase Authentication" },

        {
          name: "SEO, Responsive Design, UX & Accessibility",
          description:
            "Lighthouse, Google Search Console, Webpack, Ahrefs, Hotjar",
        },
        {
          name: "Agile Methodology",
          description:
            "Scrum & Kanban, sprint planning, brainstorming sessions",
        },
        { name: "Phaser", description: "Seabattle game" },
        { name: "Git, GitHub, GitLab" },
        { name: "Pair-Programming & Mob-Programming" },
      ],
    },
    // Add more sections as needed
  ];

  const softwareTools = [
    {
      name: "Jira, Trello",
    },
    {
      name: "Adobe Creative Suite",
    },
    { name: "Google Search Console" },
    { name: "LightHouse" },
    { name: "Figma" },
  ];

  const softSkills = [
    {
      name: "Organizational skills",
    },
    {
      name: "Persistency",
    },
    { name: "Flexibility & Adaptability" },
    { name: "Accuracy" },
  ];

  const renderSection = (title, items) => (
    <div className="experience__section">
      <h3>{title}</h3>
      <div className="experience__content">
        {items.map((item, index) => (
          <article key={index} className="experience__details">
            <GoPrimitiveDot size={13} className="experience__details-icon" />
            <div>
              <h4>{item.name}</h4>
              {item.description && (
                <small className="text-light">{item.description}</small>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Skills</h2>

        <div className="container experience__container">
          {skills.map((section, index) => (
            <div key={index} className="experience__frontend">
              {renderSection(section.title, section.items)}
            </div>
          ))}
        </div>
        <div className="experience__content">
          <div className="container__second__experience">
            <div className="experience__first">
              {renderSection("Software", softwareTools)}
            </div>
            <div className="experience__second">
              {renderSection("Soft Skills", softSkills)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
