/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')],
  varients: {
     gridTemplateAreas: ['responsive']
  }
}
