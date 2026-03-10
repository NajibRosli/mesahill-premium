/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-beige': '#f0ede8',
        'brand-beige-dark': '#e8e4dd',
        'brand-text': '#1a1a1a',
        'brand-text-muted': '#4a4a4a',
        'brand-navy': '#1a1f3a',
        'brand-navy-hover': '#2d3561',
        'brand-warning': '#ffc107',
        'brand-warning-bg': '#fff3cd',
        'brand-error': '#dc3545',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '40px',
        'xl': '80px',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
      },
      boxShadow: {
        'sm': '0 2px 16px rgba(0, 0, 0, 0.07)',
        'md': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'lg': '0 16px 48px rgba(0, 0, 0, 0.15)',
      },
      transitionDuration: {
        'fast': '300ms',
        'smooth': '600ms',
      },
      strokeWidth: {
        '0.5': '0.5px',
      },
    },
  },
  plugins: [],
}
