import React from "react";

const popup = props => {
  return (
    <div className="popup">
      <span onClick={props.close} className="close-btn">
        X
      </span>
      <img src={props.src} alt="popup" className="img-popup" />
    </div>
  );
};

export default popup;
