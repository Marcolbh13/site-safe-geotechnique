/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Charte SAFE Géotechnique (dérivée du logo : hexagone magenta/fuchsia,
        // molécule violette, neutres clairs).
        safe: {
          magenta: '#9c2f6f',
          deep: '#7a2a5f',
          fuchsia: '#c2317b',
          violet: '#5d2a6b',
          rose: '#ce5a93',
        },
        ink: '#211a23',
        slate: {
          DEFAULT: '#574d59',
        },
        muted: '#837a86',
        line: '#e8e0e8',
        mist: '#f7f3f7',
        cloud: '#fcfafc',
        plum: '#1b1320', // fond footer
      },
      fontFamily: {
        sans: [
          'Manrope',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      maxWidth: {
        content: '1180px',
        narrow: '760px',
      },
      borderRadius: {
        xl2: '22px',
      },
      boxShadow: {
        sfsm: '0 1px 2px rgba(33,26,35,0.04), 0 2px 8px rgba(33,26,35,0.05)',
        sfmd: '0 6px 24px rgba(33,26,35,0.08)',
        sflg: '0 18px 48px rgba(122,42,95,0.16)',
        sfcta: '0 8px 22px rgba(154,47,111,0.28)',
      },
      backgroundImage: {
        'safe-gradient': 'linear-gradient(135deg, #7a2a5f 0%, #9c2f6f 45%, #c2317b 100%)',
        'safe-soft': 'linear-gradient(135deg, #fbf3f8 0%, #f6eef4 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease both',
      },
    },
  },
  plugins: [],
};
