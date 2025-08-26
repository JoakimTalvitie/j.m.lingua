import React, {useState, useEffect, useRef} from "react";
import Section from "./Section";

interface AboutSectionProps {
  currentContent: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
  };
}

const AboutSection: React.FC<AboutSectionProps> = ({currentContent}) => {
  const defaultImageSrc = "/j.m.lingua/photo.jpg";
  const [imageSrc, setImageSrc] = useState(defaultImageSrc);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Remove localStorage logic, always use local photo.jpg
  useEffect(() => {
    setImageSrc(defaultImageSrc);
  }, [defaultImageSrc]);

  // Remove upload/change logic

  return (
    <Section id="about" className="bg-white">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1 flex justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <img
              src={imageSrc}
              alt="Portrait of the teacher"
              className="rounded-full shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
        <div
          className="md:col-span-2 text-stone-700 space-y-4"
          style={{fontFamily: "'Poppins', sans-serif"}}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-stone-800 mb-4 text-center md:text-left"
            style={{fontFamily: "'Noto Serif JP', serif"}}
          >
            {currentContent.title}
          </h2>
          <p className="text-base leading-relaxed">{currentContent.p1}</p>
          <p className="text-base leading-relaxed">{currentContent.p2}</p>
          <p className="text-base font-semibold text-red-800 leading-relaxed">
            {currentContent.p3}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
