import React from 'react';
import { Sun, Moon, Code2 } from 'lucide-react';

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400">
            <Code2 className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              Portafolio de Proyectos
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Desarrollo Web Interactivo
            </p>
          </div>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Alternar modo oscuro"
          className="relative inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 shadow-sm"
        >
          {darkMode ? (
            <div className="flex items-center gap-2">
              <Sun className="w-5 h-5 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
              <span className="text-xs font-semibold text-slate-200 hidden sm:inline">Modo Claro</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Moon className="w-5 h-5 text-indigo-600 transition-transform duration-300 -rotate-12 hover:rotate-0" />
              <span className="text-xs font-semibold text-slate-700 hidden sm:inline">Modo Oscuro</span>
            </div>
          )}
        </button>
      </div>
    </header>
  );
}
