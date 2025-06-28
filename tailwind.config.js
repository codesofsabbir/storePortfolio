/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./node_modules/@heroui/theme/dist/components/progress.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        mainBodyBg: "var(--mainBodyBg)",
        container: "var(--container)",
        box: "var(--box)",
        subBox: "var(--subBox)",
        structure: "var(--structure)",
      },
      textColor: {
        title: "var(--title)",
        subTitle: "var(--subTitle)",
        active: "var(--active)",
        default: "var(--default)",
      },
      backgroundImage: {
        gradient: "var(--gradient)",
      },
    },
  },
  plugins: [],
};
