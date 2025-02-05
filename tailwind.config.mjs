/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal':'#132741',
        'gold':'#F8B013',
        'goldfade':'#f8b01377',
        'light':'#E1E1E1',
        'greyish':'#BCBCBC'
      },
    },
    screens: {
      'sm': '320px', // Modify this line for small phones
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [],
};
