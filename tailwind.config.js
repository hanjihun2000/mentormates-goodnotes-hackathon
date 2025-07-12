/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'goodnotes': {
          'paper': '#FEFEFE',
          'blue': '#007AFF',
          'gray': '#F2F2F7',
          'dark': '#1C1C1E',
          'light-gray': '#8E8E93',
          'yellow': '#FFCC02',
          'green': '#34C759',
          'red': '#FF3B30',
          'purple': '#AF52DE',
          'orange': '#FF9500',
        }
      },
      fontFamily: {
        'handwritten': ['Kalam', 'cursive'],
        'system': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'paper': '0 2px 10px rgba(0, 0, 0, 0.1)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'paper-lines': 'repeating-linear-gradient(transparent, transparent 24px, #E5E5EA 24px, #E5E5EA 25px)',
      }
    },
  },
  plugins: [],
} 