import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    resources: {
      ru: {
        translation: {
          nav: {
            about: 'Суть',
            projects: 'Приключения',
            team: 'Люди',
            contacts: 'Связь',
          },
          hero: {
            title: 'Управляющая компания 2У8Д: Как всё устроено',
            subtitle:
              'Мы не просто управляем капиталом. Мы с детским любопытством ищем фундаментальную истину в каждом проекте, отсекая бутафорию и фейк.',
            cta: 'Что мы уже нашли',
          },
          about: {
            mission: 'Ради чего всё это',
            missionText:
              'Мы верим: когда внешняя реальность соответствует внутренним ценностям, возникает истинное счастье и приток энергии. Наша задача — строить проекты, которые не противоречат человеческой природе.',
            values: 'Внутренний компас',
            // Новые формулировки в стиле Фейнмана
            value1: 'Отказ от удобных иллюзий',
            desc1:
              'Мы не дурачим самих себя. Истина важнее красивых отчетов и привычных бизнес-моделей.',
            value2: 'Интеллектуальная гигиена',
            desc2: 'Постоянная очистка смыслов от наслоений маркетинга, бюрократии и чужих мнений.',
            value3: 'Азарт нерешенных задач',
            desc3:
              'Нас драйвит сложность. Мы превращаем неопределенность в удовольствие от поиска ответов.',
          },
        },
      },
      en: {
        translation: {
          nav: {
            about: 'The Essence',
            projects: 'Adventures',
            team: 'People',
            contacts: 'Contact',
          },
          hero: {
            title: '2U8D Management Company: How it works',
            subtitle:
              'We don’t just manage capital. We explore projects with childlike curiosity, seeking fundamental truth and cutting through the fake.',
            cta: 'Our Findings',
          },
          about: {
            mission: 'The Point of It All',
            missionText:
              'We believe that when external reality matches internal values, true happiness and energy flow. We build projects that align with human nature.',
            values: 'Internal Compass',
            // Feynman style in English
            value1: 'Rejecting Convenient Illusions',
            desc1:
              'The first principle is not to fool yourself. Truth precedes any business model.',
            value2: 'Intellectual Hygiene',
            desc2: 'Stripping away the layers of marketing fluff, bureaucracy, and legacy thinking.',
            value3: 'The Thrill of Unsolved Problems',
            desc3:
              'Complexity is our fuel. We embrace uncertainty as the ultimate source of discovery.',
          },
        },
      },
      he: {
        translation: {
          nav: {
            about: 'מהות',
            projects: 'הרפתקאות',
            team: 'אנשים',
            contacts: 'קשר',
          },
          hero: {
            title: 'חברת ניהול 2U8D: איך הכל עובד',
            subtitle:
              'אנחנו לא רק מנהלים הון. בסקרנות של ילדים, אנחנו מחפשים את האמת היסודית בכל פרויקט, מסירים זיופים ובדיות.',
            cta: 'מה שכבר מצאנו',
          },
          about: {
            mission: 'הטעם להכל',
            missionText:
              'אנו מאמינים שכאשר המציאות החיצונית תואמת את הערכים הפנימיים, נוצר אושר אמיתי וזרימה של אנרגיה. המשימה שלנו היא לבנות פרויקטים שאינם סותרים את טבע האדם.',
            values: 'מצפן פנימי',
            // Hebrew adaptation
            value1: 'ויתור על אשליות נוחות',
            desc1: 'אנחנו לא מרמים את עצמנו. האמת חשובה יותר ממודלים עסקיים מוכרים.',
            value2: 'היגיינה אינטלקטואלית',
            desc2: 'ניקוי מתמיד של משמעויות משכבות של שיווק, בירוקרטיה ודעות קדומות.',
            value3: 'הריגוש שבבעיות לא פתורות',
            desc3: 'מורכבות היא המנוע שלנו. אנחנו הופכים אי-ודאות להנאה שבחיפוש תשובות.',
          },
        },
      },
    },
  });

export default i18n;