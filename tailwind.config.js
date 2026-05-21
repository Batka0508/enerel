export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "Segoe UI", "Arial", "sans-serif"],
      },
      colors: {
        blush: "#ff8fbd",
        petal: "#ffd6e8",
        violet: "#9b5cff",
        ink: "#08060d",
        wine: "#2a0d1f",
      },
      boxShadow: {
        glass: "0 28px 90px rgba(0, 0, 0, 0.42)",
        glow: "0 0 38px rgba(255, 143, 189, 0.34)",
      },
    },
  },
  plugins: [],
};
