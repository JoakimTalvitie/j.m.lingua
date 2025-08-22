import React from 'react';
import Section from './Section';

interface GroupLessonsSectionProps {
  currentContent: {
    title: string;
    description: string;
    price: string;
  };
}

const GroupLessonsSection: React.FC<GroupLessonsSectionProps> = ({ currentContent }) => {
  return (
    <Section id="group-lessons" className="bg-white">
      <div className="text-center">
        <div className="text-stone-700 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            {currentContent.title}
          </h2>
          <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {currentContent.description}
          </p>
          <p className="text-xl font-semibold text-stone-700 bg-stone-100 border-2 border-red-200 inline-block px-6 py-3 rounded-full shadow-sm mt-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {currentContent.price}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default GroupLessonsSection;