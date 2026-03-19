/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<src>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f2ff',
          100: '#bae0ff',
          500: '#0366d6',
          700: '#0252aa',
          DEFAULT: '#0366d6',
        },
        success: '#28a745',
        warning: '#ffc107',
        accent: '#ff6b6b',
        gray: {
          100: '#f5f7fa',
          500: '#666666',
          600: '#586069',
          DEFAULT: '#6c757d',
        }
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        xxl: '24px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        light: '0 1px 3px rgba(0, 0, 0, 0.1)',
        medium: '0 2px 8px rgba(0, 0, 0, 0.12)',
        dark: '0 4px 16px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}

