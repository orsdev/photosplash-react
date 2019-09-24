import React from "react";

/* 
Backdrop is only shown when theres when there 
is an httpRequest error (props.error) & when 
props.popup is true
*/
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
