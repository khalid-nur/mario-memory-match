import { React, useState, useEffect } from "react";
import Control from "./Control";
import SingleCard from "./SingleCard";

const cardImages = [
  { src: "/assets/mario.jpg" },
  { src: "/assets/luigi.jpg" },
  { src: "/assets/peach.jpg" },
  { src: "/assets/donkey.jpg" },
  { src: "/assets/yoshi.jpg" },
  { src: "/assets/wario.jpg" },
];

const Board = () => {
  const [cards, setCards] = useState([]);

  // Shuffle the card of images
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => {
        return Math.random() - 0.5;
      })
      .map((shuffledCard) => ({ ...shuffledCard }));

    setCards(shuffledCards);
  };

  // start of the game a new fresh of cards is set
  useEffect(() => {
    shuffleCards();
  }, []);

  console.log(cards);

  return (
    <div>
      <Control />
      <div className="flex flex-col items-center justify-center  px-2 mt-5">
        <div className=" grid grid-cols-3 gap-5 mt-5 md:grid-cols-4">
          {cards.map((cards) => (
            <SingleCard card={cards} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
