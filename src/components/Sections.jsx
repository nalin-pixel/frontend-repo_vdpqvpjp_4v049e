export default function Sections({ t }) {
  const aboutText = t('about.body');
  const positions = t('experience.positions') || [];
  const workSections = t('work.sections') || [];

  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* About */}
      <section id="about" className="py-12 sm:py-16 border-b border-neutral-900">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">{t('about.title')}</h2>
        <div className="mt-4 max-w-3xl text-neutral-300 leading-relaxed whitespace-pre-line">
          {aboutText}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-12 sm:py-16 border-b border-neutral-900">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">{t('skills.title')}</h2>
        <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {(
            [
              'Vue 3 + Vite',
              'Angular',
              'React',
              'TypeScript',
              'Pinia/Vuex',
              'REST APIs',
              'Responsive Design',
              'Performance Optimization',
              'Git',
            ]
          ).map((s) => (
            <li key={s} className="rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm text-neutral-200">
              {s}
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section id="experience" className="py-12 sm:py-16 border-b border-neutral-900">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">{t('experience.title')}</h2>
        <div className="mt-6 space-y-8">
          {positions.map((p, idx) => (
            <div key={idx} className="rounded-lg border border-neutral-900 bg-neutral-950/60 p-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-base sm:text-lg font-medium text-white">{p.title}</h3>
                <span className="text-xs sm:text-sm text-neutral-400">{p.period}</span>
              </div>
              <ul className="mt-3 space-y-2 list-disc list-inside text-neutral-300 text-sm">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Client Work & NDA */}
      <section id="work" className="py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">{t('work.title')}</h2>
        <p className="mt-4 max-w-3xl text-neutral-300 leading-relaxed">{t('work.body')}</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {workSections.map((ws, idx) => (
            <div key={idx} className="rounded-lg border border-neutral-900 bg-neutral-950/60 p-4">
              <h3 className="text-sm font-semibold text-white">{ws.heading}</h3>
              <ul className="mt-3 space-y-2 text-neutral-300 text-sm list-disc list-inside">
                {ws.items.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
