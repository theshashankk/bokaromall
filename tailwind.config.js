/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FDF2F2',
          100: '#FCE4E4',
          200: '#F9C4C5',
          300: '#F49899',
          400: '#EC6164',
          500: '#DF383C',
          600: '#C5221F',
          700: '#87161a', // Base Brand Color
          800: '#6E1215',
          900: '#540D10',
          950: '#340507',
        },
        editorial: {
          canvas: '#FAF8F5',
          card: '#FFFFFF',
          muted: '#F3EFE9',
          border: '#E2DBD0',
          text: '#161312',
          subtext: '#4A433E',
        },
        onyx: {
          canvas: '#0B0D12',
          card: '#141720',
          muted: '#1B202D',
          border: '#282F40',
          text: '#F8FAFC',
          subtext: '#94A3B8',
        },
        gold: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        }
      },
      fontFamily: {
        heading: ['var(--font-cinzel)', 'var(--font-syne)', 'Georgia', 'serif'],
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'luxury': '0 25px 60px -15px rgba(135, 22, 26, 0.12)',
      }
    },
  },
  plugins: [],
}
