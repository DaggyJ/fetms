/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#10151F",
        panel: "#1A2230",
        panelBorder: "#2A3345",
        navy: "#141F30",
        navyLight: "#1B2A3D",
        muted: "#8A93A3",
        gold: "#F5B921",
        blueAccent: "#4A9EFF",
        greenAccent: "#2ECC71",
        redAccent: "#E74C3C",
        purpleAccent: "#8E7CE0",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
