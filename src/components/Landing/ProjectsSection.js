import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  return (
    <section
      className="w-full min-h-screen flex flex-col"
      style={{
        background: 'linear-gradient(180deg, #2d1d0b 0%, #442a13 100%)',
      }}
    >
      <h2
        className="text-6xl mt-12 mb-10 text-center"
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
        className="flex flex-row gap-12 items-center justify-center flex-1"
        style={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ProjectCard name="Project 1" href="https://github.com/youruser/project1" />
        <ProjectCard name="Project 2" href="https://github.com/youruser/project2" />
        <ProjectCard name="Project 3" href="https://github.com/youruser/project3" />
      </div>
    </section>
  );
}
