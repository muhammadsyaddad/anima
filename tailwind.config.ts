import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0.1': '0.1px',
    },
    extend: {
      colors: {
        color: {
          primary: '#eeeeee',
          accent: '#ffc639',
          secondary: '#db0000',
          dark: '#121212',
          white: '#ffffff'
        }
      }
   },
 },
 plugins: [],
} satisfies Config;


