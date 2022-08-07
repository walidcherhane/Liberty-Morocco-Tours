/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        display: [`Gilroy`, `sans-serif`],
        body: [`Graphik`, `sans-serif`],
        poppins: [`Poppins`, `sans-serif`],
      },
    },
  },
  plugins: [require(`@tailwindcss/line-clamp`)],
};
