import React from 'react';
import undo from '../images/undo.png';
import searchIcon from '../images/search-icon.png';

function SignupContainer() {
    return (
        <div className='signup-screen'>
            <div className='app-top-menu'>
                <img className='undo' src={undo} />
            </div>
            <div className='signup-title'>Create new Account</div>

            <div className='signup-input-wrap'>
                <div className='signup-input-box'>
                    <div><input type='text' placeholder="이름" /></div>
                    <div><input type='email' placeholder="이메일" /></div>
                    <button className='signup-email-check-button' >중복확인</button>

                    <div><input type='password' placeholder="비밀번호" /></div>
                    <label>비밀번호는 8자 이상으로 입력해주세요.</label>

                    <div><input type='password' placeholder="비밀번호 확인" /></div>
                    <label>입력하신 비밀번호가 다릅니다. 다시 한번 확인해주세요.</label>

                    <div className='signup-input-address'><input type='text' placeholder='주소' />
                        <span className='icon'>
                            <img className='search-icon' src={searchIcon} />
                        </span>
                    </div>
                    <div><input type='number' placeholder="한끼 예산" /></div>

                    <button className='signup-submit-button' type='submit'>Create Account</button>
                </div>
            </div>

        </div>
    );
}

export default SignupContainer;