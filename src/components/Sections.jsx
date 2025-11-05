export default function Sections({ t, data }) {
  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* About */}
      <section id="about" className="py-12 sm:py-16 border-b border-neutral-900">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">{t('about.title')}</h2>
        <p className="mt-4 max-w-3xl text-neutral-300 leading-relaxed">
          {t('about.body')}
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="py-12 sm:py-16 border-b border-neutral-900">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">{t('skills.title')}</h2>
        <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {data.skills.map((s) => (
            <li key={s} className="rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm text-neutral-200">
              {s}
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section id="experience" className="py-12 sm:py-16 border-b border-neutral-900">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">{t('experience.title')}</h2>
        <p className="mt-4 max-w-3xl text-neutral-300 leading-relaxed">{t('experience.body')}</p>
        <ul className="mt-6 space-y-2 list-disc list-inside text-neutral-300">
          {t('experience.highlights').map((h, idx) => (
            <li key={idx}>{h}</li>
          ))}
        </ul>
      </section>

      {/* Client Work & NDA */}
      <section id="work" className="py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">{t('work.title')}</h2>
        <p className="mt-4 max-w-3xl text-neutral-300 leading-relaxed">{t('work.body')}</p>
      </section>
    </div>
  );
}
