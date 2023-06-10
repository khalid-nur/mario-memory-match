import React from "react";
import ReactDOM from "react-dom";

const ResultScreen = (props) => {
  return ReactDOM.createPortal(
    <div className=" fixed bg-red-500 w-full h-screen z-10">
      <div className="flex flex-col items-center h-full justify-center">
        <h1 className=" font-press-start text-white text-center text-4xl mb-8 md:text-6xl">
          Well Done <br />
          <span>You Won!</span>
        </h1>

        <div className="flex items-center gap-2 justify-center mb-8">
          <div className="font-press-start text-white text-sm md:text-base">
            Moves:{props.turns}
          </div>

          <div className="font-press-start text-white text-sm md:text-base">
            Time:{props.minutes < 10 ? "0" + props.minutes : props.minutes}:
            {props.seconds < 10 ? "0" + props.seconds : props.seconds}
          </div>
        </div>
        <button
          className=" font-press-start text-white text-2xl md:text-4xl hover:text-blue-600"
          onClick={props.startGameHandler}
        >
          Play Again
        </button>
      </div>
    </div>,
    document.getElementById("result-sreen")
  );
};

export default ResultScreen;
