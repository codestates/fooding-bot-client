import React from 'react';
import undo from '../images/undo.png';

function PasswordContainer() {


    return (
        <div className='app-background'>
            <div className='app-top-menu'>
                <img className='undo' src={undo} />
                <button>저장</button>
            </div>
        </div>
    );
}

export default PasswordContainer;