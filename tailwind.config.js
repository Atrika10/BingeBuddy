/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      myBoxShadow: {
        'inner-custom': 'inset 0 -55px 60px 15px rgba(250, 250, 250, 0.3)',
      },
    },
  },
  plugins: [],
}

