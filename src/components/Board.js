import { React, useState, useEffect } from "react";
import Control from "./Control";
import SingleCard from "./SingleCard";

const cardImages = [
  { src: "/assets/mario.jpg", matched: false },
  { src: "/assets/luigi.jpg", matched: false },
  { src: "/assets/peach.jpg", matched: false },
  { src: "/assets/donkey.jpg", matched: false },
  { src: "/assets/yoshi.jpg", matched: false },
  { src: "/assets/wario.jpg", matched: false },
];

const Board = () => {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [turns, setTurns] = useState(null);

  // Shuffle the card of images
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => {
        return Math.random() - 0.5;
      })
      .map((shuffledCard) => ({ ...shuffledCard, id: Math.random() }));

    setCards(shuffledCards);
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  // start of the game a new fresh of cards is set
  useEffect(() => {
    shuffleCards();
  }, []);

  // Choice handler
  const choiceHandler = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // Compare two card
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        console.log("we have a match");
        setCards((prevCards) => {
          return prevCards.map((prevCard) => {
            if (prevCard.src === choiceOne.src) {
              return { ...prevCard, matched: true };
            } else {
              return prevCard;
            }
          });
        });
        resetTurn();
      } else {
        console.log("no match");
        setTimeout(() => {
          resetTurn();
        }, 500);
      }
    }
  }, [choiceOne, choiceTwo]);

  // Rest the cards
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  console.log(cards);
  console.log(choiceOne);
  console.log(choiceTwo);

  return (
    <div>
      <Control />
      <div className="flex flex-col items-center justify-center  px-2 mt-5">
        <div className=" grid grid-cols-3 gap-2 mt-5 md:grid-cols-4 cursor-pointer">
          {cards.map((card) => (
            <SingleCard
              key={card.id}
              card={card}
              choiceHandler={choiceHandler}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
