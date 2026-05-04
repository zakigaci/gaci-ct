'use client';

import { useI18n } from '@/context/i18n';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const { t } = useI18n();
  const { ref, visible } = useReveal();

  const contactItems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: t('contact.phone'),
      value: '0771 11 34 75',
      href: 'tel:0771113475',
      color: '#28A745',
      bg: '#E8F5E9',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: t('contact.email'),
      value: 'gacict56@gmail.com',
      href: 'mailto:gacict56@gmail.com',
      color: '#4285F4',
      bg: '#E8F0FE',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: t('contact.address'),
      value: t('contact.addressVal'),
      href: 'https://maps.app.goo.gl/xYgwLvqT5BYM6LgD8',
      color: '#0B3C5D',
      bg: '#E3F2FD',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Top decoration */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-20"
        style={{ background: 'linear-gradient(90deg, transparent, #0B3C5D, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <span className="badge">{t('contact.badge')}</span>
            <div className="flex justify-center mt-2 mb-5">
              <span className="deco-line" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-black text-navy-900 mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-gray-500 text-lg max-w-md mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left: contact cards */}
            <div className="space-y-4">
              {contactItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-5 p-6 bg-white rounded-2xl shadow-card card-hover border border-gray-100 group"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 duration-300"
                    style={{ background: item.bg, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                      {item.label}
                    </div>
                    <div className="font-semibold text-navy-900 truncate group-hover:text-accent-500 transition-colors">
                      {item.value}
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-300 group-hover:text-accent-500 group-hover:translate-x-1 transition-all"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              ))}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/213771113475"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl text-white font-semibold card-hover transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
              >
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <span>{t('contact.whatsapp')} — 0771 11 34 75</span>
                <svg className="w-5 h-5 ml-auto opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Right: map embed placeholder + info */}
            <div className="space-y-4">
              {/* Map placeholder */}
              <div
                className="relative rounded-2xl overflow-hidden shadow-card"
                style={{ height: '280px', background: 'linear-gradient(135deg, #0B3C5D, #071f33)' }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px',
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-accent-500 flex items-center justify-center text-white text-3xl shadow-btn animate-float">
                    📍
                  </div>
                  <div className="text-center px-6">
                    <p className="text-white font-semibold text-lg">GACI Contrôle Technique</p>
                    <p className="text-white/50 text-sm mt-1">Boudouaou-El-Bahri, Boumerdès</p>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/xYgwLvqT5BYM6LgD8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                  >
                    {t('contact.directions')}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Info card */}
              <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100">
                <h3 className="font-display font-700 text-navy-900 text-lg mb-4">Informations pratiques</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start gap-3">
                    <span className="text-accent-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Aucun rendez-vous nécessaire — venez directement</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Durée estimée : 1 heure maximum</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Ouvert du samedi au jeudi, 07h30 – 16h30</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                    <span>Fermé le vendredi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
