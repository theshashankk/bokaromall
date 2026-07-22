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
          700: '#87161a', // Official Base Brand Color
          800: '#6E1215',
          900: '#540D10',
          950: '#340507',
        },
        editorial: {
          canvas: '#FBF9F5',
          card: '#FFFFFF',
          muted: '#F4F0EA',
          border: '#E6E0D8',
          text: '#1A1615',
          subtext: '#5A524D',
        },
        onyx: {
          canvas: '#0D0F14',
          card: '#161922',
          muted: '#1F2430',
          border: '#2E3646',
          text: '#F8FAFC',
          subtext: '#94A3B8',
        },
        gold: {
          500: '#F59E0B',
          600: '#D97706',
        }
      },
      fontFamily: {
        heading: ['var(--font-syne)', 'Georgia', 'serif'],
        sans: ['var(--font-jost)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'luxury': '0 20px 50px rgba(135, 22, 26, 0.08)',
      }
    },
  },
  plugins: [],
}
