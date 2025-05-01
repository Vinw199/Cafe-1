const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Add back fontFamily extension
      fontFamily: {
        // Set Cabin as the default sans-serif font
        sans: ["var(--font-cabin)", ...fontFamily.sans],
        // Removed serif definition as font-display is used instead
        // serif: ["var(--font-playfair-display)", 'Georgia', 'serif'], 
        // Use 'display' for the Playfair Display variable
        display: ["var(--font-playfair-display)", 'Georgia', 'serif'], 
      },
      // Add any other theme extensions here (e.g., colors)
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}; 