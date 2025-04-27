'use client';

import React, { useRef, useCallback } from 'react';
import {
  motion,
  useScroll,
  useTransform
} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  SparklesIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  BuildingOfficeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import useEmblaCarousel from 'embla-carousel-react';

// Animation Variants (can be shared or defined per page)
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function HomePage() {
  // Ref for ambiance parallax image container
  const ambianceRef = useRef(null);

  // Scroll progress for ambiance image
  const { scrollYProgress: scrollYProgressAmbiance } = useScroll({
    target: ambianceRef,
    offset: ["start end", "end start"] 
  });

  // Transform scroll progress to y offset for ambiance image
  const ambianceYOffset = useTransform(scrollYProgressAmbiance, [0, 1], ["-15%", "15%"]);

  // Placeholder USP data (replace icons as needed)
  const usps = [
    { 
      icon: SparklesIcon, 
      title: "Specialty Coffee", 
      description: "Explore a curated selection of high-quality coffees, expertly prepared."
    },
    { 
      icon: UserGroupIcon, 
      title: "Community Hub", 
      description: "More than just a café! A lively space fostering connection and conversation."
    },
    { 
      icon: ChatBubbleLeftRightIcon,
      title: "The Experience",
      description: "Come for the welcoming atmosphere, friendly faces, and the connections you'll make."
    },
    { 
      icon: BuildingOfficeIcon,
      title: "Work & Relax",
      description: "A peaceful environment where you can focus, work, or simply unwind."
    }
  ];

  // Revised Gallery Data for Placeholders (8 items)
  const galleryPlaceholders = [
    { id: 1, width: 'w-72', bgColor: 'bg-red-200' },
    { id: 2, width: 'w-60', bgColor: 'bg-blue-200' },
    { id: 3, width: 'w-80', bgColor: 'bg-green-200' },
    { id: 4, width: 'w-64', bgColor: 'bg-yellow-200' },
    { id: 5, width: 'w-72', bgColor: 'bg-purple-200' },
    { id: 6, width: 'w-96', bgColor: 'bg-pink-200' }, // Wider one
    { id: 7, width: 'w-56', bgColor: 'bg-indigo-200' },
    { id: 8, width: 'w-64', bgColor: 'bg-teal-200' },
  ];

  // Embla Carousel Setup (Infinite Loop, Center Align, Default Speed)
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: 'center',
    }
  );

  // Embla Navigation Functions
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Refs for USP Parallax Images
  const uspImageRef1 = useRef(null);
  const uspImageRef2 = useRef(null);

  // Scroll progress for USP Image 1
  const { scrollYProgress: scrollYProgressUsp1 } = useScroll({
    target: uspImageRef1,
    offset: ["start end", "end start"]
  });
  // Scroll progress for USP Image 2
   const { scrollYProgress: scrollYProgressUsp2 } = useScroll({
    target: uspImageRef2,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress for USP Images
  const uspYOffset1 = useTransform(scrollYProgressUsp1, [0, 1], ["-10%", "10%"]);
  const uspYOffset2 = useTransform(scrollYProgressUsp2, [0, 1], ["-10%", "10%"]);

  return (
    // Using a fragment as the main layout likely handles the primary background
    <>
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        // Optional: Animate section itself if needed
      >
        {/* Background Image */}
        <motion.div 
           className="absolute inset-0 z-0"
           initial={{ scale: 1.1 }}
           animate={{ scale: 1 }}
           transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Placeholder Div */}
          <div className="absolute inset-0 bg-stone-200"></div>
          {/* Gradient Overlay for Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
        </motion.div>

        {/* Centered Content */}
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-4 text-shadow-md"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            GLENROAST: Specialty Coffee & Community Spirit in Jorhat
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl mb-8 text-stone-100 text-shadow-sm"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            Connecting community, one cup at a time.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          >
            <Link href="/menu">
              <motion.span
                className="inline-block bg-amber-600 text-white font-medium py-3 px-8 rounded-md shadow-lg hover:bg-amber-700 transition-colors duration-200 ease-in-out cursor-pointer text-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                Explore Our Menu
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Introduction Snippet Section */}
      <section className="py-12 lg:py-20 bg-[#F8F5F2]"> {/* Reduced base padding */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <motion.div 
            className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg bg-stone-200"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Placeholder text (optional) */}
            {/* <span className="absolute inset-0 flex items-center justify-center text-stone-500 italic">Intro Image</span> */}
          </motion.div>

          {/* Right Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-stone-900 mb-6">
              Welcome to GLENROAST
            </h2>
            <p className="text-stone-700 leading-relaxed mb-6">
              Coffee&apos;s journey in Assam is growing, and here in Jorhat, GLENROAST is excited to be part of it. We&apos;re introducing exceptional specialty coffees in a space designed for connection. We envision a welcoming spot where people from all walks of life can discover unique flavours and maybe even find a new favorite brew.
            </p>
            <Link href="/about">
              <motion.span
                 className="inline-flex items-center text-amber-700 font-medium hover:text-amber-800 group transition-colors duration-200 ease-in-out cursor-pointer"
                 whileHover={{ x: 5 }} // Slight nudge on hover
                 transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                Learn More About Us 
                <span className="ml-1 transition-transform duration-200 ease-in-out group-hover:translate-x-1">→</span>
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Menu Highlights Section (Desktop: 2-Col, Mobile: Stacked) */}
      <section className="py-12 lg:py-16">
        {/* Max-width container for overall centering and padding */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8"> 
            {/* Outer Grid for Desktop Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                {/* Left Column (Text & Buttons) */}
                <div className="text-center lg:text-left">
                    {/* Heading */}
                    <motion.h2 
                        className="text-3xl lg:text-4xl font-bold font-serif text-stone-900 mb-4"
                        // Animate from left
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        Taste the Difference
                    </motion.h2>

                    {/* Optional Sub-heading */}
                    <motion.p 
                        className="text-stone-600 mb-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    >
                        Craving our flavours at home? Order online!
                    </motion.p>

                    {/* Swiggy & Zomato Buttons */}
                    <motion.div 
                        // Justify center on mobile, start on large screens
                        className="flex justify-center lg:justify-start items-center gap-4 mb-12 lg:mb-0" 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    >
                        {/* Use motion.a directly for external links */}
                        <motion.a
                           href="#" // Add href here
                           className="inline-block bg-[#F77E00] text-white font-medium py-2 px-6 rounded-md shadow hover:bg-[#d66c00] transition-colors duration-200 ease-in-out cursor-pointer text-sm"
                           whileHover={{ scale: 1.05 }}
                           transition={{ type: "spring", stiffness: 400, damping: 15 }}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           Order on Swiggy
                        </motion.a>
                        <motion.a
                           href="#" // Add href here
                           className="inline-block bg-[#EF4F5F] text-white font-medium py-2 px-6 rounded-md shadow hover:bg-[#d94251] transition-colors duration-200 ease-in-out cursor-pointer text-sm"
                           whileHover={{ scale: 1.05 }}
                           transition={{ type: "spring", stiffness: 400, damping: 15 }}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           Order on Zomato
                        </motion.a>
                    </motion.div>
                </div>

                {/* Right Column (Food Item Grid) */}
                {/* This inner grid handles stacking on mobile/medium */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"> 
                    {/* Item 1: Cheesecake */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                    >
                        <div className="relative h-64 rounded-lg overflow-hidden mb-4 bg-stone-200"> {/* Placeholder Div */} </div> <h3 className="text-xl lg:text-2xl font-semibold font-serif text-stone-800 mb-2">Cloud Cheesecake</h3> <p className="text-stone-600 text-sm leading-relaxed">Experience zen with this light, fluffy Japanese-style cheesecake.</p>
                    </motion.div>

                    {/* Item 2: Chicken Sando */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                    >
                        <div className="relative h-64 rounded-lg overflow-hidden mb-4 bg-stone-200"> {/* Placeholder Div */} </div> <h3 className="text-xl lg:text-2xl font-semibold font-serif text-stone-800 mb-2">Chicken Sando</h3> <p className="text-stone-600 text-sm leading-relaxed">Crispy chicken & red cabbage between bread, with Texas BBQ sauce.</p>
                    </motion.div>
                </div>
            </div>

            {/* CTA Button (Below the 2-column structure, centered) */}
            <motion.div 
                className="text-center mt-16" // Increased margin top
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }} // Adjusted delay slightly
            >
                {/* Link... (remains the same) */}
                 <Link href="/menu"> <motion.span className="inline-flex items-center text-amber-700 font-medium hover:text-amber-800 group transition-colors duration-200 ease-in-out cursor-pointer" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 15 }} > Explore the Full Menu <span className="ml-1 transition-transform duration-200 ease-in-out group-hover:translate-x-1">→</span> </motion.span> </Link>
            </motion.div>
        </div>
      </section>

      {/* Ambiance Showcase Section - Add Quote Overlay */}
      <section ref={ambianceRef} className="relative h-[60vh] md:h-[75vh] overflow-hidden flex items-center justify-center"> {/* Added flex centering */}
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: ambianceYOffset }} 
        >
          {/* Placeholder Div */}
          <div className="absolute inset-0 bg-stone-200"></div>
          <div className="absolute inset-0 bg-black/10"></div> {/* Slightly darker overlay? */}
        </motion.div>

        {/* Quote Overlay Content */}
        <motion.div 
          className="relative z-10 text-center px-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <p className="text-4xl md:text-5xl font-serif font-medium text-white text-shadow-lg leading-tight">
            &ldquo;Nurturing community—one cup, one conversation at a time.&rdquo;
          </p>
        </motion.div>
      </section>

      {/* The GLENROAST Experience Section (Replaces USP) */}
      <section className="py-12 lg:py-20 overflow-hidden"> {/* Reduced base padding */} 
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16 lg:space-y-20"> {/* Added spacing between parts */} 
          {/* Main Heading */}
          <motion.h2
            className="text-3xl lg:text-4xl font-bold font-serif text-stone-900 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            The GLENROAST Experience
          </motion.h2>
          {/* Part 1: Our Space (Community, Relax) - Text Left, Image Right */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6"> {/* Reduced space-y */} 
              <h3 className="text-2xl lg:text-3xl font-semibold font-serif text-stone-800 mb-4">Our Space</h3>
              {/* Combined USPs 2, 3, 4 descriptions */}
              <p className="text-stone-700 leading-relaxed text-sm">
                More than just a café, GLENROAST is a lively hub designed for connection. 
                Come for the welcoming atmosphere and friendly faces, stay for the conversations. 
                It&apos;s also your peaceful environment to focus, work, or simply unwind.
              </p>
               {/* Maybe add a short list/bullet points if needed later */}
            </div>
            {/* Smaller Image - Ambiance (Adjust height) */}
            <motion.div 
              className="relative h-80 rounded-lg overflow-hidden shadow-lg bg-stone-200"
            >
              {/* Placeholder text (optional) */}
              {/* <span className="absolute inset-0 flex items-center justify-center text-stone-500 italic">Ambiance Detail</span> */} 
            </motion.div>
          </motion.div>

          {/* Part 2: Our Craft (Coffee, Experience) - Reordered for Mobile */}
           <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
             {/* Text Block (Comes first in DOM for mobile, ordered last on desktop) */} 
             <div className="space-y-6 md:order-last"> 
               <h3 className="text-2xl lg:text-3xl font-semibold font-serif text-stone-800 mb-4">Our Craft</h3>
               {/* USP 1 description */}
               <p className="text-stone-700 leading-relaxed text-sm">
                 We&apos;re passionate about introducing Jorhat to exceptional specialty coffees. 
                 Explore our curated selection, expertly prepared, and discover unique flavours 
                 that might just become your new favourite brew.
               </p>
            </div>
            
            {/* Image Container (Staggered Images) */} 
            <div className="md:order-first">
               {/* Container for Two Horizontally Placed, Vertically Offset Images */} 
               {/* Use flex, maybe items-center for baseline, then translate */}
               <div className="flex items-center justify-center md:justify-start gap-4 h-80"> {/* Match height of other side's image */} 
                  {/* Image 1a (Slightly Up) */}
                  <motion.div 
                    // Increase height
                    className="relative w-1/2 h-72 rounded-lg overflow-hidden shadow-lg -translate-y-4 bg-stone-200"
                  >
                    {/* Placeholder text (optional) */}
                    {/* <span className="absolute inset-0 flex items-center justify-center text-stone-500 italic text-xs">Coffee Beans</span> */} 
                  </motion.div>
                   {/* Image 1b (Slightly Down) */}
                  <motion.div 
                    // Increase height
                    className="relative w-1/2 h-72 rounded-lg overflow-hidden shadow-lg translate-y-4 bg-stone-200"
                  >
                    {/* Placeholder text (optional) */}
                    {/* <span className="absolute inset-0 flex items-center justify-center text-stone-500 italic text-xs">Barista</span> */} 
                  </motion.div>
               </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Image Gallery Section (Refactored with Embla) */}
      {/* Wrap section in motion.section for fade-in */}
      <motion.section 
        className="py-12 lg:py-20 overflow-hidden" // Existing classes
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }} // Adjust amount if needed
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Centered container for the heading */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold font-serif text-stone-900 mb-12 text-center" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Moments at GLENROAST
          </motion.h2>
        </div>

        {/* Embla Carousel Structure - Add mobile padding */} 
        <div className="embla w-full px-4 sm:px-6 md:px-0" ref={emblaRef}> {/* Added px-4 sm:px-6 md:px-0 */} 
          <div className="embla__container flex"> 
            {galleryPlaceholders.map((placeholder, index) => (
              <div className="embla__slide flex-grow-0 flex-shrink-0 relative" key={placeholder.id} >
                 <motion.div
                  // Increase height from h-96 (24rem) to h-[26rem] (104)
                  className={`h-[26rem] ${placeholder.width} relative overflow-hidden`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.05 }}
                >
                  <div className={`w-full h-full ${placeholder.bgColor} flex items-center justify-center`}>
                    <span className="text-sm text-gray-600">Image {placeholder.id} ({placeholder.width})</span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons (using Embla API) */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8"> 
          <div className="flex justify-center mt-8 gap-8"> {/* Increased top margin */} 
             <button 
              onClick={scrollPrev} // Use Embla scrollPrev
              className="text-stone-500 hover:text-stone-800 transition duration-200 cursor-pointer"
              aria-label="Scroll Left"
            >
              <ChevronLeftIcon className="h-7 w-7" />
            </button>
             <button 
              onClick={scrollNext} // Use Embla scrollNext
              className="text-stone-500 hover:text-stone-800 transition duration-200 cursor-pointer"
              aria-label="Scroll Right"
            >
              <ChevronRightIcon className="h-7 w-7" />
            </button>
          </div>
        </div>

      </motion.section>

      {/* Location & Hours Section (Redesigned Split Layout) */}
      <section className="py-12 lg:py-20"> 
        {/* Use max-w-7xl for consistency */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           {/* Outer Grid */} 
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Visual Placeholder */}
              <motion.div
                className="relative h-80 bg-stone-200 rounded-lg shadow-sm flex items-center justify-center text-stone-500"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                 {/* Placeholder Text or Future Map Embed */}
                 <span className="text-lg italic">(Map Area Placeholder)</span>
              </motion.div>

              {/* Right Column: Details */}
              <motion.div
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, amount: 0.2 }}
                 transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              >
                 <h2 className="text-2xl lg:text-3xl font-bold font-serif text-stone-900 mb-6"> {/* Align left by default */} 
                    Visit Us
                 </h2>
                 
                 {/* Details with Icons */}
                 <div className="space-y-4 mb-8">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                       <MapPinIcon className="h-5 w-5 mt-1 text-amber-700 flex-shrink-0" />
                       <p className="text-stone-700">
                         GLENROAST <br /> 
                         Club Road, Jorhat, Assam
                       </p>
                    </div>
                    {/* Hours */}
                     <div className="flex items-start gap-3">
                       <ClockIcon className="h-5 w-5 mt-1 text-amber-700 flex-shrink-0" />
                       <p className="text-stone-600 text-sm">
                         Open Daily: 9am - 7pm
                       </p>
                    </div>
                 </div>

                 {/* CTA Link */}
                 <Link href="/contact">
                    <motion.span
                       className="inline-flex items-center text-amber-700 font-medium hover:text-amber-800 group transition-colors duration-200 ease-in-out cursor-pointer"
                       whileHover={{ x: 5 }}
                       transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                       Get Directions & Contact Info
                       <span className="ml-1 transition-transform duration-200 ease-in-out group-hover:translate-x-1">→</span>
                    </motion.span>
                 </Link>
              </motion.div>

           </div>
        </div>
      </section>
    </>
  );
}
