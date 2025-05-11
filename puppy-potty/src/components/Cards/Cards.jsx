import React from "react";

const cards = [
  {
    title: "Dog Adoption",
    icon: "./img/icona.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Semper tortor dictumst tristique id nunc dolor proin consectetur.",
    highlighted: false,
  },
  {
    title: "Dog Breeding",
    icon: "./img/iconb.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Semper tortor dictumst tristique id nunc dolor proin consectetur.",
    highlighted: true,
  },
  {
    title: "Dog Shelter",
    icon: "./img/iconc.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Semper tortor dictumst tristique id nunc dolor proin consectetur.",
    highlighted: false,
  },
];

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 py-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`w-full max-w-[370px] mx-auto rounded-xl shadow-md p-6 text-center border transition-all duration-300 ${
            card.highlighted
              ? "bg-yellow-400 text-white border-blue-500"
              : "bg-white text-black"
          }`}
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-400 flex items-center justify-center">
            <img src={card.icon} alt={card.title} className="w-8 h-8" />
          </div>
          <h3
            className={`text-xl font-semibold mb-2 ${
              card.highlighted ? "text-white" : "text-black"
            }`}
          >
            {card.title}
          </h3>
          <p
            className={`text-sm ${
              card.highlighted ? "text-white/90" : "text-gray-500"
            }`}
          >
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
