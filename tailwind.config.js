

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: { transitionProperty: {
      'max-height': 'max-height',
      'opacity': 'opacity',
    },
    maxHeight: {
      '0': '0',
      '500': '500px', // or whatever value is appropriate
    },},
  },
  plugins: [],
}
