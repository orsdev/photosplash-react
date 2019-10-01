import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../store/actions/action';

/* 
Backdrop is only shown when theres when there 
is an httpRequest error (props.error) & when 
props.popup is true
*/
const Backdrop = props => {
 let backdrop = null;

 if (props.error || props.popup) {
  backdrop = (
   <div onClick={props.onERRORNULL} className="backdrop" error={props.error}>
    {props.children}
   </div>
  );
 }
 return backdrop;
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


export default connect(mapStateToProps, mapDispatchToProps)(Backdrop);
