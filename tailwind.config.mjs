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
        'royalfade':'#13274177',
        'gold':'#F8B013',
        'goldfade':'#f8b01377',
        'dutch':'#F4E1C1',
        'dutchfade':'#f4e1c177',
        'light':'#E1E1E1',
        'lightfade':'#e1e1e177',
        'greyish':'#BCBCBC',
        'greyishfade':'#bcbcbc77'
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
