/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#e8eef4',
          100: '#c5d4e4',
          200: '#9fb8d2',
          300: '#789cc0',
          400: '#5a86b2',
          500: '#3d70a4',
          600: '#2c5a8f',
          700: '#1e4578',
          800: '#0f3060',
          900: '#0B3C5D',
          950: '#071f33',
        },
        accent: {
          400: '#34d058',
          500: '#28A745',
          600: '#1e8035',
        },
        steel: '#8fa8bf',
      },
      fontFamily: {
        display: ['var(--font-barlow)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(7,31,51,0.92) 0%, rgba(11,60,93,0.85) 50%, rgba(14,40,70,0.9) 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-right': 'slideRight 0.6s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'card': '0 4px 24px rgba(11,60,93,0.10)',
        'card-hover': '0 12px 40px rgba(11,60,93,0.18)',
        'nav': '0 2px 20px rgba(7,31,51,0.15)',
        'btn': '0 4px 16px rgba(40,167,69,0.35)',
        'btn-hover': '0 8px 28px rgba(40,167,69,0.5)',
      },
    },
  },
  plugins: [],
}
