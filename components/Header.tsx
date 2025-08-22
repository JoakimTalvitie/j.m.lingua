import React from 'react';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  toggleLanguage: () => void;
  currentContent: {
    title: string;
    langButton: string;
    contactButton: string;
  };
}

const Header: React.FC<HeaderProps> = ({ toggleLanguage, currentContent }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-stone-50/80 backdrop-blur-sm shadow-sm transition-all duration-300">
      <h1 className="text-2xl font-bold text-stone-800" style={{ fontFamily: "'Noto Serif JP', serif" }}>
        {currentContent.title}
      </h1>
      <div className="flex items-center gap-2 md:gap-3">
        <a
          href="mailto:info.jmlingua@gmail.com"
          className="px-4 py-2 text-sm font-semibold text-stone-600 bg-white border border-stone-300 rounded-md hover:bg-stone-100 hover:text-stone-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {currentContent.contactButton}
        </a>
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 text-sm font-semibold text-stone-600 bg-white border border-stone-300 rounded-md hover:bg-stone-100 hover:text-stone-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {currentContent.langButton}
        </button>
      </div>
    </header>
  );
};

export default Header;