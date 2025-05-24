/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'rosa-blush': '#F4D3DC',
        'verde-menta-suave': '#C8E7E0',
        'bege-areia': '#EDE5D8',
        'cinza-quente': '#6E6A6D',
        'branco-suave': '#FDFDFD',
      },
    },
  },
  plugins: [],
};
