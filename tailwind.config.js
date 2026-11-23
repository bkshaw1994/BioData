/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCFB',
          100: '#FAF8F5',
          200: '#F4EFEA',
          300: '#EAE2D7',
          400: '#DECFC0',
          500: '#CFBBA7',
        },
        charcoal: {
          900: '#111827',
          800: '#1F2937',
          700: '#374151',
          600: '#4B5563',
          500: '#6B7280',
        },
        gold: {
          50: '#FDFBF7',
          100: '#F8F1E5',
          200: '#EEDCB9',
          300: '#E4C78C',
          400: '#D97706',
          500: '#B45309',
          600: '#92400E',
          700: '#78350F',
          800: '#451A03',
        },
        terracotta: {
          500: '#C2410C',
          600: '#9A3412',
          700: '#7C2D12',
        },
        warmborder: '#E8E2D9',
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(180, 83, 9, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
        'card': '0 10px 25px -3px rgba(31, 41, 55, 0.04), 0 4px 10px -2px rgba(180, 83, 9, 0.03)',
        'gold-glow': '0 0 25px rgba(217, 119, 6, 0.15)',
      },
    },
  },
  plugins: [],
}

