export default function Sections({ t }) {
  const aboutText = t('about.body');
  const positions = t('experience.positions') || [];
  const workSections = t('work.sections') || [];
  const skillsCategories = t('skills.categories') || [];
  const education = t('education.entries') || [];
  const certifications = t('certifications.entries') || [];

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
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillsCategories.map((cat, idx) => (
            <div key={idx} className="rounded-lg border border-neutral-900 bg-neutral-950/60 p-4">
              <h3 className="text-sm font-semibold text-white">{cat.heading}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {(cat.items || []).map((s) => (
                  <li key={s} className="rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-200">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
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
                {(p.bullets || []).map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-12 sm:py-16 border-b border-neutral-900">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">{t('education.title')}</h2>
        <div className="mt-6 space-y-6">
          {education.map((e, idx) => (
            <div key={idx} className="rounded-lg border border-neutral-900 bg-neutral-950/60 p-4">
              <h3 className="text-sm sm:text-base font-semibold text-white">{e.qualification}</h3>
              <div className="mt-1 text-xs sm:text-sm text-neutral-400">{e.institution} · {e.period}</div>
              {e.notes && <p className="mt-2 text-sm text-neutral-300">{e.notes}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-12 sm:py-16 border-b border-neutral-900">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">{t('certifications.title')}</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((c, idx) => (
            <div key={idx} className="rounded-lg border border-neutral-900 bg-neutral-950/60 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-white">{c.name}</h3>
                  {c.date && <div className="text-xs sm:text-sm text-neutral-400 mt-1">{c.date}</div>}
                </div>
                {c.file && (
                  <a
                    href={c.file}
                    download
                    className="inline-flex items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs text-neutral-100 hover:bg-neutral-800"
                  >
                    {t('certifications.download')}
                  </a>
                )}
              </div>
              {c.image && (
                <div className="mt-4 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900/40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.image} alt={c.name} className="w-full h-auto object-contain" />
                </div>
              )}
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
                {(ws.items || []).map((it, i) => (
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
