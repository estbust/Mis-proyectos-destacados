import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectGrid({ projects, activeCategory, searchQuery }) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-16 px-4">
        <p className="text-slate-500 dark:text-slate-400 text-base">
          No se encontraron proyectos {searchQuery ? `que coincidan con "${searchQuery}"` : ''} 
          {activeCategory !== 'Todos' ? ` en la categoría "${activeCategory}"` : ''}.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      {projects.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          animationKey={`${activeCategory}-${searchQuery}`} 
        />
      ))}
    </div>
  );
}
