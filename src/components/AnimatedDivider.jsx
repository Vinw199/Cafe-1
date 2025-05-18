'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Define animation variants for the divider
const bridgeParentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      when: "beforeChildren",
    }
  }
};

const hrVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function AnimatedDivider() {
  return (
    <motion.div
      className="text-center py-2" // Restored padding
      variants={bridgeParentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        className="inline-flex items-center justify-center w-full"
      >
        <motion.hr
          className="w-24 h-px bg-stone-400 border-0 dark:bg-stone-600"
          variants={hrVariants}
          style={{ originX: 1 }} // Draw from right to left (towards center)
        />
        <motion.span
          className="mx-4 text-stone-400 dark:text-stone-500 text-2xl"
          variants={iconVariants}
        >
          ❦
        </motion.span>
        <motion.hr
          className="w-24 h-px bg-stone-400 border-0 dark:bg-stone-600"
          variants={hrVariants}
          style={{ originX: 0 }} // Draw from left to right (towards center)
        />
      </motion.div>
    </motion.div>
  );
} 