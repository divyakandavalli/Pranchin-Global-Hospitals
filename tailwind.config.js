export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        '3xl': '1800px', // ✅ custom breakpoint
      },
      animation: {
        zoomIn: "zoomIn 10s ease-in-out infinite",
      },
      keyframes: {
        zoomIn: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
      },
      fontFamily: {
        dm: ['"DM Sans"', "sans-serif"],
        instrumental: ['"Instrument Serif"', "sans-serif"],
        manrope: ['"Manrope"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
