'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {

  const initialLoadVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const baseTransition = { duration: 0.5, ease: "easeOut" };

  return (
    <footer className="text-stone-800 body-font">
      <div className="max-w-7xl container px-5 py-10 mx-auto flex items-center justify-between flex-wrap md:flex-nowrap">
        <motion.div
          className="flex-shrink-0 w-64 md:mx-0 text-left mb-8 md:mb-0"
          initial="hidden"
          animate="visible"
          variants={initialLoadVariants}
          transition={{ ...baseTransition, delay: 0 }}
        >
          <Link href="/" className="flex title-font font-medium items-center justify-start text-stone-800">
            <span className="text-xl font-bold uppercase font-serif">GLENROAST</span>
          </Link>
          <p className="mt-2 text-sm text-gray-600">
            123 Cafe Street, Jorhat, Assam
          </p>
        </motion.div>

        <motion.div
          className="text-left mb-8 md:mb-0"
          initial="hidden"
          animate="visible"
          variants={initialLoadVariants}
          transition={{ ...baseTransition, delay: 0.1 }}
        >
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} GLENROAST — All rights reserved.
          </p>
          <nav className="mt-2 text-sm">
            <Link href="/privacy-policy" className="text-gray-600 hover:text-stone-800 mr-4">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-600 hover:text-stone-800">Terms</Link>
          </nav>
        </motion.div>

        <motion.div
          className="w-full md:w-auto mx-auto md:mx-0 text-left md:text-right"
          initial="hidden"
          animate="visible"
          variants={initialLoadVariants}
          transition={{ ...baseTransition, delay: 0.2 }}
        >
          <label htmlFor="footer-email" className="text-sm font-medium text-gray-700">Sign up for news and updates</label>
          <div className="mt-2 flex flex-col md:flex-row justify-start md:justify-end">
            <input
              type="email"
              id="footer-email"
              name="email"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:max-w-xs w-full mb-2 md:mb-0 md:mr-2"
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