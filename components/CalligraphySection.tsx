import React from 'react';
import Section from './Section';

interface CalligraphySectionProps {
  currentContent: {
    title: string;
    artwork: {
      title: string;
      description: string;
      price: string;
    };
    lessons: {
      title: string;
      description: string;
      price: string;
    };
  };
}

const CalligraphySection: React.FC<CalligraphySectionProps> = ({ currentContent }) => {
  return (
    <Section id="calligraphy" className="bg-stone-100">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-8" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          {currentContent.title}
        </h2>
        
        {/* Single "window" container for both calligraphy offerings */}
        <div className="bg-white rounded-lg shadow-xl max-w-3xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Artwork Section */}
            <div className="flex flex-col items-center text-center p-8 md:border-r md:border-stone-200">
              <h3 className="text-2xl font-bold text-red-800 mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                {currentContent.artwork.title}
              </h3>
              <p className="text-stone-600 flex-grow mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {currentContent.artwork.description}
              </p>
              <div className="mt-auto">
                <p className="text-xl font-semibold text-stone-700 bg-white border-2 border-red-200 inline-block px-6 py-3 rounded-full shadow-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {currentContent.artwork.price}
                </p>
              </div>
            </div>
            
            {/* Divider for mobile view */}
            <hr className="border-stone-200 md:hidden" />

            {/* Lessons Section */}
            <div className="flex flex-col items-center text-center p-8">
               <h3 className="text-2xl font-bold text-red-800 mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                {currentContent.lessons.title}
              </h3>
              <p className="text-stone-600 flex-grow mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {currentContent.lessons.description}
              </p>
              <div className="mt-auto">
                <p className="text-xl font-semibold text-stone-700 bg-white border-2 border-red-200 inline-block px-6 py-3 rounded-full shadow-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {currentContent.lessons.price}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
};

export default CalligraphySection;