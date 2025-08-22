import React, { useState, useCallback } from 'react';
import { Language } from './types';
import { content } from './constants/content';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';
import GroupLessonsSection from './components/GroupLessonsSection';
import CalligraphySection from './components/CalligraphySection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(Language.EN);

  const toggleLanguage = useCallback(() => {
    setLanguage(prevLang => prevLang === Language.EN ? Language.SV : Language.EN);
  }, []);

  const currentContent = content[language];

  return (
    <div className="flex flex-col min-h-screen bg-stone-50" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Header
        language={language}
        toggleLanguage={toggleLanguage}
        currentContent={currentContent.nav}
      />

      <main>
        <HeroSection currentContent={currentContent.hero} />
        <AboutSection currentContent={currentContent.about} />
        <CoursesSection currentContent={currentContent.courses} />
        <GroupLessonsSection currentContent={currentContent.groupLessons} />
        <CalligraphySection currentContent={currentContent.calligraphy} />
      </main>
      <Footer currentContent={currentContent.footer} />
    </div>
  );
};

export default App;