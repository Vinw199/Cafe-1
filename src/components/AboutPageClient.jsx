'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import AnimatedDivider from './AnimatedDivider'; // Import the new component

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

const imageVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

// Move the component logic here
export default function AboutPageClient() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const aboutImagesCount = 2; // We have 2 image placeholders for the "About" section

  const [currentPhilosophyImageIndex, setCurrentPhilosophyImageIndex] = useState(0);
  const philosophyImagesCount = 2; // For the "Philosophy" section

  useEffect(() => {
    const aboutIntervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % aboutImagesCount);
    }, 5000); // Change "About" image every 5 seconds

    const philosophyIntervalId = setInterval(() => {
      setCurrentPhilosophyImageIndex((prevIndex) => (prevIndex + 1) % philosophyImagesCount);
    }, 5500); // Change "Philosophy" image every 5.5 seconds (slightly offset)

    return () => {
      clearInterval(aboutIntervalId);
      clearInterval(philosophyIntervalId);
    };
  }, []);

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

      {/* Main content container with increased spacing between sections */}
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-20 lg:space-y-28">

        {/* Section 1: About Glenroast */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start md:items-center"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Left Column: Text Content */}
          <div className="space-y-5 md:space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-stone-900">
              About Glenroast
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Unlike tea, coffee hasn&apos;t had a smooth cultural journey in Assam—due to factors like limited 
              exposure to quality coffee and scarcity of community coffee spaces. Glenroast aims to change 
              that by introducing specialty coffee to Jorhat as we envision a space where people from all 
              walks of life can explore a variety of coffees tailored to different tastes.
            </p>
            <p className="text-stone-700 leading-relaxed">
              More than just a café, Glenroast will be a lively community space—hosting engaging 
              conversations, offering a co-working zone for remote workers and featuring events like book 
              readings, open mics, live music, and match screenings. Our menu will feature our in-house 
              bakery products, continental dishes including sandwiches, pizzas, burritos and more.
            </p>
            <p className="text-stone-700 leading-relaxed">
              Our mission is simple: to grow the coffee culture in Jorhat and offer a space where people 
              come not just for coffee—but for the experience, the atmosphere, and the connections. The 
              terrace will extend the café experience, offering open-air seating with scenic views of the 
              heritage Club Road and our estate.
            </p>
          </div>

          {/* Right Column: Dynamic Images for About Section */}
          <div className="relative w-full h-[30rem] md:h-[34rem] lg:h-[38rem]"> {/* Container for AnimatePresence, adjust height as needed */}
            <AnimatePresence initial={false}> {/* initial={false} to prevent initial animation if only one item */}
              {[0, 1].map((index) => (
                currentImageIndex === index && (
                  <motion.div 
                    key={index} // Key for AnimatePresence to track items
                    className={`absolute inset-0 w-full h-full overflow-hidden shadow-xl rounded-lg 
                                ${index === 0 ? 'bg-gray-200' : 'bg-gray-100'}`} // Subtle gray backgrounds
                    initial={{ opacity: 0 }} // Start transparent
                    animate={{ opacity: 1 }} // Fade in
                    exit={{ opacity: 0 }}    // Fade out
                    transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition
                    // variants={imageVariant} // Can use if more complex, but opacity is fine for crossfade
                    // whileHover={{ scale: 1.03, zIndex: 10 }} // Hover might be tricky with absolute positioning
                  >
                    {/* Placeholder text, replace with actual <Image /> later */}
                    <span className="absolute inset-0 flex items-center justify-center text-stone-500 italic text-sm">
                      Visual {index + 1}
                    </span>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </motion.section>

        <AnimatedDivider />

        {/* Section 2: Philosophy of Glenroast */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start md:items-center"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Right Column: Text Content (Order changed for visual variation) */}
          <div className="space-y-5 md:space-y-6 md:order-last">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-stone-900">
              Philosophy of Glenroast
            </h2>
            <p className="text-stone-700 leading-relaxed">
              The concept of the neighborhood coffee shop is fading, as commercialization often strips 
              these spaces of their original purpose. At Glenroast, our foremost goal is to rebuild that 
              community spirit—creating a space where people from diverse backgrounds can connect, 
              converse, and contribute to a richer social fabric.
            </p>
            <p className="text-stone-700 leading-relaxed">
              Historically, coffee shops have served as platforms for political, social, and creative 
              movements. We hope to revive that tradition, offering a venue for meaningful and 
              constructive dialogue. Sociologist Robert Putnam calls such spaces "bridging social capital"—
              places where strangers can come together and form bonds.
            </p>
            <p className="text-stone-700 leading-relaxed">
              In line with the global rise of co-working culture, Glenroast also aims to provide an 
              environment where individuals can work efficiently and peacefully while enjoying a cup of 
              coffee.
            </p>
          </div>

          {/* Left Column: Visuals for Philosophy (Order changed) */}
          <div className="md:order-first">
             {/* Container for Philosophy AnimatePresence */}
             <div className="relative w-full h-96 md:h-[450px] lg:h-[30rem] overflow-hidden shadow-xl rounded-lg">
              <AnimatePresence initial={false}>
                {[0, 1].map((index) => (
                  currentPhilosophyImageIndex === index && (
                    <motion.div
                      key={`philosophy-${index}`}
                      className={`absolute inset-0 w-full h-full 
                                  ${index === 0 ? 'bg-neutral-200' : 'bg-neutral-100'}`} // Subtle neutral backgrounds
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      <span className="absolute inset-0 flex items-center justify-center text-sky-700 italic text-sm">
                        Philosophy Visual {index + 1}
                      </span>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.section>


        {/* Join Us - Call to Action Section (Existing) */}
        <motion.section
          className="bg-stone-100 shadow-md p-10 md:p-12 lg:p-16 text-center rounded-lg"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h3 className=" font-semibold uppercase tracking-wider text-amber-600 mb-3 font-display">
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

        {/* Meet the Team Section (Existing) */}
        <motion.section
          // className="py-16 lg:py-20" // This padding is now handled by the main container's space-y
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
                variants={sectionVariant} // Can use a more specific item variant if needed
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