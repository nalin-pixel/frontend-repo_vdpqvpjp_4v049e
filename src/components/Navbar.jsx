import { Globe } from 'lucide-react';

export default function Navbar({ t, lang, onLangChange, name }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight text-neutral-100">
          {name}
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-300">
          <a className="hover:text-white" href="#about">{t('nav.about')}</a>
          <a className="hover:text-white" href="#skills">{t('nav.skills')}</a>
          <a className="hover:text-white" href="#experience">{t('nav.experience')}</a>
          <a className="hover:text-white" href="#education">{t('nav.education')}</a>
          <a className="hover:text-white" href="#certifications">{t('nav.certifications')}</a>
          <a className="hover:text-white" href="#work">{t('nav.work')}</a>
          <a className="hover:text-white" href="#contact">{t('nav.contact')}</a>
        </nav>
        <button
          aria-label="Language"
          onClick={() => onLangChange(lang === 'en' ? 'de' : 'en')}
          className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs text-neutral-300 hover:bg-neutral-800"
        >
          <Globe size={16} /> {lang.toUpperCase()}
        </button>
      </div>
    </header>
  );
}
