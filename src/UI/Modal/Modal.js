import React, { memo } from "react";


/* 
Modal is only shown when theres when there 
is an httpRequest error (props.error)
*/
const Modal = props => {
  let message = null;

  if (props.error) {
    message = (
      <div className="modal-pop-dialog" onClick={props.toggle}>
        <div className="message">
          <p> {props.error} </p>
          <button onClick={props.toggle} className="close-btn">
            x
          </button>
        </div>
      </div>
    );
  }
  return message;
};

export default memo(Modal);
