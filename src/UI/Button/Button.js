import React, { Fragment } from 'react';

const Button = (props) => {
  return (
    <Fragment>
      <button
        onClick={props.clicked}
        className={props.classe}>
        {props.name}
      </button>
    </Fragment>

  );
};

export default Button;