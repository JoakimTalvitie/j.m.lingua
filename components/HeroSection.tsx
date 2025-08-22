import React, { useEffect, useState } from 'react';

interface HeroSectionProps {
  currentContent: {
    paragraphs: string[];
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ currentContent }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation on component mount
    setIsLoaded(true);
  }, []);

  return (
    <div
      className="w-full flex flex-col justify-center items-center text-white bg-cover bg-center bg-no-repeat pt-32 pb-20 md:pt-40 md:pb-32"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1600&h=900&auto=format&fit=crop')" }}
    >
      <div
        className={`bg-black bg-opacity-60 p-8 md:p-12 rounded-lg max-w-3xl text-left transform transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="space-y-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
          {currentContent.paragraphs.map((text, index) => {
            return (
              <p
                key={index}
                className="leading-relaxed text-xl font-semibold text-stone-100"
              >
                {text}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;