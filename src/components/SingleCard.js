import React from "react";

const SingleCard = (props) => {
  // Grab the card which the user clicked
  const clickedCardHandler = () => {
    if (!props.disabled) {
      props.choiceHandler(props.card);
    }
  };

  return (
    <div className=" relative z-0">
      <div>
        <img
          className={
            props.flipped
              ? "rotate-y-0 absolute duration-200 delay-75"
              : " rotate-y-90 absolute ease-in "
          }
          src={props.card.src}
          alt=""
        />
        <img
          className={
            props.flipped
              ? "rotate-y-90 delay-75 w-[200px] border-solid"
              : " duration-200 delay-75 ease-in w-[200px] border-solid border-2 border-white rounded-lg"
          }
          src="/assets/questionmark.png"
          alt=" question mark"
          onClick={clickedCardHandler}
        />
      </div>
    </div>
  );
};

export default SingleCard;
