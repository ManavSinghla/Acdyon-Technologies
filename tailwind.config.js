/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          800: '#0d1425',
          850: '#090e1a',
          900: '#050912',
          950: '#02040e',
          card: 'var(--card-bg)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'monospace'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float-slow 7s ease-in-out infinite',
        'float-fast': 'float-fast 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'orbit': 'orbit 12s linear infinite',
        'orbit-reverse': 'orbit-reverse 8s linear infinite',
        'morph-blob': 'morph-blob 8s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
        'beam-sweep': 'beam-sweep 3s ease-in-out infinite',
        'slide-in-up': 'slide-in-up 0.6s ease-out both',
        'slide-down': 'slide-down 0.2s ease-out forwards',
      },
      backgroundImage: {
        'hero-gradient-dark': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99, 102, 241, 0.3) 0%, rgba(168, 85, 247, 0.12) 40%, transparent 70%)',
        'hero-gradient-light': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.06) 40%, transparent 70%)',
        'card-shine': 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%, rgba(255,255,255,0.04) 100%)',
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(99, 102, 241, 0.4)',
        'glow-md': '0 0 30px -5px rgba(99, 102, 241, 0.5)',
        'glow-lg': '0 0 60px -10px rgba(99, 102, 241, 0.4)',
        'glow-cyan': '0 0 30px -5px rgba(34, 211, 238, 0.4)',
        'glow-purple': '0 0 40px -8px rgba(168, 85, 247, 0.5)',
        'glow-emerald': '0 0 25px -5px rgba(52, 211, 153, 0.4)',
        'card-dark': '0 32px 64px -12px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)',
        'card-light': '0 8px 32px -4px rgba(99, 102, 241, 0.12), 0 0 0 1px rgba(99, 102, 241, 0.08)',
        'hero-btn': '0 8px 24px -4px rgba(99, 102, 241, 0.5), inset 0 1px 0 rgba(255,255,255,0.2)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
        'terminal': '0 32px 64px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)',
      },
      blur: {
        '4xl': '100px',
        '5xl': '140px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}
