import React from "react";

const SingleCard = (props) => {
  // Grab the card which the user clicked
  const clickedCardHandler = () => {
    props.choiceHandler(props.card);
  };

  return (
    <div>
      <div>
        <img className="" src={props.card.src} alt="" />
        <img
          className="w-[200px]"
          src="/assets/questionmark.png"
          alt=" question mark"
          onClick={clickedCardHandler}
        />
      </div>
    </div>
  );
};

export default SingleCard;
