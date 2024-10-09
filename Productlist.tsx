import React from 'react';

const products = [
  {
    id: 1,
    title: "FASHION FLIX",
    category: "fixing",
    price: "1200:00",
    imageUrl: "https://www.fibre2fashion.com/garments/men-s-branded-shirt-buyers-18147888",
    bgColor: "bg-amber-500"
  },
  {
    id: 2,
    title: "SHOES",
    category: "fashion",
    price: "2200:00",
    imageUrl: "https://brandsroots.com/collections/sneakers-shoes-for-mens",
    bgColor: "bg-amber-500"
  },
  {
    id: 3,
    title: "Collection New",
    category: "delight",
    price: "1500:00",
    imageUrl: "https://secondhour.com.pk/products/top-brand-naviforce-men-watches-dual-display-sports-military-alarm-quartz-wristwatch-male-waterproof-digital-clock-reloj-hombre",
    bgColor: "bg-amber-500"
  }
];

export default function ProductList() {
  return (
    <div className='p-6 flex flex-wrap items-center justify-center mb-6'>
      {products.map(product => (
        <div 
          key={product.id} 
          className={`${product.bgColor} flex shrink-0 m-6 relative overflow-hidden rounded-lg shadow-lg group max-w-sm`}
        >
          <svg 
            className="absolute top-0 left-0 mb-8 scale-150 group-hover:scale-125 transition-transform"
            viewBox="0 0 375 283" 
            fill="none"
          >
            <rect x="159.52" y="152" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
            <rect x="107.48" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
          </svg>

          <div className='relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform'>
            <div 
              className="absolute w-48 left-0 mb-24 ml-3"
              style={{ background: "radial-gradient(black, transparent 50%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: 0.2 }}
            >
              <img className="relative w-50" src={product.imageUrl} alt={product.title} />
            </div>

            <div className='relative text-white px-6 pb-6 mt-6'>
              <span className='block opacity-75 -mb-1'>{product.category}</span>

              <div className='flex justify-between'>
                <span className='block font-semibold text-xl'>{product.title}</span>
                <span className='block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2'>{product.price}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
