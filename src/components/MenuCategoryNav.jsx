'use client';

import React from 'react';

const MenuCategoryNav = ({ categories, activeFilter, onFilterChange }) => {
  return (
    <div className="sticky top-0 bg-white z-30 shadow-sm mb-8 py-3"> {/* Ensure top value matches Navbar height */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-2 sm:space-x-3 overflow-x-auto scrollbar-hide pb-2"> {/* Added pb-2 for scrollbar space if visible */}
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onFilterChange(category)}
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm whitespace-nowrap cursor-pointer
                ${activeFilter === category 
                  ? 'text-amber-700 font-semibold border-b-2 border-amber-600' 
                  : 'text-stone-600 hover:bg-stone-100 hover:text-stone-800'}
                transition-all duration-150 ease-in-out focus:outline-none`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCategoryNav; 