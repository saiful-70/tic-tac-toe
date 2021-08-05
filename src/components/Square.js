import React from "react";

import { GiCrossMark } from "react-icons/gi";
import { BiCircle } from "react-icons/bi";

const Square = ({ value, onClick }) => {
  const finalValue = () => {
    if (value === "X") {
      return <GiCrossMark className="icon" />;
    } else if(value === "O") {
      return <BiCircle className="icon" />;
    }
  };

  return (
    <button type="button" className="square" onClick={onClick}>
      {finalValue()}
    </button>
  );
};

export default Square;
