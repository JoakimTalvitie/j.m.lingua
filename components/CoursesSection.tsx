import React from 'react';
import Section from './Section';

interface CoursesSectionProps {
  currentContent: {
    title: string;
    japanese: {
      title: string;
      description: string;
    };
    classicalChinese: {
      title: string;
      description: string;
    };
    etymology: {
      title: string;
      description: string;
    };
    price: string;
  };
}

const CourseCard: React.FC<{ title: string; description: string; }> = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
    <h3 className="text-2xl font-bold text-red-800 mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
      {title}
    </h3>
    <p className="text-stone-600 flex-grow" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {description}
    </p>
  </div>
);

const CoursesSection: React.FC<CoursesSectionProps> = ({ currentContent }) => {
  return (
    <Section id="courses" className="bg-stone-100">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          {currentContent.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          <CourseCard
            title={currentContent.japanese.title}
            description={currentContent.japanese.description}
          />
          <CourseCard
            title={currentContent.classicalChinese.title}
            description={currentContent.classicalChinese.description}
          />
           <CourseCard
            title={currentContent.etymology.title}
            description={currentContent.etymology.description}
          />
        </div>
        <div className="mt-6">
          <p className="text-xl font-semibold text-stone-700 bg-white border-2 border-red-200 inline-block px-6 py-3 rounded-full shadow-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {currentContent.price}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default CoursesSection;