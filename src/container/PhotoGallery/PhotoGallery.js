import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import InputField from "../../components/InputField/InputField";
import Spinner from "../../UI/Spinner/Spinner";
import Gallery from "../../components/Gallery/Gallery";
import Modal from "../../UI/Modal/Modal";
import Button from "../../UI/Button/Button";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Popup from "../../UI/Popup/Popup";
import * as actions from '../../store/actions/action';

import { connect } from 'react-redux';

class PhotoSplash extends Component {
 state = {
  per_page: 14,
  currentPage: 1,
  showPopup: false,
  popupImage: null,
 };

 GetData = val => {
  //destruct
  const { per_page, currentPage } = this.state;

  let key =
   "95b50323e9088ff9cb2368e19fc9f970a5c08b945fbc3fbc55972e1180989fbc";

  //build up url
  let url = `?query=${val}&page=${currentPage}&per_page=${per_page}&client_id=${key}`;

  // make httpRequest
  this.props.onMakeRequest(url);

 };

 ButtonSearch = () => {
  //get element from dom
  let val = document.getElementById("search");

  //call function (make httpRequest) if input field value is not empty
  if (val.value) {
   this.GetData(val.value);
  }
 };

 predifinedSearch = event => {
  //get element from dom
  let val = document.getElementById("search");

  let target = event.target;

  //variable holds targeted element textContent
  let textContent = target.textContent;

  //set input field value automatically
  val.value = textContent;

  //call function (make httpRequest) if textContent is  true ( not empty )
  if (textContent) {
   this.GetData(textContent);
  }

 };

 KeyCodeSearch = event => {
  //get element from dom
  let val = document.getElementById("search");

  //listen to button keycode
  let keyCode = event.keyCode;

  /*
  if keycode is an enter button, 
  and input field is not empty,
  call function (make httpRequest)
  */
  if (keyCode === 13 && val.value) {
   this.GetData(val.value);
  }
 };


 backButton = () => {
  //get element from dom
  let val = document.getElementById("search");

  //only decrement currentPage state when greater than 0
  if (this.state.currentPage > 1) {

   this.setState(function (prevState) {
    return {
     currentPage: prevState.currentPage - 1
    }
   })

   //make httpRequest
   this.GetData(val.value);

  }
 };

 nextButton = () => {
  //get element from dom
  let val = document.getElementById("search");

  //only increment currentPage state when lesser than 10
  if (this.state.currentPage > 0 && this.state.currentPage < 15) {

   this.setState(function (prevState) {
    return {
     currentPage: prevState.currentPage + 1
    }
   })

   //make httpRequest
   this.GetData(val.value);
  }
 };

 imagePopup = event => {
  //get selected dom element
  let target = event.target;

  //update state
  this.setState({
   popupImage: target.src,
   showPopup: true
  });

 };

 closePopup = () => {
  //update state
  this.setState({
   popupImage: null,
   showPopup: false
  });
 };

 render() {
  let navButton = null;
  let result = null;
  let images = null;

  //assign className
  let classProp = "spinner_gallery";

  //when true, assign spinner component to images
  if (this.props.spinnerTimer) {
   images = <Spinner />;
  }

  //when search property is not empty, return map values
  if (this.props.searchTimer) {
   //assign new className
   classProp = "gallery";

   //assign new value to images
   images = (
    <Gallery
     getsrc={this.imagePopup}
    />
   );

   //asign navButton Button component
   navButton = (
    <div className="navContainer">
     <Button clicked={this.backButton} name="&lArr;" />
     <Button clicked={this.nextButton} name="&rArr;" />
    </div>
   );

  }
  /*
    assign result a new value, show backdrop if error exit
    if error doesn't exit, show input field
  */
  result = (
   <React.Fragment>
    <Backdrop>
     <Modal />
    </Backdrop>

    <InputField
     keyCodeSearch={this.KeyCodeSearch}
     buttonSearch={this.ButtonSearch}
     search={this.predifinedSearch}
    />
    <div className="galleryContainer">
     <div className={classProp}>{images}</div>
     {navButton}
    </div>
   </React.Fragment>
  );

  return (
   <Layout>
    <React.Fragment>
     {this.state.showPopup ? (
      <Backdrop popup={true}>
       <Popup src={this.state.popupImage} close={this.closePopup} />
      </Backdrop>
     ) : (
       result
      )}
    </React.Fragment>
   </Layout>
  );
 }
}

const mapStateToProps = (state) => {
 return {
  searchTimer: state.searchTimer,
  spinnerTimer: state.spinnerTimer,
  error: state.error,
  unsplashImages: state.unsplashImages
 }
}

const mapDispatchToProps = (dispatch) => {
 return {
  onMakeRequest: (url) => dispatch(actions.makeRequest(url)),
  onERRORNULL: () => dispatch(actions.errorNull()),
 }
}


export default connect(mapStateToProps, mapDispatchToProps)(PhotoSplash);
