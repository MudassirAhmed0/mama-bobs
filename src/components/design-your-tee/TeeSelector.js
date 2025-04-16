'use client'
import React, { useState } from "react";
import TeeCard from "./TeeCard";
import ApparelDesignTool from "./ApparelDesignTool";

// Actual tee data with real images from public/images/design-assets/tees
const teeData = [
  {
    id: 1,
    name: "Classic Cotton Tee",
    color: "White",
    price: 25.99,
    frontImage: "/images/design-assets/tees/white-front.png",
    backImage: "/images/design-assets/tees/white-back.png",
  },
  {
    id: 2,
    name: "Premium Cotton Tee",
    color: "Black",
    price: 29.99,
    frontImage: "/images/design-assets/tees/black-front.png",
    backImage: "/images/design-assets/tees/black-back.png",
  },
  {
    id: 3,
    name: "Soft Cotton Tee",
    color: "Navy Blue",
    price: 27.99,
    frontImage: "/images/design-assets/tees/navy-blue-front.png",
    backImage: "/images/design-assets/tees/navy-blue-back.png",
  },
  {
    id: 4,
    name: "Comfort Fit Tee",
    color: "Sky Blue",
    price: 26.99,
    frontImage: "/images/design-assets/tees/sky-blue-front.png",
    backImage: "/images/design-assets/tees/navy-blue-back.png", // Using navy back as fallback since sky-blue-back.png is not in the list
  },
  {
    id: 5,
    name: "Summer Tee",
    color: "Yellow",
    price: 24.99,
    frontImage: "/images/design-assets/tees/yellow-front.png",
    backImage: "/images/design-assets/tees/yellow-back.png",
  },
  {
    id: 6,
    name: "Pastel Cotton Tee",
    color: "Baby Pink",
    price: 28.99,
    frontImage: "/images/design-assets/tees/bab-pink-front.png",
    backImage: "/images/design-assets/tees/baby-pink-back.png",
  },
];

const TeeSelector = () => {
  const [selectedTee, setSelectedTee] = useState(null);

  const handleSelectTee = (tee) => {
    setSelectedTee(tee);
    console.log("Selected tee:", tee);
  };

  return (
    <div className="mt-[10vw]">
      {!selectedTee ? (
        <div className="container mx-auto px-4 py-8">

          <h1 className="text-3xl font-bold text-center mb-8">Choose Your Shirt You Want to Design</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teeData.map((tee) => (
              <TeeCard key={tee.id} tee={tee} onSelect={handleSelectTee} />
            ))}
          </div>
        </div>
      ) : (
        <ApparelDesignTool selectedTee={selectedTee} />
      )}
    </div>
  );
};

export default TeeSelector; 