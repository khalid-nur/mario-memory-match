import React from "react";

const Control = (props) => {
  return (
    <>
      <div className="flex flex-col gap-3 pt-8 pl-4 md:flex-row justify-around md:p-8  ">
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
    </>
  );
};

export default Control;
