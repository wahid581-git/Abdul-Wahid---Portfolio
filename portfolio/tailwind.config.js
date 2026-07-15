/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#05070D',
          panel: '#0B0F1C',
          elevated: '#10152A',
        },
        border: {
          glass: 'rgba(255,255,255,0.08)',
        },
        accent: {
          blue: '#3B82F6',
          purple: '#A855F7',
          cyan: '#22D3EE',
          green: '#34D399',
        },
        text: {
          primary: '#E8ECF7',
          muted: '#8A93AB',
          dim: '#5B6480',
        },
        // Light mode palette
        light: {
          bg: '#F7F8FC',
          panel: '#FFFFFF',
          border: '#E4E7F0',
          text: '#12172A',
          muted: '#5B6480',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 1.5s',
        'fade-up': 'fadeUp 0.7s ease forwards',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-18px) translateX(8px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(59,130,246,0.35)',
        'glow-purple': '0 0 40px -10px rgba(168,85,247,0.35)',
      },
    },
  },
  plugins: [],
}
