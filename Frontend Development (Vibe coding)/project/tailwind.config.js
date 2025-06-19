/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        quantum: {
          blue: '#0066FF',
          green: '#00FF88',
          purple: '#8B5CF6',
          dark: '#0A0A0A',
          gray: '#1A1A1A',
          light: '#F8FAFC'
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'orbitron': ['Orbitron', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards'
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px theme(colors.quantum.blue), 0 0 10px theme(colors.quantum.blue), 0 0 15px theme(colors.quantum.blue)' },
          '100%': { boxShadow: '0 0 10px theme(colors.quantum.blue), 0 0 20px theme(colors.quantum.blue), 0 0 30px theme(colors.quantum.blue)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [],
};