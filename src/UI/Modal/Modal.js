import React, { memo } from 'react';

const Modal = (props) => {

    let message = null;

    if (props.error) {
        message = (
            <div className='modal-pop' onClick= {props.toggle}>
                <div className='modal-pop-dialog'>
                    <div className='message'>
                    <p> {props.error} </p>
                    <button onClick={props.toggle} className='close-btn'>x</button>
                    </div>
                </div>
            </div>
    
        )
    }
    return message;
}

export default memo( Modal );