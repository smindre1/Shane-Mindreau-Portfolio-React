import React from 'react';

function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='flexColumn popupInner'>
                <h3>Thank You For Your Message!</h3>
                <button className='closeBtn' onClick={() => props.setTrigger(false)}>Close</button>
            </div>
        </div>
    ) : ""
}

export default Popup;