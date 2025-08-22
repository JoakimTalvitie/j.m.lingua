import { Language, Content } from '../types';

export const content: Record<Language, Content> = {
  [Language.EN]: {
    nav: {
      title: "J.M. lingua",
      langButton: "Svenska",
      contactButton: "Contact"
    },
    hero: {
      paragraphs: [
        "Ready to try something new? Dive into Japanese or Classical Chinese with a dedicated and experienced teacher by your side. From your first word to deeper understanding – I’ll support you every step of the way. Book a lesson and get started today!"
      ]
    },
    about: {
      title: "About Me",
      p1: "I hold a Master's degree in Asian Languages and Cultures from Stockholm University. My academic journey has provided me with a deep understanding of the linguistic and cultural nuances of East Asia.",
      p2: "With three years of experience teaching Japanese, I have developed effective methods to help students achieve fluency. As an experienced language learner myself—having studied Mandarin, Cantonese, and Korean to varying levels, and currently learning Vietnamese—I understand the challenges and joys of mastering a new language and can guide you on your path.",
      p3: "My passion is to share the beauty of these languages and cultures with you."
    },
    courses: {
      title: "Courses",
      japanese: {
        title: "Japanese Lessons",
        description: "Personalized lessons for all levels, from beginners to advanced. Focus on conversation, grammar, and cultural context."
      },
      classicalChinese: {
        title: "Classical Chinese",
        description: "Explore the foundational texts of East Asian philosophy and literature. Learn to read and interpret ancient wisdom."
      },
      etymology: {
        title: "Chinese Character Etymology",
        description: "Delve into the fascinating history and evolution of Chinese characters. Understand their origins, structure, and meaning."
      },
      price: "1800 SEK / 4 lessons per month"
    },
    groupLessons: {
      title: "Group Lessons",
      description: "Join a small group of motivated learners. These courses follow a structured curriculum over 12 weeks, perfect for building a strong foundation in a collaborative environment.",
      price: "3600 SEK / 12 lessons"
    },
    calligraphy: {
      title: "Calligraphy",
      artwork: {
        title: "Custom Artwork",
        description: "Order a custom piece of Chinese calligraphy. Perfect for a unique gift or personal decoration. Any character or phrase is possible.",
        price: "From 400 SEK / character"
      },
      lessons: {
        title: "Calligraphy Lessons",
        description: "Learn the art of Chinese calligraphy in a structured 10-week course. From basic strokes to creating your own artwork, all materials are included.",
        price: "2000 SEK / 10 lessons"
      }
    },
    footer: {
      instagram: "View my calligraphy on Instagram",
      text: "© 2025 J.M. lingua. All Rights Reserved."
    }
  },
  [Language.SV]: {
    nav: {
      title: "J.M. lingua",
      langButton: "English",
      contactButton: "Kontakt"
    },
    hero: {
      paragraphs: [
        "Redo att prova något nytt? Dyk in i japanska eller klassisk kinesiska med en dedikerad och erfaren lärare vid din sida. Från ditt första ord till djupare förståelse – jag stöttar dig varje steg på vägen. Boka en lektion och kom igång idag!"
      ]
    },
    about: {
      title: "Om Mig",
      p1: "Jag har en magisterexamen i Asiens språk och kulturer från Stockholms universitet. Min akademiska resa har gett mig en djup förståelse för de språkliga och kulturella nyanserna i Östasien.",
      p2: "Med tre års erfarenhet av att undervisa i japanska har jag utvecklat effektiva metoder för att hjälpa elever att uppnå flytande kunskaper. Som en erfaren språkinlärare själv, med kunskaper i mandarin, kantonesiska och koreanska på olika nivåer, och lär mig för närvarande vietnamesiska, förstår jag utmaningarna och glädjen i att bemästra ett nytt språk och kan vägleda dig på din väg.",
      p3: "Min passion är att dela med mig av skönheten i dessa språk och kulturer."
    },
    courses: {
      title: "Kurser",
      japanese: {
        title: "Japanska Lektioner",
        description: "Personliga lektioner för alla nivåer, från nybörjare till avancerade. Fokus på konversation, grammatik och kulturell kontext."
      },
      classicalChinese: {
        title: "Klassisk Kinesiska",
        description: "Utforska de grundläggande texterna i östasiatisk filosofi och litteratur. Lär dig att läsa och tolka uråldrig visdom."
      },
      etymology: {
        title: "Kinesisk Teckenetymologi",
        description: "Dyk in i den fascinerande historien och utvecklingen av kinesiska tecken. Förstå deras ursprung, struktur och betydelse."
      },
      price: "1800 kr / 4 lektioner per månad"
    },
    groupLessons: {
      title: "Grupplektioner",
      description: "Gå med i en liten grupp av motiverade elever. Dessa kurser följer en strukturerad läroplan över 12 veckor, perfekt för att bygga en stark grund i en samarbetsinriktad miljö.",
      price: "3600 kr / 12 lektioner"
    },
    calligraphy: {
      title: "Kalligrafi",
      artwork: {
        title: "Anpassat Konstverk",
        description: "Beställ ett anpassat kinesiskt kalligrafiverk. Perfekt som en unik gåva eller personlig dekoration. Vilket tecken eller fras som helst är möjlig.",
        price: "Från 400 kr / tecken"
      },
      lessons: {
        title: "Kalligrafilektioner",
        description: "Lär dig konsten att kinesisk kalligrafi i en strukturerad 10-veckors kurs. Från grundläggande penseldrag till att skapa ditt eget konstverk, material ingår.",
        price: "2000 kr / 10 lektioner"
      }
    },
    footer: {
      instagram: "Se min kalligrafi på Instagram",
      text: "© 2025 J.M. lingua. Alla rättigheter förbehållna."
    }
  }
};