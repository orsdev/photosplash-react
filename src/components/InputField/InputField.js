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
        <Button clicked={props.search} classe='btn btn-outline-danger' name='MEN' />
        <Button clicked={props.search} classe='btn btn-outline-warning' name='WOMEN' />
        <Button clicked={props.search} classe='btn btn-outline-dark' name='NATURE' />
        <Button clicked={props.search} classe='btn btn-outline-secondary' name='TECHNOLOGY' />
        <Button clicked={props.search} classe='btn btn-outline-primary' name='CHILDREN' />
        <Button clicked={props.search} classe='btn btn-outline-success' name='ANIMALS' />
      </div>
    </div>
  )
}

export default inputField;