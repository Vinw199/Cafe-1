'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Define animation variants here or import
const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const sectionVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Move the component logic here
export default function AboutPageClient() {
  return (
    <div>
      {/* Hero Image Banner */}
      <motion.div
        className="h-80 md:h-96 lg:h-[500px] w-full bg-stone-300 relative overflow-hidden"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        {/* Placeholder Div for Hero */}
        <div className="absolute inset-0 bg-stone-800 opacity-90"></div>
        {/* Optional overlay if needed later 
         <div className="absolute inset-0 bg-black bg-opacity-10"></div> 
         */}
      </motion.div>

      {/* Restore: Original container for centering and spacing */}
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-16 lg:py-24">

        {/* Our Vision Section */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-24"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Left Column: Text Content */}
          <div className="space-y-6">
            <h2
              className="text-3xl md:text-4xl font-bold font-display text-stone-900 mb-6"
            >
              Our Vision
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Unlike tea, coffee hasn&apos;t had a smooth cultural journey in Assam—due to factors like limited exposure, lack of quality options, and a scarcity of community coffee spaces. Glenroast aims to change that by introducing specialty coffee to Jorhat. We envision a space where people from all walks of life can explore a variety of coffees tailored to different tastes.
            </p>
            <p className="text-stone-700 leading-relaxed">
              More than just a café, Glenroast strives to be a lively community hub—hosting engaging conversations, offering a co-working zone, and featuring events like book readings, open mics, live music, and match screenings. Our terrace extends the experience, offering open-air seating with scenic views.
            </p>
            <p className="text-stone-700 leading-relaxed">
              The concept of the neighborhood coffee shop is fading. At Glenroast, our foremost goal is to rebuild that community spirit—creating a space where diverse backgrounds connect, converse, and contribute to a richer social fabric. We hope to revive the tradition of coffee shops as platforms for meaningful dialogue, fostering what sociologist Robert Putnam calls &quot;bridging social capital.&quot;
            </p>
            <p className="text-stone-700 leading-relaxed">
              Let&apos;s nurture the spirit of community—one cup, one conversation at a time.
            </p>
          </div>

          {/* Right Column: Supporting Images - Reworked Layout */}
          <div className="md:mt-12">
             <div className="flex items-center justify-center md:justify-start gap-6 md:gap-10">
                {/* Image 1 (Placeholder) */}
                <motion.div 
                 className="relative w-1/2 h-72 md:h-[350px] overflow-hidden shadow-lg -translate-y-8 bg-stone-200"
                 variants={sectionVariant}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.1 }}
                 whileHover={{ scale: 1.05 }}
                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                 {/* <span className="absolute inset-0 flex items-center justify-center text-stone-500 italic text-xs">Vision Image 1</span> */} 
                </motion.div>
                 {/* Image 2 (Placeholder) */}
                <motion.div 
                 className="relative w-1/2 h-72 md:h-[350px] overflow-hidden shadow-lg translate-y-8 bg-stone-200"
                 variants={sectionVariant}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.1 }}
                 transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                 whileHover={{ scale: 1.05 }}
                >
                 {/* <span className="absolute inset-0 flex items-center justify-center text-stone-500 italic text-xs">Vision Image 2</span> */} 
                </motion.div>
             </div>
          </div>
        </motion.section>

        {/* Join Us - Call to Action Section */}
        <motion.section
          className="bg-stone-100 shadow-md p-12 lg:p-16 my-16 lg:my-24 text-center"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-600 mb-3 font-display">
            Join Our Team
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-stone-900 mb-5">
            Be Part of the Glenroast Story
          </h2>
          <p className="text-stone-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            We&apos;re passionate about coffee, community, and creating memorable experiences. If you share our vision, we&apos;d love to hear from you.
          </p>
          <Link href="/contact">
             <motion.span
              className="inline-flex items-center bg-amber-600 text-white font-medium py-3 px-8 rounded-md shadow hover:bg-amber-700 transition-colors duration-200 ease-in-out cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              Reach Out
              <span className="ml-2">→</span>
            </motion.span>
          </Link>
        </motion.section>

        {/* Meet the Team Section */}
        <motion.section
          className="py-16 lg:py-20"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-stone-900 mb-12 text-center">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[1, 2, 3, 4].map((memberId) => (
              <motion.div
                key={memberId}
                className="text-center"
                variants={sectionVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="aspect-square bg-stone-300 rounded-lg mb-4 shadow-md flex items-center justify-center overflow-hidden relative">
                  <p className="text-stone-500 italic text-sm">Team Photo</p>
                </div>
                <p className="font-medium text-lg text-stone-800">Team Member Name</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
} 