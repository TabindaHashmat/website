import React from 'react';
import { FaTshirt, FaBolt, FaCartArrowDown, FaSearch } from 'react-icons/fa'; // Fixed imports

export default function Navbar() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 xl:grid-cols-1">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-gray-700">
            <div className="flex justify-between items-center">
              {/* Logo Section */}
              <div className="flex items-center gap-4">
                <FaTshirt className="text-xl text-yellow-400" />
                <span className="ml-2 text-lg font-semibold text-white">ShirtStore</span>

                {/* SEARCH bar */}
                <div className="relative">
                  <input
                    className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block"
                    placeholder="Search for your favorite shirts, watches, shoes, etc."
                  />
                  <FaSearch
                    className="w-5 h-5 text-lime-300 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block"
                  />
                </div>
              </div>

              {/* Flash Deal Text */}
              <div className="flex items-center gap-2">
                <FaBolt className="w-5 h-5 text-amber-400 hidden lg:block md:block" />
                <p className="text-5xl text-white hidden lg:block md:block">
                  Order now and get it in
                  <span className="text-amber-400"> 15 minutes</span>
                </p>
              </div>

              {/* Cart Icon and User Avatar */}
              <div className="flex items-center gap-4">
                <FaCartArrowDown className="w-8 h-8 text-sky-400 rounded-full ring-2 ring-sky-400 relative hover:text-amber-400" />
                
                {/* User Avatar */}
                <img
                  className="inline-block w-8 h-8 rounded-full ring-2 ring-sky-400 hover:text-amber-400"
                  src="https://via.placeholder.com/150" // Use a valid image path or URL
                  alt="User Avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
