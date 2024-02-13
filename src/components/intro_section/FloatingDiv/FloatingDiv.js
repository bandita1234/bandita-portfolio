import React from "react";
import "./FloatingDiv.css"

const FloatingDiv = ({image,txt1,txt2}) => {
  return (
    <div className="floatingDiv">
    <div className="floatingDivImg">
      <img src={image} alt="floatingImg" />
    </div>
      <span>
        {txt1} <br />
        {txt2}
      </span>
    </div>
  );
};

export default FloatingDiv;
