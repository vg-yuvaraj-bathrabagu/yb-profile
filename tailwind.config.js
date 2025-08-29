// File: tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-bg': '#0a0a0f',
        'cyber-dark': '#1a1a2e',
        'cyber-darker': '#16213e',
        'cyber-card': '#1e1e3f',
        'cyber-cyan': '#00ffff',
        'cyber-magenta': '#ff00ff',
        'cyber-purple': '#6c5ce7',
        'cyber-blue': '#0984e3',
        'cyber-green': '#00ff41',
        'cyber-red': '#ff073a',
        'cyber-orange': '#ff6b35',
        'text-primary': '#ffffff',
        'text-secondary': '#b0b0c3',
        'text-muted': '#8b8ba7',
        'accent-glow': '#00ffff',
        'grid-color': 'rgba(0, 255, 255, 0.1)',
        'scan-line': 'rgba(0, 255, 255, 0.5)',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'fira': ['Fira Code', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 1s ease 3.5s forwards',
        'loading-bar': 'loading 3s ease-in-out',
        'system-ready': 'fadeInReady 0.5s ease 2.5s forwards',
        'matrix-fall': 'matrixFall 10s linear infinite',
        'scan': 'scan 8s linear',
        'glitch-1': 'glitch-1 2s infinite',
        'glitch-2': 'glitch-2 2s infinite',
        'hero-avatar-pulse': 'heroAvatarPulse 3s infinite alternate',
        'rotate-glow': 'rotateGlow 4s linear infinite',
        'type-in': 'typeIn 0.1s ease forwards',
        'blink': 'blink 1s infinite',
        'skill-glow': 'skillGlow 3s ease-in-out infinite alternate',
        'hologram-sweep': 'hologramSweep 2s infinite',
        'header-flow': 'headerFlow 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        loading: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        fadeInReady: {
          'to': { opacity: '1' },
        },
        matrixFall: {
          'to': { transform: 'translateY(calc(100vh + 100px))' },
        },
        scan: {
          '0%': { transform: 'translateY(-2px)', opacity: '0' },
          '5%': { opacity: '1' },
          '95%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        'glitch-1': {
          '0%, 14%, 15%, 49%, 50%, 99%, 100%': { transform: 'translate(0)' },
          '1%, 13%': { transform: 'translate(-2px, 2px)' },
          '16%, 48%': { transform: 'translate(2px, -1px)' },
        },
        'glitch-2': {
          '0%, 20%, 21%, 62%, 63%, 99%, 100%': { transform: 'translate(0)' },
          '1%, 19%': { transform: 'translate(2px, 2px)' },
          '22%, 61%': { transform: 'translate(-2px, -1px)' },
        },
        heroAvatarPulse: {
          '0%': { boxShadow: '0 0 50px #00ffff, inset 0 0 50px rgba(0, 0, 0, 0.5)' },
          '100%': { boxShadow: '0 0 80px #ff00ff, inset 0 0 50px rgba(0, 0, 0, 0.5)' },
        },
        rotateGlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        typeIn: {
          'to': { opacity: '1' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        skillGlow: {
          '0%': { boxShadow: '0 0 15px #00ffff' },
          '100%': { boxShadow: '0 0 25px #ff00ff' },
        },
        hologramSweep: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        headerFlow: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backgroundImage: {
        'cyber-grid': `
          linear-gradient(90deg, transparent 98%, rgba(0, 255, 255, 0.1) 100%),
          linear-gradient(0deg, transparent 98%, rgba(0, 255, 255, 0.1) 100%)
        `,
      },
    },
  },
  plugins: [],
}