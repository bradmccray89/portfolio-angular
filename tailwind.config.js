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
        light_text: "#eaeaeaff",
        dark_blue: "#06080fff",
        dark_lavender: "#2b2531ff",
        dark_platinum: "#45473fff",
        dark_green: "#101a0fff",
        dark_pastel_green: "#25261fff",
        dark_text: "#1e1f1fff",
        danger: "#f44336",
      },
    },
  },
  plugins: [],
};
