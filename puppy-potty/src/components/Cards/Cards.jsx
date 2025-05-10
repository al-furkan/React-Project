import React from "react";

const cards = [
  {
    title: "Dog Adoption",
    icon: "/icons/adoption.svg", // Replace with actual icon path
    description: "Lorem ipsum dolor sit amet consectetur. Semper tortor dictumst tristique id nunc dolor proin consectetur.",
    highlighted: false,
  },
  {
    title: "Dog Breeding",
    icon: "/icons/breeding.svg", // Replace with actual icon path
    description: "Lorem ipsum dolor sit amet consectetur. Semper tortor dictumst tristique id nunc dolor proin consectetur.",
    highlighted: true,
  },
  {
    title: "Dog Shelter",
    icon: "/icons/shelter.svg", // Replace with actual icon path
    description: "Lorem ipsum dolor sit amet consectetur. Semper tortor dictumst tristique id nunc dolor proin consectetur.",
    highlighted: false,
  },
];

const Cards = () => {
  return (
    <div className="flex justify-center items-center gap-6 py-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`w-[370px] h-[398px] rounded-xl shadow-md p-6 text-center border transition-all duration-300 ${
            card.highlighted
              ? "bg-yellow-400 text-white border-blue-500"
              : "bg-white text-black"
          }`}
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-400 flex items-center justify-center">
            <img src={card.icon} alt={card.title} className="w-8 h-8" />
          </div>
          <h3 className={`text-xl font-semibold mb-2 ${card.highlighted ? "text-white" : "text-black"}`}>
            {card.title}
          </h3>
          <p className={`${card.highlighted ? "text-white/90" : "text-gray-500"} text-sm`}>
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
