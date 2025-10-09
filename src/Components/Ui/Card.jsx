

import React from "react";
import card1 from "../../assets/4.png";
import card2 from "../../assets/5.png";
import card3 from "../../assets/6.png";

function Card() {
  const cards = [
    {
      img: card1,
      title: "Tailor Sewing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      img: card2,
      title: "Measurement",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      img: card3,
      title: "Ready-made",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ];

  return (
    <div className="mx-10 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {cards.map((card, index) => (
        <div
          key={index}
          className="transition-transform duration-300 hover:scale-105 w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 text-center"
        >
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-64 object-cover rounded-xl mx-auto"
          />
          <div className="mt-6 mb-2 text-2xl font-medium">{card.title}</div>
          <div className="text-gray-600">{card.desc}</div>
        </div>
      ))}
    </div>
  );
}

export default Card;
