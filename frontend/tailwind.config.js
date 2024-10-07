/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',  // Asegúrate de que este path coincide con tu estructura de archivos
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}', // Si tienes archivos dentro de app
    './src/components/**/*.{js,ts,jsx,tsx}', // Archivos de componentes en src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
