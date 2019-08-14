import React from 'react';

const Gallery = (props) => {
if(props.searcedImages !== 0) {
 return (
    <div className = { `gallery__item--${props.id}`}>
      <img src={props.pic} alt={props.alt} onClick={props.getSrc} />
    </div>
 );
}
}

export default Gallery;