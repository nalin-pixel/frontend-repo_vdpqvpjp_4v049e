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
      education: 'Education',
      certifications: 'Certifications',
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
      categories: [
        {
          heading: 'Frontend Technologies',
          items: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript'],
        },
        {
          heading: 'Frameworks & Libraries',
          items: ['Vue.js (Vue 3 + Vite)', 'React.js', 'Angular', 'jQuery', 'UIkit', 'Bootstrap', 'Material Design Components'],
        },
        {
          heading: 'State & APIs',
          items: ['REST API integration', 'Vuex/Pinia', 'Third-party services'],
        },
        {
          heading: 'Version Control',
          items: ['Git', 'GitHub', 'GitLab'],
        },
        {
          heading: 'Other Skills',
          items: ['Responsive design', 'Cross-browser compatibility', 'Debugging', 'Performance optimization', 'UI/UX principles'],
        },
        {
          heading: 'Tools & Methodologies',
          items: ['JIRA', 'Trello', 'Agile/Scrum'],
        },
      ],
    },
    experience: {
      title: 'Experience',
      positions: [
        {
          title: 'Frontend Developer · Intalio',
          period: 'Jun 2022 – Present',
          bullets: [
            'Built and maintained a Vue 3 + Vite component library (BaseInput, BaseModal, BaseDropdown, etc.), used across enterprise apps.',
            'Converted Figma/Adobe XD designs into responsive, production-ready Vue, Angular, and jQuery components.',
            'Improved usability by resolving client-reported issues and optimizing workflows.',
            'Integrated REST APIs and optimized data flow between backend and frontend.',
            'Collaborated closely with designers, backend teams, and stakeholders to align deliverables with business goals.',
          ],
        },
        {
          title: 'Frontend Developer · Bridgyfy',
          period: 'May 2021 – May 2022',
          bullets: [
            'Translated design files (Sketch) into pixel-perfect responsive web pages using HTML, CSS, and JavaScript.',
            'Built reusable React components to streamline the development process.',
            'Integrated UIkit and Material Design into projects, enhancing visual appeal.',
            'Delivered high-quality websites for clients, ensuring functionality and user engagement.',
          ],
        },
        {
          title: 'Freelance Frontend Developer · Fiverr',
          period: 'Oct 2021 – May 2022',
          bullets: [
            'Converted Adobe XD and Figma designs into responsive web pages.',
            'Resolved client-reported issues with pre-built pages, improving usability by 20%.',
            'Maintained active communication with clients to align deliverables with business goals.',
          ],
        },
        {
          title: 'Freelance Frontend Developer',
          period: 'Nov 2018 – Apr 2021',
          bullets: [
            'Delivered 15+ client projects with a focus on responsive web design and seamless functionality.',
            'Provided continuous technical support, ensuring client satisfaction and project success.',
            'Optimized pre-existing websites for better performance and user engagement.',
          ],
        },
      ],
    },
    education: {
      title: 'Education',
      entries: [
        {
          qualification: 'Technician Specialist in IT Support & Networks (incomplete)',
          institution: 'OFPPT – Office of Professional Training and Work Promotion',
          period: 'Sep 2018 – Jul 2020',
          notes: '2 years of study, coursework completed, diploma not obtained',
        },
      ],
    },
    certifications: {
      title: 'Certifications',
      download: 'Download',
      entries: [
        {
          name: 'Front-End Web Development Certificate – ALX',
          date: 'Oct 2024',
          image: '/assets/certificates/alx_frontend_certificate.jpg',
          file: '/assets/certificates/alx_frontend_certificate.jpg',
        },
        {
          name: 'Professional Foundations Certificate – ALX',
          date: 'Aug 2024',
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
            'Code-splitting, lazy routes, image optimization, hydration costs, bundle budgets.',
          ],
        },
        {
          heading: 'UX',
          items: [
            'Accessibility, RTL/Arabic support, i18n at scale, grid layout editing, org charts.',
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
      education: 'Ausbildung',
      certifications: 'Zertifikate',
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
      categories: [
        { heading: 'Frontend-Technologien', items: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript'] },
        { heading: 'Frameworks & Bibliotheken', items: ['Vue.js (Vue 3 + Vite)', 'React.js', 'Angular', 'jQuery', 'UIkit', 'Bootstrap', 'Material Design Komponenten'] },
        { heading: 'State & APIs', items: ['REST-API-Integration', 'Vuex/Pinia', 'Drittanbieter-Services'] },
        { heading: 'Versionskontrolle', items: ['Git', 'GitHub', 'GitLab'] },
        { heading: 'Weitere Fähigkeiten', items: ['Responsives Design', 'Cross-Browser-Kompatibilität', 'Debugging', 'Performance-Optimierung', 'UI/UX-Grundlagen'] },
        { heading: 'Tools & Methodik', items: ['JIRA', 'Trello', 'Agile/Scrum'] },
      ],
    },
    experience: {
      title: 'Erfahrung',
      positions: [
        {
          title: 'Frontend-Entwickler · Intalio',
          period: 'Jun 2022 – Heute',
          bullets: [
            'Aufbau und Pflege einer Vue 3 + Vite Komponentenbibliothek (BaseInput, BaseModal, BaseDropdown, etc.) für Enterprise-Apps.',
            'Figma/Adobe XD in responsive, produktionsreife Komponenten in Vue, Angular und jQuery umgesetzt.',
            'Usability verbessert durch die Behebung gemeldeter Kundenprobleme und Optimierung von Workflows.',
            'REST-APIs integriert und den Datenfluss zwischen Backend und Frontend optimiert.',
            'Enge Zusammenarbeit mit Design, Backend und Stakeholdern zur Abstimmung auf Geschäftsziele.',
          ],
        },
        {
          title: 'Frontend-Entwickler · Bridgyfy',
          period: 'Mai 2021 – Mai 2022',
          bullets: [
            'Design-Dateien (Sketch) in pixelgenaue, responsive Seiten mit HTML, CSS und JavaScript umgesetzt.',
            'Wiederverwendbare React-Komponenten entwickelt, um den Entwicklungsprozess zu beschleunigen.',
            'UIkit und Material Design integriert, um das visuelle Erscheinungsbild zu verbessern.',
            'Hochwertige Webseiten geliefert – mit Fokus auf Funktionalität und Nutzerbindung.',
          ],
        },
        {
          title: 'Freelance Frontend-Entwickler · Fiverr',
          period: 'Okt 2021 – Mai 2022',
          bullets: [
            'Adobe XD und Figma Designs in responsive Webseiten umgesetzt.',
            'Client-Issues in bestehenden Seiten behoben und die Nutzbarkeit um 20% verbessert.',
            'Aktive Kommunikation mit Kunden zur Abstimmung auf Geschäftsziele.',
          ],
        },
        {
          title: 'Freelance Frontend-Entwickler',
          period: 'Nov 2018 – Apr 2021',
          bullets: [
            '15+ Kundenprojekte geliefert mit Fokus auf responsives Webdesign und reibungslose Funktionalität.',
            'Kontinuierlicher technischer Support zur Sicherstellung der Kundenzufriedenheit.',
            'Bestehende Websites für bessere Performance und User Engagement optimiert.',
          ],
        },
      ],
    },
    education: {
      title: 'Ausbildung',
      entries: [
        {
          qualification: 'Techniker für IT-Support & Netzwerke (unvollständig)',
          institution: 'OFPPT – Amt für Berufsausbildung und Arbeitsförderung',
          period: 'Sep 2018 – Jul 2020',
          notes: '2 Jahre Studium, Kurse abgeschlossen, Diplom nicht erhalten',
        },
      ],
    },
    certifications: {
      title: 'Zertifikate',
      download: 'Herunterladen',
      entries: [
        {
          name: 'Front-End Web Development Certificate – ALX',
          date: 'Okt 2024',
          image: '/assets/certificates/alx_frontend_certificate.jpg',
          file: '/assets/certificates/alx_frontend_certificate.jpg',
        },
        {
          name: 'Professional Foundations Certificate – ALX',
          date: 'Aug 2024',
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
  cv: '/assets/Mohamed_El_Masnaoui_CV.pdf',
  email: 'elmasnaouimohamed97@gmail.com',
  phone: '+212651771053',
  whatsapp: '+212651771053',
  linkedin: 'https://linkedin.com/in/el-masnaoui-med',
  fiverr: 'https://rb.gy/48fwgp',
  portfolio: 'https://mo-elmasnaoui.netlify.app',
  // Hero image used for the banner (can be replaced with the exact first image you want)
  heroImage: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=2070&auto=format&fit=crop',
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
