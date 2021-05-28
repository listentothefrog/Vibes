module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: "class",
    theme: {
      fontFamily: {
        sans: [
            "Inter",
            "-apple-system",
            "BlinkMacSystemFont",
            "Segoe UI",
            "Roboto",
            "Helvetica",
            "Arial",
            "sans-serif",
          ],
          mono: ["Menlo", "Monaco", "Courier New", "monospace"],
      },
    },
    fontSize: {
        tiny: "0.625rem",
        sm: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
    },
    colors: {
        button: "",
        transparent: "transparent"
    },
    variants: {
      extend: {},
    },
    plugins: [],
}