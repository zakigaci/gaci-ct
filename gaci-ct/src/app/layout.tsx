import type { Metadata } from 'next';
import './globals.css';
import { I18nProvider } from '@/context/i18n';

export const metadata: Metadata = {
  title: 'GACI Contrôle Technique — Boudouaou El Bahri',
  description:
    'Centre de contrôle technique agréé à Boudouaou-El-Bahri. Service rapide, professionnel et fiable. Ouvert samedi à jeudi 07h30–16h30.',
  keywords: ['contrôle technique', 'GACI', 'Boudouaou El Bahri', 'inspection automobile', 'Algérie'],
  openGraph: {
    title: 'GACI Contrôle Technique — Boudouaou El Bahri',
    description: 'Centre de contrôle technique agréé. Service rapide et professionnel.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
