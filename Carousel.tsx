import React from 'react';



export default function Carousel() {
    return (
        <div>
            <section className='bg-gradient-to-r from-black to-gray-700'>
                <div className='py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full'>
                        {/* First Product Card */}
                        <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col'>
                            <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img 
                                    src={require('../../public/images/shirt.webp')}
                                    alt="shirt-1"
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-10 left-0 p-4 xs:text-xl md:text-2xl">Classic Shopping</h3>
                            </a>
                        </div>

                        {/* Second Product Card */}
                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col">
                            <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                <img 
                                    src={require("../../public/images/shirt.webp")}
                                    alt="watch-1"
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-10 left-0 p-4 xs:text-xl md:text-2xl">Classic Watches</h3>
                            </a>
                        </div>

                        {/* Third Product Card */}
                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col">
                            <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                <img 
                                    src="https://secondhour.com.pk/products/top-brand-naviforce-men-watches-dual-display-sports-military-alarm-quartz-wristwatch-male-waterproof-digital-clock-reloj-hombre"
                                    alt="watch-2"
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-10 left-0 p-4 xs:text-xl md:text-2xl">FASHION FLIX</h3>
                            </a>
                        </div>

                        {/* Fourth Product Card */}
                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col">
                            <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                <img 
                                    src="https://www.gq.com/story/best-sneaker-brands"
                                    alt="shoes-1"
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-10 left-0 p-4 xs:text-xl md:text-2xl">FASHION FLIX</h3>
                            </a>
                        </div>

                        {/* Fifth Product Card */}
                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col">
                            <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                <img 
                                    src="https://brandsroots.com/collections/sneakers-shoes-for-mens"
                                    alt="shoes-2"
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-10 left-0 p-4 xs:text-xl md:text-2xl">Branded Shoes</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
