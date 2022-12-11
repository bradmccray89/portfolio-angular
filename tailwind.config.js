/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        blue: "#161b33ff",
        lavender: "#907f9fff",
        platinum: "#e0e1ddff",
        green: "#355834ff",
        pastel_green: "#7c7f65ff",
        text: "#e0e1ddff",
        dark_blue: "#0d0f1fff",
        dark_lavender: "#5e5a6fff",
        dark_platinum: "#a9a9a9ff",
        dark_green: "#1e1f1fff",
        dark_pastel_green: "#4d4d4dff",
        dark_text: "#1e1f1fff",
        danger: "#f44336",
      },
    },
  },
  plugins: [],
};
