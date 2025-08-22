import React, { useState, useEffect, useRef } from 'react';
import Section from './Section';

interface AboutSectionProps {
  currentContent: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
  };
}

const AboutSection: React.FC<AboutSectionProps> = ({ currentContent }) => {
  const defaultImageSrc = 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop';
  const [imageSrc, setImageSrc] = useState(defaultImageSrc);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const savedImage = window.localStorage.getItem('profileImage');
      if (savedImage) {
        setImageSrc(savedImage);
      }
    } catch (error) {
      console.error("Could not access localStorage to load profile image.", error);
    }
  }, []);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImageSrc(result);
        try {
          window.localStorage.setItem('profileImage', result);
        } catch (error) {
          console.error("Could not access localStorage to save profile image.", error);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Section id="about" className="bg-white">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1 flex justify-center">
          <div 
            className="relative w-48 h-48 md:w-64 md:h-64 group cursor-pointer"
            onClick={handleImageClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleImageClick()}
            aria-label="Upload new portrait"
          >
            <img 
              src={imageSrc} 
              alt="Portrait of the teacher" 
              className="rounded-full shadow-lg w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 rounded-full flex items-center justify-center transition-all duration-300">
              <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Change
              </p>
            </div>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept="image/png, image/jpeg, image/webp" 
              className="hidden" 
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="md:col-span-2 text-stone-700 space-y-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4 text-center md:text-left" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            {currentContent.title}
          </h2>
          <p className="text-base leading-relaxed">{currentContent.p1}</p>
          <p className="text-base leading-relaxed">{currentContent.p2}</p>
          <p className="text-base font-semibold text-red-800 leading-relaxed">{currentContent.p3}</p>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
