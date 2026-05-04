'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const photos = [
  { src: '/photo1.jpeg', caption: 'Entrée du centre' },
  { src: '/photo2.jpeg', caption: 'Zone de contrôle' },
  { src: '/photo3.jpeg', caption: 'Équipements techniques' },
  { src: '/photo4.jpeg', caption: 'Salle d\'attente' },
  { src: '/photo5.jpeg', caption: 'Nos installations' },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="gallery" className="py-24 bg-navy-900 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="badge">Notre Centre</span>
          <div className="flex justify-center mt-2 mb-5">
            <span className="deco-line" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-white mb-4">
            Nos Installations
          </h2>
          <p className="text-white/50 text-lg max-w-md mx-auto">
            Découvrez notre centre de contrôle technique moderne
          </p>
        </div>

        {/* Slideshow */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: '500px' }}>
          {photos.map((photo, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ opacity: i === current ? 1 : 0 }}
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,31,51,0.8) 0%, transparent 60%)' }} />
              {/* Caption */}
              <div className="absolute bottom-6 left-6">
                <span className="text-white font-semibold text-lg">{photo.caption}</span>
              </div>
            </div>
          ))}

          {/* Dots */}
          <div className="absolute bottom-6 right-6 flex gap-2">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="transition-all duration-300"
                style={{
                  width: i === current ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: i === current ? '#28A745' : 'rgba(255,255,255,0.4)',
                }}
              />
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + photos.length) % photos.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition-all flex items-center justify-center text-white"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % photos.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition-all flex items-center justify-center text-white"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
