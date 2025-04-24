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
    <footer className="text-[#3A3A3A] body-font">
      <div className="max-w-7xl container px-5 py-10 mx-auto flex items-center justify-between flex-wrap md:flex-nowrap">
        <motion.div
          className="flex-shrink-0 w-64 md:mx-0 text-left mb-8 md:mb-0"
          initial="hidden"
          animate="visible"
          variants={initialLoadVariants}
          transition={{ ...baseTransition, delay: 0 }}
        >
          <Link href="/" className="flex title-font font-medium items-center justify-start text-[#3A3A3A]">
            <span className="text-xl font-bold lowercase">guglu.</span>
          </Link>
          <p className="mt-2 text-sm text-gray-500">
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
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Guglu's Cafe — All rights reserved.
          </p>
          <nav className="mt-2 text-sm">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-700 mr-4">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-700">Terms</Link>
          </nav>
        </motion.div>

        <motion.div
          className="w-full md:w-auto mx-auto md:mx-0 text-left md:text-right"
          initial="hidden"
          animate="visible"
          variants={initialLoadVariants}
          transition={{ ...baseTransition, delay: 0.2 }}
        >
          <label htmlFor="footer-email" className="text-sm font-medium text-gray-500">Sign up for news and updates</label>
          <div className="mt-2 flex flex-col md:flex-row justify-start md:justify-end">
            <input
              type="email"
              id="footer-email"
              name="email"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs w-full mb-2 md:mb-0 md:mr-2"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#3A3A3A] hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 whitespace-nowrap cursor-pointer"
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