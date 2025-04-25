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
    // Re-add subtle background and top margin
    <footer className="text-stone-800 body-font bg-stone-50 mt-16">
      {/* Adjust layout for responsiveness */}
      <div className="max-w-7xl container px-5 py-10 mx-auto flex items-center justify-between flex-wrap md:flex-nowrap gap-8 md:gap-4">
        {/* Section 1: Logo/Address - Use whileInView */}
        <motion.div
          className="flex-shrink-0 w-full md:w-64 text-center md:text-left mb-8 md:mb-0"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ ...baseTransition, delay: 0.1 }}
        >
          <Link href="/" className="flex title-font font-medium items-center justify-center md:justify-start text-stone-800">
            <span className="text-xl font-bold uppercase font-serif">GLENROAST</span>
          </Link>
          <p className="mt-2 text-sm text-gray-600">
            123 Cafe Street, Jorhat, Assam
          </p>
        </motion.div>

        {/* Section 2: Copyright/Links - Use whileInView */}
        <motion.div
          className="w-full md:w-auto text-center md:text-left mb-8 md:mb-0"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ ...baseTransition, delay: 0.2 }}
        >
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} GLENROAST — All rights reserved.
          </p>
          <nav className="mt-2 text-sm">
            <Link href="/privacy-policy" className="text-gray-600 hover:text-stone-800 mr-4">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-600 hover:text-stone-800">Terms</Link>
          </nav>
        </motion.div>

        {/* Section 3: Newsletter Signup - Use whileInView */}
        <motion.div
          className="w-full md:w-auto text-center md:text-left"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ ...baseTransition, delay: 0.3 }}
        >
          <label htmlFor="footer-email" className="text-sm font-medium text-gray-700 block mb-2 md:text-left">
            Sign up for news and updates
          </label>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start">
            <input
              type="email"
              id="footer-email"
              name="email"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 w-full sm:max-w-xs mb-2 sm:mb-0 sm:mr-2"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-700 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 whitespace-nowrap cursor-pointer"
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