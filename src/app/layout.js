// import { Geist_Mono } from "next/font/google"; 
import { Cabin, Playfair_Display, Oswald } from 'next/font/google'; // Add Cabin, Playfair_Display, and Oswald import
// import { Playfair_Display } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextNProgress from 'nextjs-toploader';

// Add Cabin configuration
const cabin = Cabin({
  subsets: ['latin'],
  variable: '--font-cabin', // Define variable
  display: 'swap',
});

// Add Playfair_Display configuration
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'], // Include desired weights
  variable: '--font-playfair-display', // Define variable
  display: 'swap',
});

// Add Oswald configuration
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Choose appropriate weights for Oswald
  variable: '--font-oswald', // Define CSS variable
  display: 'swap',
});

// Remove all other font configurations

export const metadata = {
  // Define a base URL if needed for absolute URLs in metadata (optional but good practice)
  // metadataBase: new URL('https://yourdomain.com'), 
  title: {
    default: 'GLENROAST', // Default title for homepage
    template: '%s - GLENROAST', // Template for other pages
  },
  description: "Specialty coffee, community hub, and quality goods in Jorhat, Assam.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${oswald.variable}`}>
      <body
        className={`${cabin.className} font-sans antialiased flex flex-col min-h-screen`}
      >
        <NextNProgress 
          color="#d97706"
          height={3} 
          showSpinner={false}
        />
        <Navbar />
        <main className="relative z-20 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}