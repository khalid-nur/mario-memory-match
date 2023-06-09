import React from "react";
import ReactDOM from "react-dom";

const StartScreen = (props) => {
  return ReactDOM.createPortal(
    <div className=" fixed bg-red-500 w-full h-screen z-10">
      <div className=" flex flex-col items-center mt-16 md:mt-32">
        <img
          className=" w-[300px] md:w-[400px] mb-8 "
          src="/assets/mainscreen-mario.png"
          alt=""
        />
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-open-sans text-white text-3xl text-center mb-8 md:text-4xl">
            WELCOME TO MARIO MEMORY GAME
          </h1>

          <button
            className=" font-open-sans text-white text-2xl md:text-2xl hover:text-blue-600"
            onClick={props.startGameHandler}
          >
            Start Game
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("start-screen")
  );
};

export default StartScreen;
