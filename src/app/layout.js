import { Geist, Geist_Mono } from "next/font/google";
import { Cabin, Lora } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextNProgress from 'nextjs-toploader';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cabin = Cabin({
  subsets: ['latin'],
  variable: '--font-cabin',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
});

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cabin.className} ${lora.className} font-sans antialiased flex flex-col min-h-screen`}
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
