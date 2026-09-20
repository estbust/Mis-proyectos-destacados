import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import ProjectGrid from './components/ProjectGrid';
import { projectsData } from './data/projectsData';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('dark')) {
        return urlParams.get('dark') === 'true';
      }
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
    }
    return false;
  });

  const [activeCategory, setActiveCategory] = useState(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('category')) {
        const cat = urlParams.get('category');
        if (['React', 'Python/Django', 'Vanilla JS', 'Todos'].includes(cat)) {
          return cat;
        }
      }
    }
    return 'Todos';
  });

  const [searchQuery, setSearchQuery] = useState(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('search') || '';
    }
    return '';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = activeCategory === 'Todos' || project.categoria === activeCategory;
    const matchesSearch = searchQuery.trim() === '' || project.titulo.toLowerCase().includes(searchQuery.toLowerCase().trim());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300 flex flex-col">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Mis Proyectos Destacados
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Explora una selección de mis trabajos en desarrollo web. Filtra por tecnología o busca proyectos por título.
          </p>
        </section>

        <SearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />

        <FilterBar 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        <ProjectGrid 
          projects={filteredProjects} 
          activeCategory={activeCategory} 
          searchQuery={searchQuery}
        />
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 py-6 transition-colors duration-300 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">
          © {new Date().getFullYear()} Portafolio de Proyectos - Construido con React & Tailwind CSS
        </div>
      </footer>
    </div>
  );
}
