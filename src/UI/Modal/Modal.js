import React, { memo } from "react";
import { connect } from 'react-redux';
import * as actions from '../../store/actions/action';


/* 
Modal is only shown when theres when there 
is an httpRequest error (props.error)
*/
const Modal = props => {
 let message = null;

 if (props.error) {
  message = (
   <div className="modal-pop-dialog" onClick={props.onERRORNULL}>
    <div className="message">
     <p> {props.error} </p>
     <button onClick={props.onERRORNULL} className="close-btn">
      x
          </button>
    </div>
   </div>
  );
 }
 return message;
};

const mapStateToProps = (state) => {
 return {
  error: state.error
 }
}

const mapDispatchToProps = (dispatch) => {
 return {
  onERRORNULL: () => dispatch(actions.errorNull()),
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Modal));
