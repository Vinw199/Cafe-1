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
      fontFamily: {
        // Set Poppins as the default sans-serif font
        sans: ["var(--font-poppins)", ...fontFamily.sans],
        // Define Lora as the serif font
        serif: ["var(--font-lora)", ...fontFamily.serif],
        // Keep Geist available if needed
        geist: ["var(--font-geist-sans)"],
        geistMono: ["var(--font-geist-mono)"],
      },
      // Add any other theme extensions here (e.g., colors)
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}; 