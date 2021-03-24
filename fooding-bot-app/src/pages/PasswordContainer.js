import React from 'react';
import undo from '../images/undo.png';
import {Link} from "react-router-dom";

function PasswordContainer() {


    return (
        <div className='pw-screen'>
            <div className='app-top-menu'>
                <Link to='/Profile'><img className='undo' src={undo} /></Link>
                <button><Link to='/Profile'>저장</Link></button>
            </div>
            <div className='pw-input-area'>
                <div className='app-wrap'>
                    <div className='app-box'>
                        <div><input id='pw' type='password' placeholder='비밀번호' /></div>
                        <div><label htmlFor='pw'>비밀번호는 8자 이상으로 입력해주세요.</label></div>
                        <div><input id='pw-check' type='password' placeholder='비밀번호 확인' /></div>
                        <div><label htmlFor='pw-check'>입력하신 비밀번호가 다릅니다. 다시 한번 확인해주세요.</label></div>
                    </div >
                </div >
            </div>
        </div >
    );
}

export default PasswordContainer;