import React from 'react';

function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popupInner'>
                <button className='closeBtn' onClick={() => props.setTrigger(false)}>Close</button>
            </div>
        </div>
    ) : ""
}

export default Popup;