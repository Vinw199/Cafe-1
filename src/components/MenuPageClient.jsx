'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MenuCategoryNav from './MenuCategoryNav';
// import Image from 'next/image';
import {
  ChevronRightIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';

// Add metadata export for the page title
// export const metadata = {
//   title: 'Menu', 
// };

// New MenuCategoryNav component (will be created in a separate file later, placeholder for now)
// const MenuCategoryNav = ({ categories, activeFilter, onFilterChange }) => {
//   // Basic implementation for structure - will be fleshed out
//   return (
//     <div className="sticky top-16 bg-white z-30 shadow-sm mb-8 py-3"> {/* Adjust top based on Navbar height */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => onFilterChange(category)}
//               className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap
//                 ${activeFilter === category 
//                   ? 'bg-amber-600 text-white' 
//                   : 'text-stone-700 hover:bg-stone-100'}
//                 transition-colors duration-150 ease-in-out`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

export default function MenuPageClient() {
  const [activeFilter, setActiveFilter] = useState('All');

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

  // Restructured menuData based on "Menu - updated.txt"
  const menuData = [
    // --- Coffee & Drinks (Column 1) ---
    {
      id: "coffee",
      displayName: "Coffee",
      column: 1,
      mainFilterCategory: "Coffee & Drinks",
      aspectRatio: "aspect-[16/9]",
      content: [
        {
          subCategoryName: "Hot",
          items: [
            { name: "Americano" }, { name: "Cappuccino" }, { name: "Latte" }, 
            { name: "Pour Over" }, { name: "Flat White" }, { name: "Cortado" },
            { name: "Espresso (Single)" }, { name: "Espresso Macchiato" },
            { name: "Piccolo" }, { name: "Mocha" }
          ]
        },
        {
          subCategoryName: "Cold",
          items: [
            { name: "Iced Americano" }, { name: "Iced Latte" }, { name: "Cold Brew" },
            { name: "Iced Mocha" }, { name: "Affogato" }, { name: "Orangepresso" },
            { name: "Vietnamese Iced Coffee" }
          ]
        },
        {
          subCategoryName: "Add Ons",
          items: [
            { name: "Vanilla Syrup" }, { name: "Hazelnut Syrup" }, 
            { name: "Caramel Syrup" }, { name: "Ice Cream" }, { name: "Whipped Cream" }
          ]
        }
      ]
    },
    {
      id: "iced_drinks_non_coffee",
      displayName: "Iced Drinks (Non-Coffee)",
      column: 1,
      mainFilterCategory: "Coffee & Drinks",
      aspectRatio: "aspect-square",
      content: [ // Direct items, no subSections
        { name: "Matcha Iced Latte" }, { name: "Iced Tea" }, { name: "Fresh Lime Soda" },
        { name: "Classic Mojito" }, { name: "Chocolate Shake" }, { name: "Vanilla Shake" },
        { name: "Seasonal Fruit Juice" }
      ]
    },
    {
      id: "tea",
      displayName: "Tea",
      column: 1,
      mainFilterCategory: "Coffee & Drinks",
      aspectRatio: "aspect-[4/3]",
      content: [ // Direct items
        { name: "Earl Grey" }, { name: "Peppermint" }, { name: "Assam Tea" },
        { name: "Ginger and Lemongrass" }, { name: "Kashmiri Kawa" },
        { name: "Chamomile" }, { name: "Green Tea" }
      ]
    },
    // --- Bakery (Column 1) ---
    {
      id: "bakery",
      displayName: "From the bakery",
      column: 1,
      mainFilterCategory: "Bakery",
      aspectRatio: "aspect-[16/9]",
      content: [ // Direct items
        { name: "Croissant" }, { name: "Pain Au Chocolat" }, { name: "Banana Bread" },
        { name: "Carrot Cake" }, { name: "Carmel Custard" }, // Typo from file "Carmel"
        { name: "Blueberry Cheesecake" }, { name: "Lotus Biscoff Cheesecake" },
        { name: "Signature Tiramisu" }
      ]
    },
    // --- Food Menu (Column 2) ---
    {
      id: "appetizers",
      displayName: "Appetizer",
      column: 2,
      mainFilterCategory: "Food Menu",
      aspectRatio: "aspect-[4/3]", // Example, adjust as needed
      content: [ // Direct items with descriptions
        { name: "Peri Peri Potato Wedges", description: "Hand-Cut Fried Potato Wedges, Peri Peri Homemade Spice" },
        { name: "Nachos (Veg/Non-Veg)", description: "Corn Nachos, Guacamole, Sour Cream, Tomato Salsa" },
        { name: "Chicken Bruschetta", description: "Sourdough Baguette, Grilled Chicken, Cherry Tomatoes, Mozzarella" }, // Updated desc.
        { name: "Avocado Toast & Eggs", description: "Sourdough Bread, Guacamole, Eggs" }, // Updated desc.
        { name: "Chipotle Chicken Tacos", description: "Chipotle Chicken, Tomato Salsa, Guacamole, Sour Cream, Mozzarella" },
        { name: "Rajma (Kidney Bean) Tacos", description: "Smashed Kidney Beans, Tomato Salsa, Guacamole, Sour Cream, Mozzarella" }
      ]
    },
    {
      id: "breakfast",
      displayName: "Roastery Club Breakfast",
      column: 2,
      mainFilterCategory: "Food Menu",
      aspectRatio: "aspect-[16/9]",
      content: [
        { name: "Full English Breakfast Non-Veg", description: "Chicken Sausages, Eggs (Fried, Poached, Scrambled), Grilled Tomatoes, Mushrooms, Baked Beans, Toast" },
        { name: "Full English Breakfast Veg", description: "Veggie Sausages, Grilled Tomatoes, Mushrooms, Baked Beans, Toast" },
        { name: "Classic Eggs Benedict", description: "Toast, Ham, Poached Egg, Hollandaise Sauce" },
        { name: "Shakshuka", description: "Tomatoes, Onions, Garlic, Spices, Poached Eggs" },
        { name: "Pancakes & Berries", description: "Whole Wheat Pancakes, Honey Mascarpone, Fresh Fruits" }
      ]
    },
    {
      id: "sandwiches",
      displayName: "Sandwich",
      column: 2,
      mainFilterCategory: "Food Menu",
      aspectRatio: "aspect-[16/9]",
      content: [
        { name: "Glenroast's Special Sandwich (Veg/Non-Veg)", description: "Chicken/Paneer Keema, Grilled Onions, Tomatoes, Egg, Cheese" },
        { name: "Club Sandwich Non-Veg", description: "Chicken, Mustard Mayo, Bacon, Egg, Grilled Onions, Lettuce, Tomatoes" },
        { name: "Club Sandwich Veg", description: "Tomatoes, Grilled Onions, Cucumber, Lettuce, Mustard Mayo" },
        { name: "BBQ Chicken Sandwich", description: "Chicken, Texas BBQ Sauce, Grilled Onions, Cheese" },
        { name: "Egg & Cheese Sandwich", description: "Boiled Egg Mash, Grilled Onions, Cheese" }
      ]
    },
    {
      id: "pizza",
      displayName: "Wood Fired Pizza",
      column: 2,
      mainFilterCategory: "Food Menu",
      aspectRatio: "aspect-[16/9]",
      content: [
        { name: "Classic Margherita", description: "Mozzarella, Italian Tomato Sauce, Basil" },
        { name: "Farmfresh", description: "Mozzarella, Sundried Tomatoes, Olives, Corn, Bellpeppers" },
        { name: "Mushroom and Caramelized Onions", description: "Fresh Local Mushrooms, Glazed Onions" },
        { name: "Sicilian Burrata & Sundried Tomatoes", description: "Mozzarella, Burrata Cheese, Sundried Tomatoes, Basil" },
        { name: "Roastery's Signature BBQ Chicken", description: "Mozzarella, BBQ Chicken, Caramelized Onions" },
        { name: "Pepperoni", description: "Mozzarella, Pepperoni, Italian Tomato Sauce" }
      ]
    },
    {
      id: "club_favorites",
      displayName: "Roastery Club favorites", // Corrected capitalization
      column: 2,
      mainFilterCategory: "Food Menu",
      aspectRatio: "aspect-[16/9]",
      content: [
        { name: "Burrito (Veg/Non-Veg)", description: "Cilantro Lime Rice, Cheddar cheese, Avocado, Tomato, Salsa sauce" }, // Updated name
        { name: "Traditional Irish Fish & Chips", description: "With Tartar Sauce and Chips" },
        { name: "Fiery Chicken Wings", description: "Spicy Chicken Wings in our house special signature sauce" },
        { name: "Aglio e Olio (Veg/Non-Veg)", description: "Spaghetti tossed with olive oil, garlic, mushrooms, basil, parmesan cheese" },
        { name: "All American Baked Mac & Cheese (Veg/Non-Veg)", description: "Macaroni in Creamy Cheese Sauce with Garlic Bread" },
        { name: "Glenroast's Signature Nature Salad", description: "Quinoa, Avocado, Garden Veggies, Sunflower Seeds, Yogurt Dressing" },
        { name: "Juicy Lucy Grilled Chicken Burger", description: "Grilled Chicken Patty, Cheddar Cheese, Fried Egg, Pickled Onions" },
        { name: "Moroccan Falafel Veggie Burger", description: "Falafel Patty, Hummus, Avocado, Pickled onions, Sun-dried tomatoes, Garlic Mayo" },
        { name: "Portmarnock Chicken Roast", description: "Stuffed Roasted Chicken Breast, Grilled Vegetables, Creamy Mashed Potatoes" },
        { name: "Chicken Stroganoff", description: "Chicken, Mushrooms, Capsicum in white sauce with Buttered rice" }
      ]
    }
  ];
  
  const filterCategories = ["All", "Coffee & Drinks", "Bakery", "Food Menu"];

  // Determine if content is an array of items or subSections
  const renderContent = (contentBlock) => {
    // Check if the first element in content has a subCategoryName property
    if (contentBlock.content && contentBlock.content.length > 0 && contentBlock.content[0].subCategoryName) {
      // It's an array of subSections
      return contentBlock.content.map((subSection, ssIndex) => (
        <div key={`${contentBlock.id}-sub-${ssIndex}`} className="mt-6"> {/* Added margin-top for subSections */}
          <h3 className="text-xl font-semibold font-display text-stone-800 mb-3">
            {subSection.subCategoryName}
          </h3>
          <ul className="space-y-2">
            {subSection.items.map((item, iIndex) => (
              <li key={`${contentBlock.id}-sub-${ssIndex}-item-${iIndex}`}>
                <p className="text-stone-700">{item.name}</p>
                {item.description && (
                  <p className="text-sm text-stone-600 mt-0.5">{item.description}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ));
    } else if (contentBlock.content && contentBlock.content.length > 0) {
      // It's a direct array of items
      return (
        <ul className="space-y-2 mt-4"> {/* Added margin-top for direct items */}
          {contentBlock.content.map((item, iIndex) => (
            <li key={`${contentBlock.id}-item-${iIndex}`}>
              <p className="text-stone-700">{item.name}</p>
              {item.description && (
                <p className="text-xs text-stone-600 mt-0.5">{item.description}</p>
              )}
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  const getFilteredMenuBlocks = () => {
    if (activeFilter === 'All') {
      return menuData; // Or we can return null/undefined and handle column-specific rendering below
    }
    return menuData.filter(cat => cat.mainFilterCategory === activeFilter);
  };

  const filteredBlocks = getFilteredMenuBlocks();

  return (
    // <div className="bg-[#F8F5F2]">
    <div>
      <motion.div
        className="h-64 md:h-120 w-full bg-stone-800 relative overflow-hidden"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        {/* Image Background */}
        {/* <Image
          src="/images/menu-hero-section-image.jpeg"
          alt="Assortment of coffee and food items from the menu"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-50"
          priority
        /> */}
        {/* Optional Title Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white text-shadow-md"
            // initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}

            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}

          >
            Our Menu
          </motion.h1>
        </div>
      </motion.div>

      <MenuCategoryNav 
        categories={filterCategories}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-6 md:py-10 lg:py-16">
        {/* Removed separate Menu H1 as it's in the hero now */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-16">
          {/* Conditional Rendering for Columns */}
          {activeFilter === 'All' ? (
            <>
              {/* Column 1: Drinks & Bakery (Only for 'All' filter) */}
              <div className="space-y-16">
                {menuData
                  .filter(cat => cat.column === 1)
                  .map((categoryBlock) => (
                    <motion.div
                      key={categoryBlock.id + '-col1'} // Ensure unique key if items can appear in multiple lists
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      <h2 className="text-3xl md:text-4xl font-bold font-display text-stone-900 mb-6">
                        {categoryBlock.displayName}
                      </h2>
                      <div className={`${categoryBlock.aspectRatio || 'aspect-[16/9]'} bg-stone-200 mb-6 shadow-sm overflow-hidden relative`}>
                        <p className="absolute inset-0 flex items-center justify-center text-stone-500 italic text-sm">
                          (Visual for {categoryBlock.displayName})
                        </p>
                      </div>
                      {renderContent(categoryBlock)}
                    </motion.div>
                  ))}
              </div>

              {/* Column 2: Food (Only for 'All' filter) */}
              <div className="space-y-16">
                {menuData
                  .filter(cat => cat.column === 2)
                  .map((categoryBlock) => (
                    <motion.div
                      key={categoryBlock.id + '-col2'} // Ensure unique key
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      <h2 className="text-3xl md:text-4xl font-bold font-display text-stone-900 mb-6">
                        {categoryBlock.displayName}
                      </h2>
                      <div className={`${categoryBlock.aspectRatio || 'aspect-[16/9]'} bg-stone-200 mb-6 shadow-sm overflow-hidden relative`}>
                        <p className="absolute inset-0 flex items-center justify-center text-stone-500 italic text-sm">
                          (Visual for {categoryBlock.displayName})
                        </p>
                      </div>
                      {renderContent(categoryBlock)}
                    </motion.div>
                  ))}
              </div>
            </>
          ) : (
            // Render all filtered blocks directly into the 2-column grid when a specific filter is active
            filteredBlocks.map((categoryBlock) => (
              <motion.div
                key={categoryBlock.id + '-filtered'} // Ensure unique key
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                // className="md:col-span-1" // This might be implicitly handled by the parent grid
              >
                <h2 className="text-3xl md:text-4xl font-bold font-display text-stone-900 mb-6">
                  {categoryBlock.displayName}
                </h2>
                <div className={`${categoryBlock.aspectRatio || 'aspect-[16/9]'} bg-stone-200 mb-6 shadow-sm overflow-hidden relative`}>
                  <p className="absolute inset-0 flex items-center justify-center text-stone-500 italic text-sm">
                    (Visual for {categoryBlock.displayName})
                  </p>
                </div>
                {renderContent(categoryBlock)}
              </motion.div>
            ))
          )}
        </div>

        {/* Final CTA */}
        <motion.p
          className="text-center text-lg font-medium text-stone-800 mt-16 lg:mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Visit Glenroast for the full menu experience and seasonal specials!
        </motion.p>

      </div>
    </div>
  );
} 