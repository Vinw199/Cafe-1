'use client'; // Mark as client component for Framer Motion

import React from 'react';
import { motion } from 'framer-motion';
import {
  UserGroupIcon,
  UsersIcon,
  ShoppingCartIcon,
  BuildingStorefrontIcon,
  ShieldCheckIcon,
  ArrowPathRoundedSquareIcon
} from '@heroicons/react/24/outline'; // Import chosen icons
import AnimatedDivider from './AnimatedDivider'; // Import the new component

// Placeholder data - replace with actual data when file is read
// Updated policies based on Dine-in policy.txt, separating sub-headings
const policies = [
  {
    title: 'General Conduct & Atmosphere',
    icon: UserGroupIcon,
    points: [
      { subHeading: "Creating a Welcoming Space:", description: "We kindly ask that you treat our team and fellow guests with courtesy. Any disruptive actions or inappropriate behavior may result in service being declined, as we aim to provide a safe and pleasant environment for all." },
      { subHeading: "Quiet Ambience Appreciated:", description: "To preserve a peaceful setting, we encourage keeping conversations at a moderate, respectful volume." },
      { subHeading: "Children Are Welcome:", description: "To ensure a comfortable experience for everyone, children should remain under adult supervision at all times." },
      { subHeading: "Help Us Stay Clean:", description: "Please dispose of any waste in the proper bins and help us maintain a clean and enjoyable space." },
      { subHeading: "Keep Your Items Close:", description: "We recommend keeping your belongings with you at all times, as we cannot take responsibility for items that are lost or stolen." }
    ]
  },
  // {
  //   title: 'Seating & Groups',
  //   icon: UsersIcon, // Added icon
  //   points: [
  //     { subHeading: "Group Size:", description: "To ensure a comfortable experience in our space, we can accommodate dine-in groups of up to 6 people. For larger groups, please consider placing a takeaway order." },
  //     { subHeading: "Busy Hours:", description: "Our cafe has limited seating. During peak times, seating may be limited, and accommodating larger groups might be challenging. We appreciate your patience and understanding. Takeaway orders are always welcome." },
  //     { subHeading: "Wait Times:", description: "During busy periods, food and drink orders may take a little longer to prepare. We appreciate your patience as we craft everything with care." }
  //   ]
  // },
  {
    title: 'Food, Drink & Ordering',
    icon: ShoppingCartIcon,
    points: [
      { subHeading: "Enjoy What We Offer:", description: "We take pride in our carefully crafted menu, and we kindly ask that you enjoy only the food and drinks provided by us while you're here. Outside items aren't allowed." },
      { subHeading: "Winding Down for the Day:", description: "Our final orders are usually accepted by 9:30 PM. Depending on how the kitchen is running, late orders might be packaged to go. We close our doors right at 10:00 PM." },
      { subHeading: "Payment Preferences:", description: "For a smoother and more secure experience, we encourage cashless transactions whenever possible." }
    ]
  },
  {
    title: 'Environment & Tech Policy',
    icon: BuildingStorefrontIcon,
    points: [
      { subHeading: "A Space to Unwind and Connect:", description: "Our café is meant to be a comfortable spot to relax, chat, and be present—whether you're here for a quiet break or to get some work done. Free Wi-Fi is available for all guests. Laptops are welcome—just settle in and make yourself comfortable." },
      { subHeading: "Smoking Policy:", description: "Smoking and vaping aren't allowed indoors. However, you're welcome to use our terrace, where ashtrays are provided for your convenience." },
      { subHeading: "Pet Policy:", description: "While we love animals, pets are not allowed inside the café. Thanks for understanding." },
      { subHeading: "Reusable Cups:", description: "Join us in supporting a greener future—bring your reusable cup and receive a small discount as a thank-you for helping cut down on single-use waste." }
    ]
  },
  {
    title: 'Safety & Legal',
    icon: ShieldCheckIcon,
    points: [
      { subHeading: "Parking Considerately:", description: "Please avoid blocking any gates or driveways when parking near the café, out of respect for our neighbors. Street parking is available, but at your own discretion and risk." },
      { subHeading: "Restroom Use:", description: "Our restrooms are for the convenience of our guests who've made a purchase. We appreciate your help in keeping them clean and tidy for the next person." },
      { subHeading: "Substance Policy:", description: "Illegal substances are not allowed anywhere on our premises. We maintain a safe and respectful environment for all." },
      { subHeading: "Photography Notice:", description: "We occasionally take photos or videos in the café to showcase our space online. If you'd prefer not to be included in any images, just let one of our team members know—we're happy to respect your privacy." }
    ]
  },
  // {
  //   title: 'Sustainability',
  //   icon: ArrowPathRoundedSquareIcon, // Added icon
  //   points: [
  //     { subHeading: "Reusable Cups:", description: "We encourage sustainability! Bring your own reusable cup for a small discount on your drink." }
  //   ]
  // }
];

// Updated animation variants for staggering
const sectionVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function DineInPolicyPageClient() { // Renamed the component
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-16 lg:pb-24">
      <div className="md:grid md:grid-cols-3 md:gap-12 lg:gap-16">
        {/* Sticky Title Column (Left) */}
        <div className="md:col-span-1 md:sticky md:top-24 h-fit mb-12 md:mb-0 text-center md:text-left">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 font-display"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Cafe Policies
          </motion.h1>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A quick guide to ensure a comfortable experience for everyone.
          </motion.p>
        </div>

        {/* Policy Content Column (Right) */}
        <div className="md:col-span-2 space-y-8">
          <motion.p
            className="mb-8 px-6 text-gray-700"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Welcome to GLENROAST! To help create a pleasant and respectful environment for everyone, we kindly invite you to
            keep the following guidelines in mind during your time with us.
          </motion.p>

          {policies.map((policy, index) => (
            <React.Fragment key={index}> {/* Use React.Fragment to group section and divider */}
              <motion.section
                className={`px-6 py-6`} /* Removed border and adjusted padding */
                variants={sectionVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {policy.icon && <policy.icon className="h-6 w-6 text-stone-900 flex-shrink-0" aria-hidden="true" />}
                  <h2 className="text-2xl font-semibold text-stone-900 font-display">{policy.title}</h2>
                </div>
                <div className="space-y-2 text-gray-700 leading-relaxed mt-2 pl-[calc(1.5rem+0.75rem)]">
                  {policy.points.map((point, pIndex) => (
                    <p key={pIndex}>
                      {point.subHeading && <strong className="font-semibold text-stone-900">{point.subHeading}</strong>}
                      {point.subHeading ? ' ' : ''}
                      {point.description}
                    </p>
                  ))}
                </div>
              </motion.section>
              {index < policies.length - 1 && <AnimatedDivider />} {/* Add divider if not the last item */}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
} 