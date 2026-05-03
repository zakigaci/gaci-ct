'use client';

import { useI18n } from '@/context/i18n';
import { useReveal } from '@/hooks/useReveal';

export default function Hours() {
  const { t } = useI18n();
  const { ref, visible } = useReveal();

  const days = [
    { label: 'Samedi', open: true },
    { label: 'Dimanche', open: true },
    { label: 'Lundi', open: true },
    { label: 'Mardi', open: true },
    { label: 'Mercredi', open: true },
    { label: 'Jeudi', open: true },
    { label: 'Vendredi', open: false },
  ];

  return (
    <section
      id="hours"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #071f33 0%, #0B3C5D 60%, #0d4a73 100%)' }}
    >
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: '#28A745', filter: 'blur(80px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <span className="badge" style={{ background: 'rgba(40,167,69,0.15)', borderColor: 'rgba(40,167,69,0.3)', color: '#34d058' }}>
              {t('hours.badge')}
            </span>
            <div className="flex justify-center mt-2 mb-5">
              <span className="deco-line" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-black text-white mb-4">
              {t('hours.title')}
            </h2>
            <p className="text-white/50 text-lg max-w-md mx-auto">
              {t('hours.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: Main hours card */}
            <div
              className="rounded-3xl p-8 relative overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: 'linear-gradient(90deg, #28A745, #34d058)' }}
              />

              {/* Open status */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: 'rgba(40,167,69,0.15)', border: '1px solid rgba(40,167,69,0.3)' }}>
                  <div className="w-2.5 h-2.5 rounded-full bg-accent-500 animate-pulse" />
                  <span className="text-accent-500 font-semibold text-sm">{t('hours.open')}</span>
                </div>
                <span className="text-white/40 text-sm">07:30 – 16:30</span>
              </div>

              {/* Big time display */}
              <div className="text-center py-6">
                <div
                  className="font-display font-900 text-6xl sm:text-7xl text-white mb-2 tabular-nums"
                  style={{ textShadow: '0 0 30px rgba(40,167,69,0.3)' }}
                >
                  07:30
                </div>
                <div className="flex items-center justify-center gap-4 my-3">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-white/40 text-sm">jusqu&#39;à</span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <div
                  className="font-display font-900 text-6xl sm:text-7xl text-accent-500 mb-4 tabular-nums"
                  style={{ textShadow: '0 0 30px rgba(40,167,69,0.4)' }}
                >
                  16:30
                </div>
                <p className="text-white/50 text-sm">{t('hours.satThur')}</p>
              </div>

              {/* Note */}
              <div
                className="mt-6 flex items-start gap-3 p-4 rounded-xl"
                style={{ background: 'rgba(40,167,69,0.08)', border: '1px solid rgba(40,167,69,0.15)' }}
              >
                <span className="text-lg flex-shrink-0">💡</span>
                <p className="text-white/60 text-sm leading-relaxed">{t('hours.note')}</p>
              </div>
            </div>

            {/* Right: Day-by-day */}
            <div className="space-y-2">
              {days.map((day, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between p-4 rounded-xl transition-all duration-200 ${
                    day.open
                      ? 'hover:bg-white/8 cursor-default'
                      : 'opacity-60'
                  }`}
                  style={{
                    background: day.open ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
                    border: day.open ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(255,255,255,0.04)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                        day.open ? 'bg-accent-500' : 'bg-red-500/60'
                      }`}
                    />
                    <span className={`font-medium ${day.open ? 'text-white' : 'text-white/40'}`}>
                      {day.label}
                    </span>
                  </div>
                  {day.open ? (
                    <span className="text-sm font-mono text-accent-400">07:30 – 16:30</span>
                  ) : (
                    <span className="text-sm text-red-400/70 font-medium">{t('hours.closed')}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
