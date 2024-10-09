"use client";
import React from "react";

type Offer = {
  tittle: string;
  description: string;
};

const SpecialOffers: React.FC = () => {
  const offers: Offer[] = [
    {
      tittle: "Happy Hour",
      description: "5PM se 7PM tk tamam purchaseing par 50%off",
    },
    {
      tittle: "Family Package",
      description: "5PM se 7PM tk tamam purchaseing par 50%off",
    },
    {
      tittle: "Weekly Purchase",
      description: "5PM se 7PM tk tamam purchaseing par 50%off",
    },
  ];

  const handleOfferClick = (description: string) => {
    alert(description);
  };

  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Special Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <button
              key={index}
              onClick={() => handleOfferClick(offer.description)}
              className="bg-white shadow-lg rounded-lg text-center hover:bg-gray-300 transition duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-slate-700">
                {offer.tittle}
              </h3>
              <p className="text-red-700 mt-3">{offer.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
