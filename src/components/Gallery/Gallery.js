import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../store/actions/action';

const Gallery = props => {
 //variable will be re-assign to hold a value
 let image = null;

 //when search property is not empty, return map values
 if (props.searchTimer) {
  //assign new value to images and return new element
  image = props.images.map((img, index) => {
   return (
    <div key={img.id} className={`gallery__item--${index}`}>
     <img src={img.urls.regular} alt={img.alt} onClick={props.getsrc} />
    </div>
   );
  });
 }

 return image;
};

const mapStateToProps = (state) => {
 return {
  searchTimer: state.searchTimer,
  images: state.unsplashImages
 }
}


export default connect(mapStateToProps, null)(Gallery);
