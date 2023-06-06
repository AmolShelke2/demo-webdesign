import React from "react";

import cardsData from "@/utils/cardsData.js";

const InformationCards = () => {
  return (
    <div className="grid place-items-center sm:place-items-start px-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:px-24">
      {cardsData.map((card) => (
        <div className="h-[250px] w-[300px] xl:w-[380px] bg-slate-100 shadow-sm shadow-[#C3A9FF] mb-2 rounded-sm md:mr-2 gap-4">
          <h1 className="bg-[#3F3F3F] text-white text-xl p-2 mb-2">
            {card.title}
          </h1>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  );
};

export default InformationCards;
