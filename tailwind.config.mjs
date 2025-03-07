/** @type {import('tailwindcss').Config} */

const colors = {
  'light':'#E1E1E1',
  'greyish':'#BCBCBC',
  'dutch':'#F4E1C1',
  'gold':'#F8B013',
  'royal':'#132741',
  'royalfade':'#13274177',
  'goldfade':'#f8b01377',
  'dutchfade':'#f4e1c177',
  'lightfade':'#e1e1e177',
  'greyishfade':'#bcbcbc77'
}


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:colors['royal'],
        secondary:colors['light'],
        accent:colors['gold'], 
        text:colors['light'],
        ...colors  
      },
    },
    screens: {
      'sm': '300px', // Modify this line for small phones
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [],
};
