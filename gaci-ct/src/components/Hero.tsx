'use client';

import { useI18n } from '@/context/i18n';
import Image from 'next/image';

export default function Hero() {
  const { t } = useI18n();

  const stats = [
    { value: t('hero.stat1'), sub: t('hero.stat1Sub'), icon: '⚡' },
    { value: t('hero.stat2'), sub: t('hero.stat2Sub'), icon: '🏆' },
    { value: t('hero.stat3'), sub: t('hero.stat3Sub'), icon: '📅' },
  ];

  return (
    <section id="hero" className="hero-bg min-h-screen flex flex-col justify-center">
      {/* Decorative grid lines */}
      <div className="hero-content absolute inset-0 opacity-5" style={{ zIndex: 2 }}>
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Glow orbs */}
      <div
        className="hero-content absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #28A745 0%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: 2,
        }}
      />
      <div
        className="hero-content absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full opacity-8 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #0B3C5D 0%, transparent 70%)',
          filter: 'blur(80px)',
          zIndex: 2,
        }}
      />

      <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="animate-fade-up">
              <span className="badge">
                <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse-slow" />
                {t('hero.badge')}
              </span>
            </div>

            {/* Title */}
            <div className="animate-fade-up delay-100">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
                {t('hero.title')}
                <br />
                <span className="gradient-text">{t('hero.titleHighlight')}</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg text-white/65 leading-relaxed max-w-lg animate-fade-up delay-200">
              {t('hero.subtitle')}
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <a href="#contact" className="btn-primary text-base">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t('hero.cta')}
              </a>
              <a href="#services" className="btn-outline text-base">
                {t('hero.ctaSecondary')}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-6 pt-4 animate-fade-up delay-400">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="flex flex-col items-start p-4 rounded-xl glass"
                >
                  <span className="text-2xl mb-1">{s.icon}</span>
                  <span className="font-display font-800 text-white text-lg leading-none">{s.value}</span>
                  <span className="text-white/50 text-xs mt-1">{s.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: floating logo card */}
          <div className="hidden lg:flex justify-center items-center animate-fade-up delay-300">
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-3xl opacity-30"
                style={{ background: 'radial-gradient(circle, #28A745 0%, transparent 70%)', filter: 'blur(30px)' }}
              />
              {/* Card */}
              <div className="relative glass rounded-3xl p-10 animate-float border border-white/10 shadow-2xl">
                <Image
                  src="/logo.png"
                  alt="GACI Contrôle Technique"
                  width={320}
                  height={320}
                  className="object-contain drop-shadow-2xl"
                  priority
                />
                {/* Certified badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-accent-500 text-white text-xs font-bold px-5 py-2 rounded-full shadow-btn whitespace-nowrap">
                  ✓ Centre Agréé Officiel
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center animate-fade-in delay-600">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors group"
          >
            <span className="text-xs tracking-widest uppercase">Découvrir</span>
            <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center pt-1.5 group-hover:border-white/40 transition-colors">
              <div className="w-1 h-2.5 bg-white/40 rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
