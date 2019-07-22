import React from 'react';
import Button from '../../UI/Button/Button';

const inputField = (props) => {
  return (
    <div className='form-container'>
      <div className='form-group'>
        <input onKeyUp={props.keyCodeSearch} id='search' type='search' placeholder='Search Here...' />
        <button onClick={props.buttonSearch} className='search'><i className='fa fa-search'></i></button>
      </div>
      <div className='btn-group'>
        <Button classe='btn btn-outline-danger' name='MEN' />
        <Button classe='btn btn-outline-warning' name='WOMEN' />
        <Button classe='btn btn-outline-dark' name='NATURE' />
        <Button classe='btn btn-outline-secondary' name='TECHNOLOGY' />
        <Button classe='btn btn-outline-primary' name='CHILDREN' />
        <Button classe='btn btn-outline-success' name='ANIMALS' />
      </div>
    </div>
  )
}

export default inputField;