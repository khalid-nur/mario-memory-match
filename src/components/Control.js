import React from "react";

const Control = (props) => {
  return (
    <div>
      <div className="flex flex-col gap-3 px-4 mt-5 md:flex-row justify-around md:mt-10 ">
        <div>
          <h1 className="font-press-start text-base  uppercase text-white md:text-3xl">
            Moves:{props.turns}
          </h1>
        </div>
        <div>
          <h1 className="font-press-start text-base  uppercase text-white md:text-3xl">
            Time:00:00:00
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Control;
