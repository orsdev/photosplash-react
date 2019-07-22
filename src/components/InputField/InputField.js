import React from 'react';

const inputField = (props) => {
  return (
    <div className='form-container'>
      <div className='form-group'>
        <input onKeyUp = {props.keyCodeSearch} id = 'search' type = 'search' placeholder = 'Search Here...'  />
        <button onClick = {props.buttonSearch} className = 'search'><i className = 'fa fa-search'></i></button>
      </div>
    </div>
  )
}

export default inputField;