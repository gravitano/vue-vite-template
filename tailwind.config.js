module.exports = {
  purge: {
    content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
    options: {
      safelist: [/^rounded-/]
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")]
  // prefix: 'doc-',
  // important: true
};
