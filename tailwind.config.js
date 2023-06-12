/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      clipPath: {
        myPolygon: "polygon(0% 10.2%, 100% 0%, 100% 80%, 9.26% 90%, 0% 100%)",
        subPolygon: "polygon(8.5% 89.75%, 100% 79.75%, 100% 100%, 0% 100%)"
      },
      colors: {
        'primary': '#0098FF',
        'highlight':'FF0000',
      },
      boxShadow: {
        'left-smooth': 'inset 20px 0px 20px -15px rgba(244, 247, 250, 0.75)',
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}
