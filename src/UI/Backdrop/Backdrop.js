import React from "react";

const Backdrop = props => {
  let backdrop = null;

  if (props.error || props.popup) {
    backdrop = (
      <div onClick={props.toggle} className="backdrop" error={props.error}>
        {props.children}
      </div>
    );
  }
  return backdrop;
};

export default Backdrop;
