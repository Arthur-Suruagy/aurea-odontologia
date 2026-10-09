/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        petrol: {
          DEFAULT: "#173F3A",
          700: "#1d4d47",
          800: "#143632",
          900: "#0f2a27",
        },
        offwhite: "#F8F7F2",
        sand: "#E8DFD0",
        gold: {
          DEFAULT: "#B99A62",
          dark: "#8a6f3d",
        },
        ink: "#292D2B",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "Times New Roman", "serif"],
        sans: ['"DM Sans"', "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      maxWidth: {
        shell: "78rem",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
