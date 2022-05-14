module.exports = {
  content: [
    "./public/**/*.{html, js}",
    "./public/**/*.js",
    "./public/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        "pink-450": "#E69A8DFF",
      },
      backgroundPosition: {
        set: "top -300px right 0",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
