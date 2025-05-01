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

const ContactPageClient = () => { // Renamed component

  // Adjusted delays slightly for 3 columns
  const contactInfoVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } // Slightly earlier
    }
  };

  const visitUsVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 } // Middle delay
    }
  };

  const formVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } // Slightly later
    }
  };

  return (
    // Increased vertical padding
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      {/* Use lg:grid-cols-12 and assign specific spans */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-x-16 xl:gap-x-20"> {/* Adjusted gap */}
        
        {/* Column 1: Split into Location, Hours, Contact */}
        <motion.div
          className="lg:col-span-3 space-y-10" // Added space-y-10 for spacing between new sections
          variants={contactInfoVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Removed H2 */} 

          {/* Location Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-stone-800 font-display">Location</h3>
            <div className="flex items-start gap-3 text-stone-700">
              <MapPinIcon className="h-6 w-6 text-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span>Club Road, Jorhat : 785001</span>
            </div>
          </div>

          {/* Hours Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-stone-800 font-display">Hours</h3>
            <div className="flex items-start gap-3 text-stone-700">
              <ClockIcon className="h-6 w-6 text-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                All days: 10am - 10pm<br />
                Sundays: closed
              </span>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4"> {/* Slightly more space within this section */}
            <h3 className="text-xl font-semibold text-stone-800 font-display">Contact</h3>
            {/* Phone */}
            <div className="flex items-start gap-3">
              <PhoneIcon className="h-6 w-6 text-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <a href="tel:+919834803384" className="text-amber-800 hover:text-amber-600 transition-colors duration-200 ease-in-out font-medium">
                +91 98348 03384
              </a>
            </div>
            {/* Email */}
            <div className="flex items-start gap-3">
              <EnvelopeIcon className="h-6 w-6 text-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <a href="mailto:hello@alag.co" className="text-amber-800 hover:text-amber-600 transition-colors duration-200 ease-in-out font-medium">
                hello@alag.co
              </a>
            </div>
          </div>
        </motion.div>

        {/* Column 2: Visit Us/Map Section - Assign lg:col-span-4 */}
        <motion.div
          className="lg:col-span-4" // Added col-span
          variants={visitUsVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* <h2 className="text-3xl font-semibold text-stone-900 mb-4 font-serif">Visit Us</h2> */}
          <div className="aspect-[3/4] relative overflow-hidden bg-stone-200 rounded-md shadow-sm"> {/* Slightly different aspect ratio, rounded, shadow */}
            {/* Map Image Placeholder - consider embedding a real map */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-stone-500 italic text-center px-4">Map visualization will be embedded here.</p> {/* Improved placeholder */}
            </div>
            {/* Example using Next/Image if you have a static map image */}
            {/* 
            <Image
              src="/images/static-map-placeholder.png" // Replace with your actual map image
              alt="Map showing GLENROAST cafe location in Jorhat"
              layout="fill"
              objectFit="cover"
              className=""
            />
            */}
          </div>
        </motion.div>

        {/* Column 3: Contact Form - Assign lg:col-span-5, removed background/padding */}
        <motion.div
          className="space-y-8 lg:col-span-5" // Removed conditional styling, Added col-span
          variants={formVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-3xl font-semibold text-stone-900 font-display">Send a Message</h2>
          <form action="#" method="POST" className="space-y-6">
            {/* Full Name Field */}
            <div>
              <label htmlFor="full-name" className="block text-sm font-medium text-stone-800 mb-1.5"> {/* Slightly more bottom margin */}
                Full Name <span className="text-stone-500 text-xs">(required)</span> {/* Adjusted color */}
              </label>
              <input
                type="text"
                name="full-name"
                id="full-name"
                required
                className="block w-full rounded-md border-stone-300 shadow-sm focus:border-amber-600 focus:ring-amber-600 sm:text-sm py-2.5 px-3 placeholder-stone-400" // Adjusted border/focus colors
                placeholder="Your Full Name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-800 mb-1.5">
                Email <span className="text-stone-500 text-xs">(required)</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                autoComplete="email"
                className="block w-full rounded-md border-stone-300 shadow-sm focus:border-amber-600 focus:ring-amber-600 sm:text-sm py-2.5 px-3 placeholder-stone-400"
                placeholder="you@example.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-800 mb-1.5">
                Message <span className="text-stone-500 text-xs">(required)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="block w-full rounded-md border-stone-300 shadow-sm focus:border-amber-600 focus:ring-amber-600 sm:text-sm py-2.5 px-3 placeholder-stone-400"
                placeholder="How can we help?"
                defaultValue={''}
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled // Disable until implemented
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-700 hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600 disabled:opacity-50 transition-colors duration-200 ease-in-out" // Increased padding, darker hover
              >
                Send Message (Disabled)
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactPageClient; // Exporting the renamed component 