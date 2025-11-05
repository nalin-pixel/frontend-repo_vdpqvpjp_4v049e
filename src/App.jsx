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
        "I’m Mohamed El Masnaoui, a Front-End Developer specializing in Angular, Vue.js, and React with a strong command of HTML, CSS, and JavaScript. I build modern, responsive, and user-focused web applications that combine clean design with high performance.\n\nI excel at translating complex requirements into intuitive, engaging interfaces — focusing on responsive layouts, smooth animations, and accessibility best practices. My approach blends technical precision with user-centric thinking, ensuring every project not only looks great but delivers measurable business value.\n\nCollaboration is at the core of my process. I work closely with designers, stakeholders, and fellow developers to align on goals, refine ideas, and deliver solutions that meet both user needs and strategic objectives.\n\nWhen I’m not working on client projects, I explore new technologies, experiment with personal builds, and stay ahead of front-end trends to bring fresh, innovative ideas to the table.\n\nIf you’re looking for a developer who combines technical expertise, design awareness, and a results-oriented mindset — let’s connect.",
    },
    skills: {
      title: 'Skills',
    },
    experience: {
      title: 'Experience',
      positions: [
        {
          title: 'Frontend Developer · Intalio',
          period: 'Jun 2022 – Present',
          bullets: [
            'Built and maintained a Vue 3 + Vite component library (BaseInput, BaseModal, BaseDropdown, etc.).',
            'Converted Figma/Adobe XD designs to responsive, production-ready components (Vue/Angular/jQuery).',
            'Integrated REST APIs and optimized data flow and UX across enterprise dashboards.',
          ],
        },
        {
          title: 'Frontend Developer · Bridgyfy',
          period: 'May 2021 – May 2022',
          bullets: [
            'Translated Sketch designs into pixel-perfect pages (HTML/CSS/JS).',
            'Built reusable React components and improved usability of pre-built pages.',
          ],
        },
        {
          title: 'Frontend Developer · Freelance',
          period: 'Oct 2021 – May 2022 / Nov 2018 – Apr 2021',
          bullets: [
            'Delivered 15+ client projects with strong focus on responsiveness and UX.',
            'Optimized existing websites for performance and engagement.',
          ],
        },
      ],
    },
    work: {
      title: 'Client Work & NDA Privacy',
      body:
        "Most of my work is under NDA or contains sensitive enterprise data, so I can't publish full project pages or screenshots. I'm happy to discuss architectures, component design, performance work, and my decision-making process in a live call, and I can prepare redacted demos upon request.",
      sections: [
        {
          heading: 'Architectures',
          items: [
            'Vue 3 + Vite, Angular, React; reusable Base components; API integration patterns.',
          ],
        },
        {
          heading: 'Performance',
          items: [
            'code-splitting, lazy routes, image optimization, hydration costs, bundle budgets.',
          ],
        },
        {
          heading: 'UX',
          items: [
            'accessibility, RTL/Arabic support, i18n at scale, grid layout editing, org charts.',
          ],
        },
      ],
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
        'Ich bin Mohamed El Masnaoui, Frontend-Entwickler mit Schwerpunkt auf Angular, Vue.js und React sowie fundierten Kenntnissen in HTML, CSS und JavaScript. Ich entwickle moderne, responsive und nutzerzentrierte Webanwendungen, die klares Design mit hoher Performance verbinden.\n\nIch übersetze komplexe Anforderungen in intuitive, ansprechende Interfaces – mit Fokus auf responsive Layouts, flüssige Animationen und Barrierefreiheit. Mein Ansatz verbindet technische Präzision mit Nutzerorientierung, damit Projekte nicht nur gut aussehen, sondern messbaren Geschäftswert liefern.\n\nZusammenarbeit steht im Mittelpunkt: Ich arbeite eng mit Designer:innen, Stakeholdern und Entwickler:innen, um Ziele abzustimmen, Ideen zu schärfen und Lösungen zu liefern, die Nutzerbedürfnisse und Strategie vereinen.\n\nNeben Kundenprojekten erkunde ich neue Technologien, experimentiere mit eigenen Builds und bleibe am Puls der Frontend-Trends, um frische Ideen einzubringen.\n\nWenn Sie einen Entwickler suchen, der technisches Know-how, Designbewusstsein und Ergebnisorientierung verbindet – lassen Sie uns sprechen.',
    },
    skills: {
      title: 'Fähigkeiten',
    },
    experience: {
      title: 'Erfahrung',
      positions: [
        {
          title: 'Frontend-Entwickler · Intalio',
          period: 'Jun 2022 – Heute',
          bullets: [
            'Vue 3 + Vite Komponentenbibliothek aufgebaut und gepflegt (BaseInput, BaseModal, BaseDropdown, etc.).',
            'Figma/Adobe XD in responsive, produktionsreife Komponenten umgesetzt (Vue/Angular/jQuery).',
            'REST-APIs integriert und Datenfluss sowie UX in Enterprise-Dashboards optimiert.',
          ],
        },
        {
          title: 'Frontend-Entwickler · Bridgyfy',
          period: 'Mai 2021 – Mai 2022',
          bullets: [
            'Sketch-Designs in pixelgenaue Seiten umgesetzt (HTML/CSS/JS).',
            'Wiederverwendbare React-Komponenten gebaut und Usability bestehender Seiten verbessert.',
          ],
        },
        {
          title: 'Frontend-Entwickler · Freiberuflich',
          period: 'Okt 2021 – Mai 2022 / Nov 2018 – Apr 2021',
          bullets: [
            '15+ Kundenprojekte mit Fokus auf Responsiveness und UX geliefert.',
            'Bestehende Websites für Performance und Engagement optimiert.',
          ],
        },
      ],
    },
    work: {
      title: 'Kundenarbeit & NDA',
      body:
        'Ein Großteil meiner Arbeit unterliegt NDAs oder enthält sensible Unternehmensdaten. Daher kann ich keine vollständigen Projektseiten oder Screenshots veröffentlichen. Gerne bespreche ich Architektur, Komponentendesign, Performance-Arbeit und meinen Entscheidungsprozess in einem Gespräch und kann auf Wunsch geschwärzte Demos vorbereiten.',
      sections: [
        {
          heading: 'Architekturen',
          items: [
            'Vue 3 + Vite, Angular, React; wiederverwendbare Base-Komponenten; API-Integrationsmuster.',
          ],
        },
        {
          heading: 'Performance',
          items: [
            'Code-Splitting, Lazy Routes, Bildoptimierung, Hydration-Kosten, Bundle-Budgets.',
          ],
        },
        {
          heading: 'UX',
          items: [
            'Barrierefreiheit, RTL/Arabisch, i18n in großem Maßstab, Grid-Layout-Editing, Orgschemata.',
          ],
        },
      ],
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
  phone: '', // update to show
  whatsapp: '', // update to show
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
