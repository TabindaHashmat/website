import React from 'react';

// Component Imports
import Testimonial from './components/Testimonial';
import Productlist from './components/Productlist';
import Carousel from './components/Carousel';
import Progressor from './components/Progressor';
import Banner from './components/Banner';
import Offer from './components/Offer';
import Card from './components/Card';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Menuitem from './components/Menuitem';




export default function App() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-700 min-h-screen text-white">
      <Navbar />
 
        <Carousel />
        <Progressor />
        <Productlist />
        <Banner />
        <Offer />
        <Testimonial />
        <Card />
      <Menuitem />
      <Footer />
    </div>
  );
}
