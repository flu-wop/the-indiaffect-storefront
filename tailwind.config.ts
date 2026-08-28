import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Matches the live store: white base, black text, hot-pink accent
        'ink': '#111111',
        'paper': '#ffffff',
        'paper-dim': '#f7f7f7',
        'pink': '#ff4fc3',
        'pink-light': '#ff8ad9',
        'pink-dark': '#e63dae',
        'silver': '#8a8a8a',
        'silver-light': '#d8d8d8',
        'silver-dark': '#555555',
      },
      fontFamily: {
        // Elegant serif for the "Indi" half of the wordmark / headings
        heading: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        // Pink cursive for the "Affect" half of the wordmark
        script: ['var(--font-script)', 'Dancing Script', 'cursive'],
        // Bold condensed display for section headers ("★ Trending Now ★")
        display: ['var(--font-display)', 'Anton', 'Impact', 'sans-serif'],
        // Clean sans for body
        body: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        // Fluid typography
        'hero': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-1': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.3' }],
        'heading-2': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.3' }],
        'heading-3': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.4' }],
      },
      spacing: {
        // Generous spacing scale
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.5rem',
          '2xl': '3rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      scale: {
        '102': '1.02',
        '104': '1.04',
      },
      opacity: {
        '85': '0.85',
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(280px, 1fr))',
        'auto-fit': 'repeat(auto-fit, minmax(280px, 1fr))',
      },
    },
  },
  plugins: [],
};

export default config;
