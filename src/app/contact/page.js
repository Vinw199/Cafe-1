'use client'; // Add client directive for motion

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const ContactPage = () => {

  // Define variants with specific delays for initial load
  const contactInfoVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } // Base delay
    }
  };

  const visitUsVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.5 } // Base delay + stagger
    }
  };

  const formVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } // Base delay + small offset
    }
  };

  return (
    // Reduced top padding
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-16 lg:pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        {/* Left Column: Contains the two animated sections */}
        <div className="space-y-16">
          {/* Contact Info Section - use specific variant */}
          <motion.div
            className="space-y-6"
            variants={contactInfoVariant} // Use specific variant
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="text-3xl font-semibold text-stone-900 font-serif">Contact Info</h2>
            <div className="space-y-4 text-gray-700">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPinIcon className="h-6 w-6 text-stone-800 flex-shrink-0" aria-hidden="true" />
                <span>Club Road, Jorhat : 785001</span>
              </div>
              {/* Hours */}
              <div className="flex items-start gap-3">
                <ClockIcon className="h-6 w-6 text-stone-800 flex-shrink-0" aria-hidden="true" />
                <span>
                  All days: 10am - 10pm<br />
                  Sundays: closed
                </span>
              </div>
              {/* Phone */}
              <div className="flex items-start gap-3">
                <PhoneIcon className="h-6 w-6 text-stone-900 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+919834803384" className="text-amber-700 hover:text-amber-600 transition-colors duration-200 ease-in-out">
                  +91 98348 03384
                </a>
              </div>
              {/* Email */}
              <div className="flex items-start gap-3">
                <EnvelopeIcon className="h-6 w-6 text-stone-900 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:hello@alag.co" className="text-amber-700 hover:text-amber-600 transition-colors duration-200 ease-in-out">
                  hello@alag.co
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map Section - use specific variant */}
          <motion.div
            variants={visitUsVariant} // Use specific variant
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          // Removed explicit transition prop
          >
            <h2 className="text-3xl font-semibold text-stone-900 mb-4 font-serif">Visit Us</h2>
            <div className="aspect-video relative overflow-hidden bg-gray-200">
              {/* 
              <Image
                src="/path/to/your/map-image.jpg" // *** REPLACE THIS PATH ***
                alt="Map showing cafe location"
                layout="fill"
                objectFit="cover"
                className=""
              />
              */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500 italic">Map Image Here</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Contact Form */}
        <motion.div
          className="space-y-8"
          variants={formVariant} // Use specific variant
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-3xl font-semibold text-stone-900 font-serif">Send a Message</h2>
          <form action="#" method="POST" className="space-y-6">
            {/* Full Name Field */}
            <div>
              <label htmlFor="full-name" className="block text-sm font-medium text-stone-800 mb-1">
                Full Name <span className="text-gray-600 text-xs">(required)</span>
              </label>
              <input
                type="text"
                name="full-name"
                id="full-name"
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm py-2.5 px-3"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-800 mb-1">
                Email <span className="text-gray-600 text-xs">(required)</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                autoComplete="email"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm py-2.5 px-3"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-800 mb-1">
                Message <span className="text-gray-600 text-xs">(required)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm py-2.5 px-3"
                defaultValue={''}
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled // Disable until implemented
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-700 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50"
              >
                Submit (Disabled)
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactPage; 