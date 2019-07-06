import React from 'react'

const Spinner = (props) => {
    return (
        <div className='spinner_container'>
            <div className='lds-roller'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Spinner;