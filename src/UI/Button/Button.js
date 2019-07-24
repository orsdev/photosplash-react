import React, { Fragment } from 'react';

const Button = (props) => {
    return (
        <Fragment>
            <button
                onClick={props.pagination} 
                className={props.classe}>
                {props.name}
            </button>
        </Fragment>

    );
};

export default Button;