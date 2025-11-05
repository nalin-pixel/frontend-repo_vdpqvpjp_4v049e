import { useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero({ t, data }) {
  const [loading, setLoading] = useState(true);

  return (
    <section id="top" className="relative">
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
        {/* Interactive 3D background (Spline) */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
            onLoad={() => setLoading(false)}
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Lightweight loader overlay until scene fully loads */}
        {loading && (
          <div className="absolute inset-0 grid place-items-center bg-neutral-950/50">
            <div className="flex items-center gap-3 rounded-md border border-neutral-800 bg-neutral-900/80 px-4 py-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-neutral-400 border-t-transparent" />
              <span className="text-xs text-neutral-300">Loading…</span>
            </div>
          </div>
        )}

        {/* Subtle gradient for text legibility (non-blocking) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

        {/* Foreground Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-6xl px-4 pb-8 sm:pb-12">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              <span className="text-neutral-300">{t('hero.greeting')}</span>{' '}
              <span className="text-white">{data.name}</span>
            </h1>
            <p className="mt-3 text-neutral-300 text-sm sm:text-base">
              {t('hero.role')} · {t('hero.location') || data.location}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-200"
              >
                {t('hero.cta_contact')}
              </a>
              <a
                href={data.cv}
                className="inline-flex items-center justify-center rounded-md border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
                target="_blank" rel="noreferrer"
              >
                {t('hero.cta_cv')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
