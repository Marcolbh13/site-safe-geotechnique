/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Charte SAFE Géotechnique (dérivée du logo : hexagone magenta/fuchsia,
        // molécule violette, neutres clairs).
        safe: {
          magenta: '#8d2a63',
          deep: '#6e2350',
          fuchsia: '#c0307b',
          rose: '#d96aa3',
          violet: '#4f2557',
        },
        ink: '#1b141d',
        slate: { DEFAULT: '#5a5060' },
        muted: '#8a8090',
        line: '#ece5ed',
        mist: '#f8f4f8',
        cloud: '#fdfbfd',
        plum: '#160f1b', // fond sombre / footer
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: { content: '1200px', narrow: '780px' },
      borderRadius: { xl2: '24px' },
      boxShadow: {
        sfsm: '0 1px 2px rgba(27,20,29,0.04), 0 2px 10px rgba(27,20,29,0.05)',
        sfmd: '0 8px 30px rgba(27,20,29,0.08)',
        sflg: '0 24px 60px rgba(110,35,80,0.18)',
        sfcta: '0 10px 26px rgba(141,42,99,0.30)',
      },
      backgroundImage: {
        'safe-gradient': 'linear-gradient(135deg, #6e2350 0%, #8d2a63 48%, #c0307b 100%)',
        'safe-soft': 'linear-gradient(150deg, #fbf2f7 0%, #f6eef4 100%)',
      },
      keyframes: {
        'fade-up': { '0%': { opacity: '0', transform: 'translateY(18px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: { 'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both' },
    },
  },
  plugins: [],
};
