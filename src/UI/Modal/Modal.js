import React, { memo } from 'react';

const Modal = (props) => {

    let message = null;

    if (props.error) {
        message = (
            <div className='modal' onClick= {props.toggle}>
                <div className='modal-dialog'>
                    <div className='message'>
                    <p> {props.error} </p>
                    <a href='#' class='btn-close'>x</a>
                    </div>
                </div>
            </div>
    
        )
    }
    return message;
}

export default memo( Modal );