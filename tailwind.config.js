/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the paths to all of your template files
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        // Add custom colors
        "brand-blue": "#1E40AF",
      },
      spacing: {
        // Add custom spacing values
        128: "32rem",
      },
      fontFamily: {
        // Add custom fonts
        sans: ["Graphik", "sans-serif"],
      },
    },
  },
  plugins: [
    // Add any plugins here
  ],
};
