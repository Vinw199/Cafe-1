'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Add metadata export for the page title
export const metadata = {
  title: 'Menu', 
};

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
      aspectRatio: "aspect-[16/9]",
      highlights: [
        "Cappuccino", "Iced Latte", "Pour Over", "Vietnamese Iced Coffee"
      ],
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
      aspectRatio: "aspect-square",
      highlights: [
        "Matcha Iced Latte", "Classic Mojito", "Seasonal Fruit Juice"
      ],
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
      aspectRatio: "aspect-[4/3]",
      highlights: [
        "Earl Grey", "Assam Tea", "Kashmiri Kawa"
      ],
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
      aspectRatio: "aspect-[16/9]",
      highlights: [
        "Cloud Cheesecake", "Croissant", "Signature Tiramisu", "Pain Au Chocolat"
      ],
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
          column: 1,
          highlights: [
            "Peri Peri Potato Wedges", "Chicken Keema Bruschetta", "Chipotle Chicken Tacos"
          ],
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
          subCategoryName: "Sandwich",
          highlights: [
            "Glenroast's Special Sandwich", "Club Sandwich Non-Veg", "BBQ Chicken Sandwich"
          ],
          items: [
            { name: "Glenroast's Special Sandwich (Veg/Non-Veg)", description: "Chicken/Paneer Keema, Grilled Onions, Tomatoes, Egg, Cheese" },
            { name: "Club Sandwich Non-Veg", description: "Chicken, Mustard Mayo, Bacon, Egg, Grilled Onions, Lettuce, Tomatoes" },
            { name: "Club Sandwich Veg", description: "Tomatoes, Grilled Onions, Cucumber, Lettuce, Mustard Mayo" },
            { name: "BBQ Chicken Sandwich", description: "Chicken, Texas BBQ Sauce, Grilled Onions, Cheese" },
            { name: "Egg & Cheese Sandwich", description: "Boiled Egg Mash, Grilled Onions, Cheese" },
          ]
        },
        {
          subCategoryName: "Roastery Club Breakfast",
          highlights: [
            "Full English Breakfast Non-Veg", "Classic Eggs Benedict", "Pancakes & Berries"
          ],
          items: [
            { name: "Full English Breakfast Non-Veg", description: "Chicken Sausages, Eggs (Fried, Poached, Scrambled), Grilled Tomatoes, Mushrooms, Baked Beans, Toast" },
            { name: "Full English Breakfast Veg", description: "Veggie Sausages, Grilled Tomatoes, Mushrooms, Baked Beans, Toast" },
            { name: "Classic Eggs Benedict", description: "Toast, Ham, Poached Egg, Hollandaise Sauce" },
            { name: "Shakshuka", description: "Tomatoes, Onions, Garlic, Spices, Poached Eggs" },
            { name: "Pancakes & Berries", description: "Whole Wheat Pancakes, Honey Mascarpone, Fresh Fruits" },
          ]
        },
        {
          subCategoryName: "Wood Fired Pizza",
          highlights: [
            "Classic Margherita", "Roastery's Signature BBQ Chicken", "Pepperoni"
          ],
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
          highlights: [
            "Boojum Burrito", "Traditional Irish Fish & Chips", "Juicy Lucy Grilled Chicken Burger"
          ],
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
    // <div className="bg-[#F8F5F2]">
    <div>
      <motion.div
        className="h-64 md:h-80 lg:h-96 w-full bg-stone-300 relative overflow-hidden"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        {/* Placeholder Div for Hero */}
        <div className="absolute inset-0 bg-stone-200 opacity-90"></div>
        {/* Optional Title Overlay if needed */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white text-shadow-md z-10">Our Menu</h1>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Removed separate Menu H1 as it's in the hero now */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-16">
          {/* Column 1: Drinks & Bakery */}
          <div className="space-y-16">
            {menuData.filter(cat => cat.column === 1).map((category, index, arr) => (
              <React.Fragment key={`${category.categoryName}-${index}-frag`}>
                <motion.div
                  key={`${category.categoryName}-${index}`}
                  className=""
                  variants={sectionVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold font-serif text-stone-900 mb-8">
                    {category.categoryName}
                  </h2>

                  {/* Standard Single Image Placeholder for all categories in Col 1 */}
                  <div className={`${category.aspectRatio || 'aspect-[16/9]'} bg-stone-200 mb-6 shadow-sm overflow-hidden relative`}>
                    <p className="absolute inset-0 flex items-center justify-center text-stone-500 italic text-sm">(Visual for {category.categoryName})</p>
                  </div>

                  {/* Highlights List */}
                  <ul className="space-y-2 text-stone-700 mb-4">
                    {category.highlights?.map((item, itemIndex) => (
                      <li key={`${item}-${itemIndex}`} className="font-medium">
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* More to Discover Teaser */}
                  <p className="text-stone-600 italic text-sm mt-6">
                    ...and more to explore at the cafe!
                  </p>
                </motion.div>
              </React.Fragment>
            ))}
          </div>

          {/* Column 2: Food */}
          <div className="space-y-16">
            {menuData.filter(cat => cat.column === 2).map((category) => (
              // Render each subcategory as its own visual block
              <React.Fragment key={`${category.categoryName}-food-cat`}>
                {category.subCategories && category.subCategories.filter(subCat => subCat.column !== 1).map((subCategory, subIndex, subArr) => {
                  // Determine image aspect ratio class based on subcategory
                  const imageAspectClass = subCategory.subCategoryName === "Appetizer" ? 'aspect-[4/3]' :
                                           subCategory.subCategoryName === "Roastery Club Breakfast" ? 'aspect-[16/9]' :
                                           'aspect-[16/9]'; // Default for others

                  return (
                  // Use the structure from Column 1 for each subcategory
                  <motion.div
                    key={`${subCategory.subCategoryName}-${subIndex}`}
                    className=""
                    variants={sectionVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    {/* Use subcategory name as the heading */}
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-stone-900 mb-8">
                      {subCategory.subCategoryName}
                    </h2>

                    {/* --- Render Text -> Image for ALL food subcategories --- */}
                    <>
                      {/* Highlights List (First) - Show Description */}
                      <ul className="space-y-3 text-stone-700 mb-4">
                        {subCategory.items
                          .filter(item => subCategory.highlights?.includes(item.name.replace(/\s*\(Veg\/Non-Veg\)/, '' )))
                          .map((item, itemIndex) => (
                          <li key={`${item.name}-${itemIndex}-desc`}>
                            <p className="font-medium">{item.name}</p>
                            {item.description && (
                              <p className="text-sm text-stone-600 mt-1">{item.description}</p>
                            )}
                          </li>
                        ))}
                      </ul>
                      {/* Image Placeholder (Second) - Use calculated class */}
                      <div className={`${imageAspectClass} bg-stone-200 mb-6 shadow-sm overflow-hidden relative`}>
                        <p className="absolute inset-0 flex items-center justify-center text-stone-500 italic text-sm">(Visual for {subCategory.subCategoryName})</p>
                      </div>
                    </>

                    {/* More to Discover Teaser */}
                    <p className="text-stone-600 italic text-sm mt-6">
                      ...and more {subCategory.subCategoryName.toLowerCase()} options available!
                    </p>
                  </motion.div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.p
          className="text-center text-lg font-medium text-stone-800 mt-16 lg:mt-24"
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ delay: 0.5, duration: 0.8}}
        >
          Visit Glenroast for the full menu experience and seasonal specials!
        </motion.p>

      </div>
    </div>
  );
} 