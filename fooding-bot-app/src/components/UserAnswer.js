import React from 'react'
import user from '../images/user-pr-black.png';

export default function UserAnswer({ handleAfter, answer, ment }) {
    if (answer === '혼밥') {
        answer = '나 혼자';
        ment = ' 먹을꺼야!!!'
    }

    return (
        <div className='ma-cnt-box'>
            <div className='ma-user-left'>
                <div className='ma-user-bubble'>
                    <div className='ma-user-area'>
                        <div className='ma-user-answer'>
                            {"'"}<span className='u-choice-1'>{answer}</span>{"'"}
                            {ment === '을 예상하고 있어' ? '원' : null}
                            {ment}
                        </div>
                        {ment === '을 예상하고 있어' ? <button onClick={handleAfter}>확인</button> : null}
                    </div>
                </div>
            </div>
            <div className='ma-user-right'>
                <img src={user} />
            </div>
        </div>
    );
}