export enum Language {
  EN = 'en',
  SV = 'sv',
}

export interface Content {
  nav: {
    title: string;
    langButton: string;
    contactButton: string;
  };
  hero: {
    paragraphs: string[];
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
  };
  courses: {
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
  groupLessons: {
    title: string;
    description: string;
    price: string;
  };
  calligraphy: {
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
  footer: {
    instagram: string;
    text: string;
  };
}