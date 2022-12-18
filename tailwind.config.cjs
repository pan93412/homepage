// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        0.5: "0.125rem",
      },
      fontFamily: {
        mono: ["var(--font-ibm-plex-mono)", ...fontFamily.sans],
        sans: ["var(--font-cabin)", "var(--font-harmony)", ...fontFamily.sans],
      },
    },
  },
};

module.exports = config;
