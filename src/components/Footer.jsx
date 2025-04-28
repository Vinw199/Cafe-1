'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {

  // Re-define sectionVariant for scroll animations
  const sectionVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Base transition for delays
  const baseTransition = { duration: 0.6, ease: "easeOut" };

  return (
    <footer className="text-stone-800 body-font bg-stone-50">
      <div className="max-w-7xl container px-5 py-10 mx-auto flex items-center justify-center md:justify-between flex-wrap gap-y-8 gap-x-12">

        {/* Section 1: Logo/Address */}
        <motion.div
          className="flex-shrink-0 w-full sm:w-auto text-center md:text-left"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ ...baseTransition, delay: 0.1 }}
        >
          <Link href="/" className="flex title-font font-medium items-center justify-center md:justify-start text-stone-900 mb-2">
            <span className="text-2xl font-bold uppercase font-serif">GLENROAST</span>
          </Link>
          <p className="text-sm text-stone-700">
            Club Road, Jorhat, Assam
          </p>
        </motion.div>

        {/* Section 2: Copyright/Links */}
        <motion.div
          className="w-full sm:w-auto text-center"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ ...baseTransition, delay: 0.2 }}
        >
          <p className="text-sm text-stone-700">
            © {new Date().getFullYear()} GLENROAST — All rights reserved.
          </p>
          <nav className="mt-2 text-sm">
            <Link href="/privacy-policy" className="text-stone-700 hover:text-stone-900 mr-4">Privacy Policy</Link>
            <Link href="/terms" className="text-stone-700 hover:text-stone-900">Terms</Link>
          </nav>
        </motion.div>

        {/* Section 3: Social Links */}
        <motion.div
          className="w-full sm:w-auto text-center"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ ...baseTransition, delay: 0.25 }}
        >
          <span className="inline-flex justify-center sm:justify-start">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-800 ml-3">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-800 ml-3">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </span>
        </motion.div>

        {/* Section 4: Newsletter Signup */}
        <motion.div
          className="w-full sm:w-auto text-center md:text-left"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ ...baseTransition, delay: 0.3 }}
        >
          <label htmlFor="footer-email" className="text-sm font-medium text-stone-800 block mb-2">
            Sign up for news and updates
          </label>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start">
            <input
              type="email"
              id="footer-email"
              name="email"
              className="px-4 py-2 border border-stone-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 w-full sm:max-w-xs mb-2 sm:mb-0 sm:mr-2"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-700 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 whitespace-nowrap cursor-pointer mt-2 sm:mt-0"
            >
              Sign Up
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 