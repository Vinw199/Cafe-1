'use client'; // Mark as a client component

import React, { useState } from 'react'; // Import useState
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname
import { motion, AnimatePresence } from 'framer-motion'; // Keep motion import and add AnimatePresence

const Navbar = () => {
  const pathname = usePathname(); // Get current path
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  // Apply amber-600 base theme
  const baseLinkClass = "hover:text-amber-700 inline-flex items-center px-1 text-sm font-medium uppercase tracking-wider relative pt-1 transition-colors duration-200 ease-in-out";
  const linkTextColor = "text-amber-600";

  // Anmation variants for initial load slide-up - REMOVED transition from variant
  const initialLoadVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      // Removed: transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Variants for the mobile menu overlay slide - Slower
  const overlayVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeInOut' } }, // duration 0.3 -> 0.4
    exit: { x: '100%', opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } },    // duration 0.3 -> 0.4
  };

  // Variants for the container of the links (for staggering) - Removed exit state
  const linksContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  // Variants for individual link items - Removed exit state again
  const linkItemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { ease: "easeOut" } },
  };

  return (
    // Removed background color
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between h-16 items-center">
          {/* Group Logo and Desktop links */}
          <div className="flex items-center">
            {/* Logo */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={initialLoadVariants}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            >
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-2xl font-bold text-stone-800 font-serif">
                   GLENROAST
                </Link>
              </div>
            </motion.div>

            {/* Desktop Links - Using layoutId for underline */}
            <motion.div
              className="hidden sm:ml-16 sm:flex sm:space-x-8"
              initial="hidden"
              animate="visible"
              variants={initialLoadVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {[ // Array for easier mapping
                { href: '/menu', label: 'MENU' },
                { href: '/about', label: 'ABOUT' },
                { href: '/loyalty', label: 'LOYALTY' },
                { href: '/dine-in-policy', label: 'DINE-IN POLICY' },
                { href: '/contact', label: 'CONTACT' },
              ].map((link) => (
                <Link key={link.href} href={link.href}
                      className={`${baseLinkClass.replace('hover:text-amber-700', '')} ${linkTextColor} hover:text-amber-700`}>
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      className="absolute bottom-[-4px] left-0 right-0 h-[1.5px] bg-amber-600"
                      layoutId="activeDesktopUnderline"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </motion.div>
          </div> { /* End of grouping div */ }

          {/* Mobile Menu Button - Stays as a separate item for justify-between */}
          <motion.div
            className="-mr-2 flex items-center sm:hidden"
            initial="hidden"
            animate="visible"
            variants={initialLoadVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-amber-600 hover:text-amber-700 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-600 cursor-pointer transition-colors duration-200 ease-in-out" aria-controls="mobile-menu" aria-expanded={isMobileMenuOpen}> 
               <span className="sr-only">Open main menu</span>
               {isMobileMenuOpen ? (<svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>) : (<svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>)}
             </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Re-introduced AnimatePresence and motion */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="sm:hidden fixed inset-0 bg-white z-50"
            id="mobile-menu"
            variants={overlayVariants} // Use overlay variants
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Links container - apply stagger variants */}
            <motion.div
              className="pt-24 h-full flex flex-col items-center space-y-6"
              variants={linksContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Wrap each link in motion.div and apply item variants */}
              <motion.div variants={linkItemVariants}>
                <Link href="/menu" className={`block px-3 py-2 rounded-md text-2xl font-medium ${pathname === '/menu' ? 'text-amber-700' : 'text-amber-600'} transition-colors duration-200 ease-in-out`} onClick={() => setIsMobileMenuOpen(false)}>MENU</Link>
              </motion.div>
              <motion.div variants={linkItemVariants}>
                <Link href="/about" className={`block px-3 py-2 rounded-md text-2xl font-medium ${pathname === '/about' ? 'text-amber-700' : 'text-amber-600'} transition-colors duration-200 ease-in-out`} onClick={() => setIsMobileMenuOpen(false)}>ABOUT</Link>
              </motion.div>
              <motion.div variants={linkItemVariants}>
                 <Link href="/loyalty" className={`block px-3 py-2 rounded-md text-2xl font-medium ${pathname === '/loyalty' ? 'text-amber-700' : 'text-amber-600'} transition-colors duration-200 ease-in-out`} onClick={() => setIsMobileMenuOpen(false)}>LOYALTY</Link>
              </motion.div>
              <motion.div variants={linkItemVariants}>
                 <Link href="/dine-in-policy" className={`block px-3 py-2 rounded-md text-2xl font-medium ${pathname === '/dine-in-policy' ? 'text-amber-700' : 'text-amber-600'} transition-colors duration-200 ease-in-out`} onClick={() => setIsMobileMenuOpen(false)}>DINE-IN POLICY</Link>
              </motion.div>
              <motion.div variants={linkItemVariants}>
                 <Link href="/contact" className={`block px-3 py-2 rounded-md text-2xl font-medium ${pathname === '/contact' ? 'text-amber-700' : 'text-amber-600'} transition-colors duration-200 ease-in-out`} onClick={() => setIsMobileMenuOpen(false)}>CONTACT</Link>
              </motion.div>
            </motion.div>
            {/* Close button - not animated here, but could be */}
            <button onClick={() => setIsMobileMenuOpen(false)} type="button" className="absolute top-4 right-4 p-2 rounded-md text-amber-600 hover:text-amber-700 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-600 cursor-pointer transition-colors duration-200 ease-in-out" aria-label="Close menu">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar; 