'use client';

import { useI18n } from '@/context/i18n';
import { useReveal } from '@/hooks/useReveal';

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const { t } = useI18n();
  const { ref, visible } = useReveal();

  const reviews = [
    {
      name: t('reviews.r1Name'),
      text: t('reviews.r1Text'),
      initials: 'KB',
      color: '#0B3C5D',
      date: 'Il y a 2 semaines',
    },
    {
      name: t('reviews.r2Name'),
      text: t('reviews.r2Text'),
      initials: 'NM',
      color: '#28A745',
      date: 'Il y a 1 mois',
    },
    {
      name: t('reviews.r3Name'),
      text: t('reviews.r3Text'),
      initials: 'SA',
      color: '#1a6b8a',
      date: 'Il y a 3 semaines',
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-2"
        style={{
          backgroundImage: 'radial-gradient(circle, #0B3C5D 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center reveal ${visible ? 'visible' : ''}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <span className="badge">{t('reviews.badge')}</span>
            <div className="flex justify-center mt-2 mb-5">
              <span className="deco-line" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-black text-navy-900 mb-4">
              {t('reviews.title')}
            </h2>
            <p className="text-gray-500 text-lg max-w-md mx-auto">
              {t('reviews.subtitle')}
            </p>
          </div>

          {/* Review cards */}
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="relative bg-white rounded-2xl p-6 shadow-card border border-gray-100 card-hover"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Quote mark */}
                <div
                  className="absolute top-5 right-5 font-display text-6xl text-gray-100 leading-none"
                  style={{ lineHeight: 1 }}
                >
                  "
                </div>

                {/* Stars */}
                <StarRating />

                {/* Text */}
                <p className="text-gray-600 leading-relaxed mt-3 mb-4">{r.text}</p>

                {/* Author row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                      style={{ background: r.color }}
                    >
                      {r.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-navy-900 text-sm">{r.name}</div>
                      <div className="text-gray-400 text-xs">{r.date}</div>
                    </div>
                  </div>
                  {/* Google G logo */}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ background: '#4285F4' }}
                  >
                    G
                  </div>
                </div>

                {/* Verified badge */}
                <div className="inline-flex items-center gap-1 mt-3 text-xs text-green-600 font-medium">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {t('reviews.verified')}
                </div>
              </div>
            ))}
          </div>

          {/* Google CTA */}
          <div className="mt-14 text-center">
            <div className="inline-block rounded-3xl p-px" style={{ background: 'linear-gradient(135deg, #4285F4, #28A745)' }}>
              <a
                href="https://g.page/r/CU-FLCz6r9xMEBE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white rounded-3xl px-8 py-4 font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <span className="text-2xl">⭐</span>
                <span>{t('reviews.googleCta')}</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
