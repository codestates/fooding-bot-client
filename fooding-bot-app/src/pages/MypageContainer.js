import React from 'react';
import undo from '../images/undo.png';
import profileDefault from '../images/profile-user-default.png';

function MypageContainer() {

    return (
        <div className='myp-screen'>
            <div className='app-top-menu'>
                <img className='undo' src={undo} />
            </div>
            <div className='app-wrap'>
                <div className='app-box'>
                    <img className='myp-default' src={profileDefault} />
                    <div className='myp-user-name'>user name</div>
                    <button className='myp-btn-profile'>프로필 편집</button>
                    <div className='myp-address'>서울특별시 서초구 서초대로77길 17 스파크플러스 404호</div>
                    <div className='payment'>5,000원</div>
                    <div>
                        <button className='myp-btn'>내 푸딩 관리</button>
                        <button className='myp-btn'>로그아웃</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MypageContainer;
