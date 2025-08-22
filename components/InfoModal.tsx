import React, { useEffect } from 'react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowJapanese: () => void;
  onShowClassicalChinese: () => void;
  content: {
    title: string;
    closeButton: string;
    japaneseButton: string;
    classicalChineseButton: string;
  };
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, onShowJapanese, onShowClassicalChinese, content }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="info-modal-title"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm bg-white rounded-lg shadow-xl p-6 text-stone-800 animate-modal-in"
        onClick={(e) => e.stopPropagation()}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <button
          aria-label={content.closeButton}
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-500 hover:text-red-700 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        
        <h2 id="info-modal-title" className="text-2xl font-bold mb-6 text-center" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          {content.title}
        </h2>

        <div className="flex flex-col justify-center gap-3">
          <button 
            onClick={onShowJapanese} 
            className="px-4 py-3 font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 bg-white text-stone-700 border border-stone-300 hover:bg-stone-100 hover:border-red-400"
          >
            {content.japaneseButton}
          </button>
          <button 
            onClick={onShowClassicalChinese} 
            className="px-4 py-3 font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 bg-white text-stone-700 border border-stone-300 hover:bg-stone-100 hover:border-red-400"
          >
            {content.classicalChineseButton}
          </button>
        </div>
      </div>
      <style>{`
        @keyframes modal-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-modal-in {
          animation: modal-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default InfoModal;
