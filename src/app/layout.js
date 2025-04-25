import { Geist, Geist_Mono } from "next/font/google";
import { Poppins, Lora } from 'next/font/google';
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

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata = {
  title: "GLENROAST - Jorhat",
  description: "Specialty coffee, community hub, and quality goods in Jorhat, Assam.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${lora.variable} font-sans antialiased flex flex-col min-h-screen`}
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
