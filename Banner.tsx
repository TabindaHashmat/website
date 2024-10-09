import React from 'react';


export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-black to-gray-700 font-sans px-6 py-12 mb-7 h-[500px]">
      {/* Background image */}
      <div className="absolute inset-0 opacity-50">
        <img 
         src="c:\Users\azmat\Desktop\New folder\image.jpg"
         // Reference from public folder
          alt="Fashion Market"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Banner content */}
      <div className="relative z-10 container mx-auto flex-col justify-center items-center text-center">
        <h2 className="text-white sm:text-5xl text-3xl font-bold mb-4">
          Discover Our Fashion
        </h2>
        <p className="text-white text-lg text-center mb-6 max-w-xl mx-auto">
          Shop now for exclusive branded design shirts, watches, shoes on discount.
        </p>
        <button 
          type="button"
          className="bg-purple-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-cyan-500 transition duration-300"
        >
          Exciting Deals at 12am!
        </button>
      </div>
    </div>
  );
}
