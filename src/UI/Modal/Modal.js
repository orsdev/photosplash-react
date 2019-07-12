import React, { memo } from 'react';

const Modal = (props) => {

    let message = null;

    if (props.error) {
        message = (
            <div className='modal' onClick= {props.toggle}>
                <div className='modal-dialog'>
                    <div className='message'>
                    <p> {props.error} </p>
                    <button className='btn-close'>x</button>
                    </div>
                </div>
            </div>
    
        )
    }
    return message;
}

export default memo( Modal );