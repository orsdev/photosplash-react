import React from "react";

const Gallery = props => {
  //variable will be re-assign to hold a value
  let image = null;

  //copy state
  let copyState = { ...props.image };

  //when search property is not empty, return map values
  if (props.searchTimer) {
    //assign new value to images and return new element
    image = copyState.search.map((img, index) => {
      return (
        <div key={img.id} className={`gallery__item--${index}`}>
          <img src={img.urls.regular} alt={img.alt} onClick={props.getsrc} />
        </div>
      );
    });
  }

  return image;
};

export default Gallery;
