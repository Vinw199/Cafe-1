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

// Placeholder data - replace with actual data when file is read
// Updated policies based on Dine-in policy.txt, separating sub-headings
const policies = [
  {
    title: 'General Conduct & Atmosphere',
    icon: UserGroupIcon, // Added icon
    points: [
      { subHeading: "Respectful Environment:", description: "Please treat our staff and fellow patrons with kindness and respect. Disruptive behavior or harassment will not be tolerated. We reserve the right to refuse service to ensure the safety and comfort of everyone." },
      { subHeading: "Mindful Noise Levels:", description: "Help us maintain a calm and relaxing atmosphere by keeping conversations at a considerate volume." },
      { subHeading: "Children:", description: "For safety and the comfort of all guests, children must be supervised by an adult at all times." },
      { subHeading: "Cleanliness:", description: "Please use the designated bins for trash and help us keep our space tidy for everyone to enjoy." },
      { subHeading: "Personal Belongings:", description: "Please keep your personal items secure and with you. We cannot be responsible for lost or stolen belongings." }
    ]
  },
  {
    title: 'Seating & Groups',
    icon: UsersIcon, // Added icon
    points: [
      { subHeading: "Group Size:", description: "To ensure a comfortable experience in our space, we can accommodate dine-in groups of up to [e.g., 6] people. For larger groups, please consider placing a takeaway order." }, // Placeholder
      { subHeading: "Busy Hours:", description: "Our cafe has limited seating. During peak times, seating may be limited, and accommodating larger groups might be challenging. We appreciate your patience and understanding. Takeaway orders are always welcome." },
      { subHeading: "Wait Times:", description: "During busy periods, food and drink orders may take a little longer to prepare. We appreciate your patience as we craft everything with care." }
    ]
  },
  {
    title: 'Food, Drink & Ordering',
    icon: ShoppingCartIcon, // Added icon
    points: [
      { subHeading: "Our Menu Only:", description: "We pour a lot of love into our menu! Please enjoy our food and beverages exclusively during your visit; outside food or drinks are not permitted." },
      { subHeading: "Closing Time:", description: "Our last order is typically taken around [e.g., 6:15 PM]. Orders placed near closing may be served as takeaway depending on kitchen status. We close promptly at [e.g., 6:45 PM]." }, // Placeholders
      { subHeading: "Payments:", description: "We prefer cashless payments for convenience and safety." }
    ]
  },
  {
    title: 'Our Environment & Tech Policy',
    icon: BuildingStorefrontIcon, // Added icon
    points: [
      { subHeading: "Focus on Connection:", description: "We aim to be a place for relaxation, conversation, and enjoying the moment. To support this atmosphere:" },
      { subHeading: null, description: "- We do not offer public Wi-Fi." }, // Treat list items as separate points
      { subHeading: null, description: "- We kindly request that laptops not be used within the cafe." },
      { subHeading: "Business Meetings:", description: "To maintain our calm environment, formal business dealings or serious meetings are not suitable for our space." },
      { subHeading: "Smoking:", description: "Smoking (including e-cigarettes) is not permitted inside. A designated outdoor area is available; please use the ashtrays provided." },
      { subHeading: "Pets:", description: "Well-behaved, leashed pets are welcome in our designated outdoor seating area only. Pets are not permitted inside the cafe." }
    ]
  },
  {
    title: 'Safety & Legal',
    icon: ShieldCheckIcon, // Added icon
    points: [
      { subHeading: "Parking:", description: "Please be mindful of our neighbours and do not block any gates when parking. Roadside parking is at your own risk." },
      { subHeading: "Restrooms:", description: "Restrooms are available for paying customers only. Please help keep them clean." },
      { subHeading: "Prohibited Substances:", description: "The use or possession of illegal substances is strictly prohibited on our premises." },
      { subHeading: "Photography:", description: "We sometimes take photos or videos in the cafe for promotional purposes (like social media or our website) that capture the cafe's ambiance. If you prefer not to be prominently featured, please let a team member know." }
    ]
  },
  {
    title: 'Sustainability',
    icon: ArrowPathRoundedSquareIcon, // Added icon
    points: [
      { subHeading: "Reusable Cups:", description: "We encourage sustainability! Bring your own reusable cup for a small discount on your drink." }
    ]
  }
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

export default function DineInPolicyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="md:grid md:grid-cols-3 md:gap-8 lg:gap-12">
        {/* Sticky Title Column (Left) */}
        <div className="md:col-span-1 md:sticky md:top-24 h-fit mb-12 md:mb-0 text-center md:text-left">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-[#3A3A3A] mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Cafe Policies
          </motion.h1>
          {/* Optional: Add a short description here */}
          <motion.p 
            className="text-gray-500"
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
            className="mb-8 px-6 text-gray-600"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Welcome to [Your Cafe Name]! To help ensure a comfortable and enjoyable experience for all our guests and staff, we kindly ask you to observe the following guidelines during your visit.
          </motion.p>

          {policies.map((policy, index) => (
            <motion.section
              key={index}
              className={`p-6 ${index < policies.length - 1 ? 'pb-8 border-b border-gray-200' : ''}`}
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                {policy.icon && <policy.icon className="h-6 w-6 text-amber-700 flex-shrink-0" aria-hidden="true" />}
                <h2 className="text-2xl font-semibold text-[#3A3A3A]">{policy.title}</h2>
              </div>
              <div className="space-y-2 text-gray-600 leading-relaxed mt-2 pl-[calc(1.5rem+0.75rem)]">
                 {policy.points.map((point, pIndex) => (
                   <p key={pIndex}>
                     {point.subHeading && <strong className="font-semibold text-[#3A3A3A]">{point.subHeading}</strong>}
                     {point.subHeading ? ' ' : ''}
                     {point.description}
                   </p>
                 ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
} 