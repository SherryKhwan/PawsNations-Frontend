import React from "react";
import Staricon from "@heroicons/react/24/solid/StarIcon";
import StariconOutline from "@heroicons/react/24/outline/StarIcon";

const Rating = () => {
  return (
    <div className="flex items-center gap-4">
      <span className="font-bold text-lg">5.0</span>
      <div className="flex">
        <Staricon className="h-6 w-6 md:h-12 md:w-12 text-[#ffd700]" />
        <Staricon className="h-6 w-6 md:h-12 md:w-12 text-[#ffd700]" />
        <Staricon className="h-6 w-6 md:h-12 md:w-12 text-[#ffd700]" />
        <Staricon className="h-6 w-6 md:h-12 md:w-12 text-[#ffd700]" />
        <StariconOutline className="h-6 w-6 md:h-12 md:w-12 text-[#ffd700]" />
      </div>
    </div>
  );
};

export default Rating;
