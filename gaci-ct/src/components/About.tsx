'use client';

import { useI18n } from '@/context/i18n';
import { useReveal } from '@/hooks/useReveal';

export default function About() {
  const { t } = useI18n();
  const { ref, visible } = useReveal();

  const features = [
    { icon: '👨‍🔧', text: t('about.feat1') },
    { icon: '⚙️', text: t('about.feat2') },
    { icon: '⏱️', text: t('about.feat3') },
    { icon: '🤝', text: t('about.feat4') },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-3 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 80% 50%, #0B3C5D 0%, transparent 60%)',
          }}
        />
      </div>
      <div
        className="absolute left-0 top-0 w-1 h-full opacity-20"
        style={{ background: 'linear-gradient(180deg, transparent, #28A745, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-16 items-center reveal ${visible ? 'visible' : ''}`}>
          {/* Left: visual panel */}
          <div className="relative">
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #0B3C5D 0%, #071f33 100%)',
                padding: '2px',
              }}
            >
              <div
                className="rounded-3xl p-10 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0d4a73 0%, #0B3C5D 100%)' }}
              >
                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px',
                  }}
                />

                {/* Central icon */}
                <div className="relative flex flex-col items-center text-center gap-8">
                  <div
                    className="w-24 h-24 rounded-2xl flex items-center justify-center text-5xl shadow-lg"
                    style={{ background: 'rgba(40,167,69,0.15)', border: '1px solid rgba(40,167,69,0.3)' }}
                  >
                    🛡️
                  </div>
                  <div>
                    <div className="font-display text-4xl font-900 text-white mb-1">GACI</div>
                    <div className="text-accent-500 font-semibold tracking-widest text-xs uppercase">
                      Contrôle Technique
                    </div>
                  </div>

                  {/* Key metrics */}
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {[
                      { num: '6', label: 'Jours / sem' },
                      { num: '1h', label: 'Max par visite' },
                      { num: '100%', label: 'Agréé officiel' },
                      { num: '0', label: 'Rdv nécessaire' },
                    ].map((m, i) => (
                      <div
                        key={i}
                        className="rounded-xl p-4 text-center"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                      >
                        <div className="font-display font-800 text-2xl text-white">{m.num}</div>
                        <div className="text-white/50 text-xs mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: 'linear-gradient(90deg, transparent, #28A745, transparent)' }}
                />
              </div>
            </div>

            {/* Floating tag */}
            <div
              className="absolute -top-5 -right-5 bg-accent-500 text-white rounded-2xl p-4 shadow-btn"
            >
              <div className="text-2xl">✅</div>
              <div className="text-xs font-bold mt-1 whitespace-nowrap">Centre Agréé</div>
            </div>
          </div>

          {/* Right: text */}
          <div className="space-y-7">
            <div>
              <span className="badge">{t('about.badge')}</span>
              <div className="mt-2 deco-line" />
            </div>

            <h2 className="font-display text-4xl lg:text-5xl font-black text-navy-900 leading-tight">
              {t('about.title')}
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              {t('about.description')}
            </p>
            <p className="text-gray-500 leading-relaxed">
              {t('about.description2')}
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-navy-50 transition-colors border border-transparent hover:border-navy-100 card-hover"
                >
                  <span className="text-2xl flex-shrink-0">{f.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{f.text}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary inline-flex mt-2">
              {t('hero.cta')}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
