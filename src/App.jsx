import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Sections from './components/Sections.jsx';
import Contact from './components/Contact.jsx';

// Simple i18n dictionary (EN/DE)
const DICT = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      work: 'Client Work',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hi, I am',
      role: 'Frontend Developer',
      location: 'Based in Marrakech, Morocco',
      cta_contact: 'Contact Me',
      cta_cv: 'Download CV',
    },
    about: {
      title: 'About',
      body:
        "I craft fast, accessible, and resilient user interfaces. I specialize in modern frameworks and clean, scalable architectures that prioritize performance and maintainability.",
    },
    skills: {
      title: 'Skills',
    },
    experience: {
      title: 'Experience',
      body:
        'I have contributed to enterprise-grade web apps across dashboards, internal tooling, and marketing sites. I focus on performance, DX, and strong UI engineering practices.',
      highlights: [
        'Built and optimized complex SPA dashboards',
        'Implemented design systems and component libraries',
        'Shipped responsive, accessible UIs with outstanding performance',
      ],
    },
    work: {
      title: 'Client Work & NDA Privacy',
      body:
        'Most of my professional work is protected by NDAs and involves sensitive enterprise data. To respect client confidentiality, I cannot publicly share case studies or source code. I am happy to discuss my approach, responsibilities, and outcomes in a call.',
    },
    contact: {
      title: 'Contact',
      email: 'Email',
      phone: 'Call',
      whatsapp: 'WhatsApp',
      copy: 'Copy email',
      copied: 'Copied!'
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
  de: {
    nav: {
      about: 'Über mich',
      skills: 'Fähigkeiten',
      experience: 'Erfahrung',
      work: 'Kundenarbeit',
      contact: 'Kontakt',
    },
    hero: {
      greeting: 'Hallo, ich bin',
      role: 'Frontend-Entwickler',
      location: 'Mit Sitz in Marrakesch, Marokko',
      cta_contact: 'Kontakt aufnehmen',
      cta_cv: 'Lebenslauf herunterladen',
    },
    about: {
      title: 'Über mich',
      body:
        'Ich entwickle schnelle, zugängliche und robuste Benutzeroberflächen. Ich spezialisiere mich auf moderne Frameworks und saubere, skalierbare Architekturen mit Fokus auf Performance und Wartbarkeit.',
    },
    skills: {
      title: 'Fähigkeiten',
    },
    experience: {
      title: 'Erfahrung',
      body:
        'Ich habe zu unternehmensweiten Webanwendungen beigetragen: Dashboards, interne Tools und Marketingseiten. Mein Fokus liegt auf Performance, Developer Experience und solider UI-Engineering-Praxis.',
      highlights: [
        'Komplexe SPA-Dashboards entwickelt und optimiert',
        'Designsysteme und Komponentenbibliotheken implementiert',
        'Responsives, zugängliches UI mit hervorragender Performance geliefert',
      ],
    },
    work: {
      title: 'Kundenarbeit & NDA',
      body:
        'Ein Großteil meiner Arbeit unterliegt Geheimhaltungsvereinbarungen und sensiblen Unternehmensdaten. Aus Respekt vor der Vertraulichkeit kann ich keine Fallstudien oder Quellcodes öffentlich teilen. Gerne bespreche ich Vorgehen, Verantwortung und Ergebnisse in einem Gespräch.',
    },
    contact: {
      title: 'Kontakt',
      email: 'E-Mail',
      phone: 'Anrufen',
      whatsapp: 'WhatsApp',
      copy: 'E-Mail kopieren',
      copied: 'Kopiert!'
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
    },
  },
};

const DATA = {
  name: 'Mohamed El Masnaoui',
  role: 'Frontend Developer',
  location: 'Marrakech, Morocco',
  skills: [
    'Vue 3 + Vite',
    'Angular',
    'React',
    'TypeScript',
    'Pinia/Vuex',
    'REST APIs',
    'Responsive Design',
    'Performance Optimization',
    'Git',
  ],
  cv: '/assets/Mohamed_El_Masnaoui_CV.pdf',
  email: 'elmasnaouimohamed97@gmail.com',
  phone: '', // leave empty to hide
  whatsapp: '', // leave empty to hide
  linkedin: 'https://linkedin.com/in/el-masnaoui-med',
  fiverr: 'https://rb.gy/48fwgp',
  portfolio: 'https://mo-elmasnaoui.netlify.app',
};

export default function App() {
  const [lang, setLang] = useState('en');
  const dict = useMemo(() => DICT[lang] ?? DICT.en, [lang]);

  useEffect(() => {
    const l = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    if (l.startsWith('de')) setLang('de');
  }, []);

  const t = (path) => {
    const parts = path.split('.');
    return parts.reduce((acc, key) => (acc && acc[key] != null ? acc[key] : ''), dict);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <Navbar t={t} lang={lang} onLangChange={setLang} name={DATA.name} />
      <main>
        <Hero t={t} data={DATA} />
        <Sections t={t} data={DATA} />
        <Contact t={t} data={DATA} />
      </main>
    </div>
  );
}
