import React from 'react';
import ProjectCard from './ProjectCard';
import Button from './Button';

export default function ProjectsSection() {
  return (
    <section
      className="w-full min-h-screen flex flex-col"
      style={{
        background: 'linear-gradient(180deg, #2d1d0b 0%, #442a13 100%)',
      }}
    >
      <h2
        className="text-4xl md:text-6xl mt-8 md:mt-12 mb-6 md:mb-10 text-center"
        style={{
          fontFamily: "'Gang of Three', Arial, sans-serif",
          color: '#ffe08a',
          textShadow: '2px 2px 0 #000, 4px 4px 8px #000a',
          letterSpacing: '0.04em',
        }}
      >
        OUR PROJECTS
      </h2>
      <div
        className="
          flex flex-col md:flex-row
          gap-6 md:gap-12
          items-center justify-center flex-1
          w-full px-4 mb-5
        "
        style={{
          flexGrow: 1,
        }}
      >
        <ProjectCard name="Project 1" href="https://github.com/youruser/project1" />
        <ProjectCard name="Project 2" href="https://github.com/youruser/project2" />
        <ProjectCard name="Project 3" href="https://github.com/youruser/project3" />
      </div>
      <div className="mb-4 flex items-center justify-center">
        <Button linkto="/projects" name="EXPLORE PROJECTS" />
      </div>
    </section>
  );
}
