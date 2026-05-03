'use client';

import { useI18n } from '@/context/i18n';
import { useReveal } from '@/hooks/useReveal';

export default function Services() {
  const { t } = useI18n();
  const { ref, visible } = useReveal();

  const services = [
    {
      icon: '🚗',
      emoji_bg: '#E8F5E9',
      title: t('services.s1Title'),
      desc: t('services.s1Desc'),
      highlight: true,
    },
    {
      icon: '🔧',
      emoji_bg: '#E3F2FD',
      title: t('services.s2Title'),
      desc: t('services.s2Desc'),
      highlight: false,
    },
    {
      icon: '✅',
      emoji_bg: '#E8F5E9',
      title: t('services.s3Title'),
      desc: t('services.s3Desc'),
      highlight: false,
    },
    {
      icon: '📋',
      emoji_bg: '#FFF3E0',
      title: t('services.s4Title'),
      desc: t('services.s4Desc'),
      highlight: false,
    },
  ];

  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)' }}
    >
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden" style={{ height: '60px' }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,0 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,0 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Decorative circles */}
      <div
        className="absolute -left-32 top-1/2 w-64 h-64 rounded-full opacity-5 pointer-events-none"
        style={{ background: '#28A745', filter: 'blur(40px)' }}
      />
      <div
        className="absolute -right-32 bottom-1/4 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: '#0B3C5D', filter: 'blur(60px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 reveal ${visible ? 'visible' : ''}`}>
          <span className="badge">{t('services.badge')}</span>
          <div className="flex justify-center mt-2 mb-5">
            <span className="deco-line" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-navy-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Cards grid */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal ${visible ? 'visible' : ''}`}>
          {services.map((s, i) => (
            <div
              key={i}
              className={`relative group rounded-2xl p-7 transition-all duration-300 card-hover cursor-default ${
                s.highlight
                  ? 'bg-navy-900 text-white shadow-card-hover'
                  : 'bg-white text-gray-800 shadow-card'
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Highlight accent */}
              {s.highlight && (
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: 'linear-gradient(90deg, #28A745, #34d058)' }}
                />
              )}

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 transition-transform group-hover:scale-110 duration-300"
                style={{
                  background: s.highlight ? 'rgba(40,167,69,0.15)' : s.emoji_bg,
                  border: s.highlight ? '1px solid rgba(40,167,69,0.3)' : 'none',
                }}
              >
                {s.icon}
              </div>

              <h3
                className={`font-display font-700 text-xl mb-3 ${
                  s.highlight ? 'text-white' : 'text-navy-900'
                }`}
              >
                {s.title}
              </h3>

              <p
                className={`text-sm leading-relaxed ${
                  s.highlight ? 'text-white/70' : 'text-gray-500'
                }`}
              >
                {s.desc}
              </p>

              {/* Bottom indicator */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                  s.highlight ? 'bg-accent-400' : 'bg-navy-900'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Duration note + CTA */}
        <div className={`mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-white shadow-card border border-gray-100 reveal ${visible ? 'visible' : ''}`}>
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
              style={{ background: '#E8F5E9' }}
            >
              ⏱️
            </div>
            <p className="font-semibold text-navy-900">{t('services.duration')}</p>
          </div>
          <a href="#contact" className="btn-primary text-sm flex-shrink-0">
            {t('services.cta')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
