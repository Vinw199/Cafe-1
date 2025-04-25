'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MenuPage() {

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

  // Structure menu data
  const menuData = [
    // --- Column 1: Drinks & Bakery ---
    {
      categoryName: "Coffee",
      column: 1,
      subCategories: [
        {
          subCategoryName: "Hot",
          items: [
            { name: "Americano" },
            { name: "Long Black" },
            { name: "Cappuccino" },
            { name: "Latte" },
            { name: "Flat White" },
            { name: "Cortado" },
            { name: "Espresso (Single)" },
            { name: "Espresso Macchiato" },
            { name: "Piccolo" },
            { name: "Mocha" },
            { name: "Pour Over" },
          ]
        },
        {
          subCategoryName: "Cold",
          items: [
            { name: "Iced Americano" },
            { name: "Iced Latte" },
            { name: "Iced Mocha" },
            { name: "Affogato" },
            { name: "Orangepresso" },
            { name: "Vietnamese Iced Coffee" },
            { name: "Cold Brew" },
          ]
        },
        {
          subCategoryName: "Add ons",
          items: [
            { name: "Vanilla" },
            { name: "Hazelnut" },
            { name: "Caramel" },
            { name: "Ice Cream" },
            { name: "Whipped Cream" },
          ]
        }
      ]
    },
    {
      categoryName: "Iced Drinks (Non-Coffee)",
      column: 1,
      items: [
        { name: "Matcha Iced Latte" },
        { name: "Iced Tea" },
        { name: "Fresh Lime Soda" },
        { name: "Classic Mojito" },
        { name: "Chocolate Shake" },
        { name: "Vanilla Shake" },
        { name: "Seasonal Fruit Juice" },
      ]
    },
    {
      categoryName: "Tea",
      column: 1,
      items: [
        { name: "Earl Grey" },
        { name: "Peppermint" },
        { name: "Assam Tea" },
        { name: "Ginger and Lemongrass" },
        { name: "Kashmiri Kawa" },
        { name: "Chamomile" },
        { name: "Green Tea" },
      ]
    },
    {
      categoryName: "From the bakery",
      column: 1,
      items: [
        { name: "Croissant" },
        { name: "Pain Au Chocolat" },
        { name: "Banana Bread" },
        { name: "Carrot Cake" },
        { name: "Lemon Tart" },
        { name: "Carmel Custard" }, // Note: Original text has typo "Carmel"
        { name: "Blueberry Cheesecake" },
        { name: "Lotus Biscoff Cheesecake" },
        { name: "Signature Tiramisu" },
      ]
    },
    // --- Column 2: Food ---
    {
      categoryName: "Food Menu",
      column: 2,
      subCategories: [
        {
          subCategoryName: "Appetizer",
          items: [
            { name: "Peri Peri Potato Wedges", description: "Hand-Cut Fried Potato Wedges, Peri Peri Homemade Spice" },
            { name: "Nachos (Veg/Non-Veg)", description: "Corn Nachos, Guacamole, Sour Cream, Tomato Salsa" },
            { name: "Chicken Keema Bruschetta", description: "Multigrain Baguette, Chicken Keema, Cherry Tomatoes, Mozzarella, Balsamic Glaze" },
            { name: "Avocado Toast & Eggs", description: "Sourdough Bread, Guacamole, Cherry Tomatoes, Mozzarella, Eggs" },
            { name: "Chipotle Chicken Tacos", description: "Chipotle Chicken, Tomato Salsa, Guacamole, Sour Cream, Mozzarella" },
            { name: "Rajma (Kidney Bean) Tacos", description: "Smashed Kidney Beans, Tomato Salsa, Guacamole, Sour Cream, Mozzarella" },
          ]
        },
        {
          subCategoryName: "Roastery Club Breakfast",
          items: [
            { name: "Full English Breakfast Non-Veg", description: "Chicken Sausages, Eggs (Fried, Poached, Scrambled), Grilled Tomatoes, Mushrooms, Baked Beans, Toast" },
            { name: "Full English Breakfast Veg", description: "Veggie Sausages, Grilled Tomatoes, Mushrooms, Baked Beans, Toast" },
            { name: "Classic Eggs Benedict", description: "Toast, Ham, Poached Egg, Hollandaise Sauce" },
            { name: "Shakshuka", description: "Tomatoes, Onions, Garlic, Spices, Poached Eggs" },
            { name: "Pancakes & Berries", description: "Whole Wheat Pancakes, Honey Mascarpone, Fresh Fruits" },
          ]
        },
        {
          subCategoryName: "Sandwich",
          items: [
            { name: "Glenroast's Special Sandwich (Veg/Non-Veg)", description: "Chicken/Paneer Keema, Grilled Onions, Tomatoes, Egg, Cheese" },
            { name: "Club Sandwich Non-Veg", description: "Chicken, Mustard Mayo, Bacon, Egg, Grilled Onions, Lettuce, Tomatoes" },
            { name: "Club Sandwich Veg", description: "Tomatoes, Grilled Onions, Cucumber, Lettuce, Mustard Mayo" },
            { name: "BBQ Chicken Sandwich", description: "Chicken, Texas BBQ Sauce, Grilled Onions, Cheese" },
            { name: "Egg & Cheese Sandwich", description: "Boiled Egg Mash, Grilled Onions, Cheese" },
          ]
        },
        {
          subCategoryName: "Wood Fired Pizza",
          items: [
            { name: "Classic Margherita", description: "Mozzarella, Italian Tomato Sauce, Basil" },
            { name: "Farmfresh", description: "Mozzarella, Sundried Tomatoes, Olives, Corn, Bellpeppers" },
            { name: "Mushroom and Caramelized Onions", description: "Fresh Local Mushrooms, Glazed Onions" },
            { name: "Sicilian Burrata & Sundried Tomatoes", description: "Mozzarella, Burrata Cheese, Sundried Tomatoes, Basil" },
            { name: "Roastery's Signature BBQ Chicken", description: "Mozzarella, BBQ Chicken, Caramelized Onions" },
            { name: "Pepperoni", description: "Mozzarella, Pepperoni, Italian Tomato Sauce" },
          ]
        },
        {
          subCategoryName: "Roastery Club favorites",
          items: [
            { name: "Boojum Burrito (Veg/Non-Veg)", description: "Cilantro Lime Rice, Cheddar cheese, Avocado, Tomato, Salsa sauce" },
            { name: "Traditional Irish Fish & Chips", description: "With Tartar Sauce and Chips" },
            { name: "Fiery Chicken Wings", description: "Spicy Chicken Wings in our house special signature sauce" },
            { name: "Aglio e Olio (Veg/Non-Veg)", description: "Spaghetti tossed with olive oil, garlic, mushrooms, basil, parmesan cheese" },
            { name: "All American Baked Mac & Cheese (Veg/Non-Veg)", description: "Macaroni in Creamy Cheese Sauce with Garlic Bread" },
            { name: "Glenroast's Signature Nature Salad", description: "Quinoa, Avocado, Garden Veggies, Sunflower Seeds, Yogurt Dressing" },
            { name: "Juicy Lucy Grilled Chicken Burger", description: "Grilled Chicken Patty, Cheddar Cheese, Fried Egg, Pickled Onions" },
            { name: "Moroccan Falafel Veggie Burger", description: "Falafel Patty, Hummus, Avocado, Pickled onions, Sun-dried tomatoes, Garlic Mayo" },
            { name: "Portmarnock Chicken Roast", description: "Stuffed Roasted Chicken Breast, Grilled Vegetables, Creamy Mashed Potatoes" },
            { name: "Chicken Stroganoff", description: "Chicken, Mushrooms, Capsicum in white sauce with Buttered rice" },
          ]
        }
      ]
    }
  ];

  return (
    <div className="bg-[#F8F5F2]">
      <motion.div
        className="h-64 md:h-80 lg:h-96 w-full bg-stone-300 relative overflow-hidden"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
         <Image
           src="/images/menu-hero.jpg"
           alt="Glenroast Cafe Ambiance or Signature Item"
           layout="fill"
           objectFit="cover"
           priority
           className="opacity-90"
         />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-24">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold font-serif text-stone-900 mb-12 md:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          Our Menu
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-12">
          {/* Column 1: Drinks & Bakery */}
          <div className="space-y-10">
            {menuData.filter(cat => cat.column === 1).map((category, index, arr) => (
              <React.Fragment key={`${category.categoryName}-${index}-frag`}>
                <motion.div
                  key={`${category.categoryName}-${index}`}
                  className="mb-12"
                  variants={sectionVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <h2 className="text-2xl font-semibold font-serif text-stone-800 mb-4">
                    {category.categoryName}
                  </h2>
                  <div className="space-y-4">
                    {category.subCategories ? (
                      category.subCategories.map((subCategory, subIndex) => (
                        <div key={`${subCategory.subCategoryName}-${subIndex}`} className="ml-2">
                          <h3 className="text-lg font-medium text-stone-700 mb-2">
                            {subCategory.subCategoryName}
                          </h3>
                          <ul className="space-y-2 ml-4">
                            {subCategory.items.map((item, itemIndex) => (
                              <li key={`${item.name}-${itemIndex}`} className="text-stone-700">
                                <span className="font-medium">{item.name}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))
                    ) : (
                      <ul className="space-y-2 ml-2">
                        {category.items.map((item, itemIndex) => (
                          <li key={`${item.name}-${itemIndex}`} className="text-stone-700">
                            <span className="font-medium">{item.name}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>

                {index < arr.length - 1 && (
                  <hr className="my-8 border-stone-300" />
                )}

                {category.categoryName === "Coffee" && (
                  <motion.div
                    className="aspect-video rounded-lg shadow-md relative overflow-hidden my-8"
                    variants={sectionVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    <Image
                      src="/images/menu-coffee-showcase.jpg"
                      alt="Artisanal coffee preparation"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </motion.div>
                )}

                {category.categoryName === "From the bakery" && (
                  <motion.div
                    className="aspect-video rounded-lg shadow-md relative overflow-hidden my-8"
                    variants={sectionVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    <Image
                      src="/images/menu-bakery-showcase.jpg"
                      alt="Freshly baked goods from Glenroast"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Column 2: Food */}
          <div className="space-y-10">
            {menuData.filter(cat => cat.column === 2).map((category) => (
              <div key={`${category.categoryName}-food-cat`}>
                {category.subCategories && category.subCategories.map((subCategory, subIndex, subArr) => (
                  <React.Fragment key={`${subCategory.subCategoryName}-${subIndex}-frag`}>
                    <motion.div
                      key={`${subCategory.subCategoryName}-${subIndex}`}
                      className="mb-12"
                      variants={sectionVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      <h2 className="text-2xl font-semibold font-serif text-stone-800 mb-4">
                        {subCategory.subCategoryName}
                      </h2>
                      <ul className="space-y-3 ml-2">
                        {subCategory.items.map((item, itemIndex) => (
                          <li key={`${item.name}-${itemIndex}`}>
                            <p className="text-stone-800 font-medium">{item.name}</p>
                            {item.description && (
                              <p className="text-sm text-stone-600 mt-1 ml-2">
                                {item.description}
                              </p>
                            )}
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {subIndex < subArr.length - 1 && (
                      <hr className="my-8 border-stone-300" />
                    )}

                    {subCategory.subCategoryName === "Wood Fired Pizza" && (
                      <motion.div
                        className="aspect-video rounded-lg shadow-md relative overflow-hidden my-8"
                        variants={sectionVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                      >
                        <Image
                          src="/images/menu-pizza-showcase.jpg"
                          alt="Delicious wood fired pizza"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </motion.div>
                    )}
                  </React.Fragment>
                ))}
                {!category.subCategories && category.items && (
                    <ul className="space-y-3 ml-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={`${item.name}-${itemIndex}-direct`}>
                           <p className="text-stone-800 font-medium">{item.name}</p>
                          {item.description && (
                            <p className="text-sm text-stone-600 mt-1 ml-2">
                              {item.description}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 