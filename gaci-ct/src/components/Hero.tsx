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
    <section id="hero" className="hero-bg relative overflow-hidden">
      <div
        className="hero-content absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, transparent 40%, #28A745 100%)',
          clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }}
      />
      <div className="hero-content absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
      <div
        className="hero-content absolute top-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(40,167,69,0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="animate-fade-up">
              <span className="badge">
                <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse-slow" />
                {t('hero.badge')}
              </span>
            </div>
            <div className="animate-fade-up delay-100">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                {t('hero.title')}
                <br />
                <span className="gradient-text">{t('hero.titleHighlight')}</span>
              </h1>
            </div>
            <div className="animate-fade-up delay-200 flex items-start gap-3">
              <div className="h-1 w-16 mt-3 flex-shrink-0 rounded-full" style={{ background: 'linear-gradient(90deg, #28A745, #34d058)' }} />
              <p className="text-base text-white/65 leading-relaxed">{t('hero.subtitle')}</p>
            </div>
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
            <div className="grid grid-cols-3 gap-3 animate-fade-up delay-400">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center p-4 rounded-2xl glass border border-white/10">
                  <span className="text-2xl mb-1">{s.icon}</span>
                  <span className="font-display font-black text-white text-xl leading-none">{s.value}</span>
                  <span className="text-white/50 text-xs mt-1">{s.sub}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center animate-fade-up delay-300">
            <div className="relative w-full max-w-sm">
              <div
                className="absolute -inset-1 rounded-3xl opacity-40"
                style={{ background: 'linear-gradient(135deg, #28A745, #0B3C5D)', filter: 'blur(8px)' }}
              />
              <div className="relative glass rounded-3xl p-8 animate-float border border-white/10 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white/60 text-xs font-semibold tracking-widest uppercase">Centre Agréé</span>
                </div>
                <Image
                  src="/logo.png"
                  alt="GACI Contrôle Technique"
                  width={280}
                  height={280}
                  className="object-contain drop-shadow-2xl mx-auto"
                  priority
                />
                <div
                  className="mt-6 rounded-xl p-3 flex items-center justify-between"
                  style={{ background: 'rgba(40,167,69,0.12)', border: '1px solid rgba(40,167,69,0.2)' }}
                >
                  <span className="text-white/70 text-xs">Boudouaou-El-Bahri</span>
                  <span className="text-green-400 text-xs font-bold">✓ Officiel</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center animate-fade-in delay-600">
          <a href="#about" className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors group">
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
