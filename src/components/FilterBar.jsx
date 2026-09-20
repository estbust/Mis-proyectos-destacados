import React from 'react';

const CATEGORIES = ["Todos", "React", "Python/Django", "Vanilla JS"];

export default function FilterBar({ activeCategory, setActiveCategory }) {
  return (
    <nav className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 py-6 px-4">
      {CATEGORIES.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 ${
              isActive
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 scale-105'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm'
            }`}
          >
            {category}
          </button>
        );
      })}
    </nav>
  );
}
