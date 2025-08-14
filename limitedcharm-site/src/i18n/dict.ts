import type { Lang } from './config';

export type SectionDict = {
  nav: { home: string; products: string; about: string; faq: string; contact: string; legal: string };
  hero: { title: string; subtitle: string; cta: string };
  about: { heading: string; benefits: string[] };
  stats: { years: string; orders: string; satisfaction: string };
  faq: { heading: string; items?: { question: string; answer: string }[] };
  contact: { heading: string; address: string; phone: string; email: string };
  legal: { privacy: string; terms: string; shipping: string; disclaimer: string; complaint: string };
};

export const dictionaries: Record<Lang, SectionDict> = {
  mk: {
    nav: { home: 'Почетна', products: 'Производи', about: 'За нас', faq: 'ЧПП', contact: 'Контакт', legal: 'Правни' },
    hero: {
      title: 'Природни додатоци и креми',
      subtitle: 'Подобрете го вашето здравје со нашите додатоци во исхраната и природни креми.',
      cta: 'Наши производи'
    },
    about: {
      heading: 'За нас',
      benefits: ['Транспарентност', 'Природни состојки', 'Сертифицирани и анализирани', 'Плаќање при достава']
    },
    stats: { years: 'Години на пазарот', orders: 'Извршени нарачки', satisfaction: 'Задоволство на клиенти' },
    faq: { heading: 'ЧПП' },
    contact: {
      heading: 'Контакт',
      address: '123 Main St, City',
      phone: '+1 234 567 890',
      email: 'info@example.com'
    },
    legal: { privacy: 'Приватност', terms: 'Услови', shipping: 'Испорака', disclaimer: 'Одговорност', complaint: 'Претставка' }
  },
  en: {
    nav: { home: 'Home', products: 'Products', about: 'About', faq: 'FAQ', contact: 'Contact', legal: 'Legal' },
    hero: {
      title: 'Natural Supplements & Creams',
      subtitle: 'Enhance your wellbeing with our dietary supplements and natural creams crafted from quality ingredients.',
      cta: 'Our Products'
    },
    about: {
      heading: 'About Us',
      benefits: ['Transparency', 'Natural ingredients', 'Certified & analyzed', 'Cash on delivery']
    },
    stats: { years: 'Years on market', orders: 'Orders processed', satisfaction: 'Customer satisfaction' },
    faq: { heading: 'FAQ' },
    contact: {
      heading: 'Contact',
      address: '123 Main St, City',
      phone: '+1 234 567 890',
      email: 'info@example.com'
    },
    legal: { privacy: 'Privacy', terms: 'Terms', shipping: 'Shipping', disclaimer: 'Disclaimer', complaint: 'Complaint' }
  },
  sq: {
    nav: { home: 'Ballina', products: 'Produkte', about: 'Rreth nesh', faq: 'FAQ', contact: 'Kontakt', legal: 'Ligjore' },
    hero: {
      title: 'Suplementet dhe Kremrat Natyral',
      subtitle: 'Përmirësoni mirëqenien me suplementet ushqimore dhe kremrat natyral të përzgjedhur me kujdes.',
      cta: 'Produktet tona'
    },
    about: {
      heading: 'Rreth Nesh',
      benefits: ['Transparencë', 'Përbërës natyral', 'Të certifikuara dhe të analizuara', 'Pagesë në dorëzim']
    },
    stats: { years: 'Vite në treg', orders: 'Porosi të kryera', satisfaction: 'Kënaqësi e klientëve' },
    faq: { heading: 'FAQ' },
    contact: {
      heading: 'Kontakt',
      address: '123 Main St, City',
      phone: '+1 234 567 890',
      email: 'info@example.com'
    },
    legal: { privacy: 'Privatësia', terms: 'Kushtet', shipping: 'Dërgesa', disclaimer: 'Përgënjeshtrim', complaint: 'Ankesë' }
  }
};

export function getDictionary(lang: Lang): SectionDict {
  return dictionaries[lang];
}