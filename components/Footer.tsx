import React from 'react';

interface FooterProps {
  currentContent: {
    instagram: string;
    text: string;
  };
}

const InstagramIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);


const Footer: React.FC<FooterProps> = ({ currentContent }) => {
  return (
    <footer className="bg-stone-800 text-stone-200 py-8 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <a
          href="https://www.instagram.com/mana_gaki/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={currentContent.instagram}
          className="inline-flex items-center justify-center p-3 mb-6 text-white bg-stone-700 rounded-full hover:bg-red-700 hover:scale-110 transform transition-all duration-300 shadow-lg"
        >
          <InstagramIcon />
        </a>
        <p className="text-stone-400 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
          {currentContent.text}
        </p>
      </div>
    </footer>
  );
};

export default Footer;