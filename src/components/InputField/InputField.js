import React from 'react';

const inputField = (props) => {
  return (
    <div className='form-container'>
      <div className='form-group'>
        <input onKeyUp = {props.keyCodeSearch} id = 'search' type = 'search' placeholder = 'Search Here...' className = 'form-control' />
        <button onClick = {props.buttonSearch} className = 'button'><i className = 'fa fa-search'></i></button>
      </div>
    </div>
  )
}

export default inputField;