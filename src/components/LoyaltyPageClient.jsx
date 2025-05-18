'use client';

import React from 'react';
// Image import is no longer needed if hero image is removed
// import Image from 'next/image'; 
import { motion } from 'framer-motion';

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// New animation variant for the title - expands from center
const scaleInFromCenter = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } // Smoother easing
  }
};

// For main card container stagger
const staggerCardsContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // How much to delay each card animation
      delayChildren: 0.1,  
    },
  },
};

// For individual card scale up
const cardScaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// For staggering content inside each card (image, title, description)
const contentStaggerInsideCard = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Delay between image, title, description
      delayChildren: 0.2, // Delay after card scales up before content starts animating
    },
  },
};

// For individual content items (image, title, desc) within the card
const contentFadeInUp = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

// Placeholder data
const loyaltyBenefits = [
  {
    id: 1,
    title: 'Your 7th Coffee\'s on Us',
    description: 'Pick up a Glenroast Loyalty Card and collect a stamp with each coffee you purchase. Once you\'ve collected six stamps—marked by our charming coffee symbols—your 7th cup is absolutely free! After that, we\'ll issue you a fresh card to start the journey all over again. A small way to say we appreciate you coming back.',
    bgColor: 'bg-stone-200' // Placeholder color for card 1
  },
  {
    id: 2,
    title: 'Exclusive Invites for Regular Guests',
    description: 'We host a range of events at Glenroast—from cozy book readings and lively open mic nights to live music sessions and match screenings. Our regulars receive special invites to these happenings before anyone else. It\'s our way of building a warm, connected community around shared moments.',
    bgColor: 'bg-amber-100' // Placeholder color for card 2
  },
  {
    id: 3,
    title: 'Student Perks',
    description: 'We see you, students! Show us a valid student ID from your college or university and enjoy a special discount on all beverages. Whether it\'s your study coffee or your post-class wind-down tea, we\'re here to keep you refreshed without breaking the bank.',
    bgColor: 'bg-emerald-100' // Placeholder color for card 3
  },
];

const LoyaltyPageClient = () => {
  return (
    <div className="min-h-screen">
      {/* Solid Color Hero Section with Title */}
      <motion.section 
        className="relative w-full h-96 sm:h-[500px] bg-stone-800 flex flex-col justify-center items-center text-center" // Changed to bg-stone-800
        initial="hidden" 
        animate="visible" 
        variants={fadeIn} 
      >
        {/* Image component and overlay div are removed */}
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display text-shadow-md"
          variants={scaleInFromCenter} 
        >
          Loyalty at Glenroast
        </motion.h1>
      </motion.section>

      {/* Introductory Paragraph Section (styled like Menu Page title block) */}
      <motion.section
        className="py-12 sm:py-16 bg-stone-100" 
        initial="hidden"
        animate="visible" 
        variants={fadeIn} 
        transition={{delay: 0.3}} 
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p 
            className="text-lg sm:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp} 
          >
            We believe in rewarding the wonderful people who make Glenroast what it is—our regulars, 
            our students, and our community. Here's how we say thank you:
          </motion.p>
        </div>
      </motion.section>

      {/* Loyalty Benefits Showcase - Grid Layout (Card animations remain as per Option B) */}
      <motion.section 
        className="py-12 sm:py-16" 
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, amount: 0.1 }} 
        variants={staggerCardsContainer} 
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {loyaltyBenefits.map((benefit) => (
              <motion.div 
                key={benefit.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out"
                variants={cardScaleUp} 
              >
                <motion.div variants={contentStaggerInsideCard}> 
                  <motion.div 
                    className={`relative w-full h-56 sm:h-64 ${benefit.bgColor}`} // Apply bgColor here
                    variants={contentFadeInUp}
                  >
                    {/* img tag removed, using background color as placeholder */}
                  </motion.div>
                  <div className="p-8 flex flex-col flex-grow">
                    <motion.h3 
                      className="text-2xl font-semibold text-stone-800 mb-4 font-display"
                      variants={contentFadeInUp}
                    >
                      {benefit.title}
                    </motion.h3>
                    <motion.p 
                      className="text-stone-600 text-base leading-relaxed flex-grow"
                      variants={contentFadeInUp}
                    >
                      {benefit.description}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Optional: Call to action or concluding remarks */}
      <motion.section 
        className="pb-12 sm:pb-16 pt-4" 
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, amount: 0.3 }} 
        variants={fadeInUp} 
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg text-stone-700 leading-relaxed">
              Pop in today and start enjoying your Glenroast rewards!
            </p>
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default LoyaltyPageClient; 