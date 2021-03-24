import React from 'react';
import undo from '../images/undo.png';
import profileDefault from '../images/profile-user-default.png';
import {Link} from "react-router-dom";

function MypageContainer() {

    return (
        <div className='myp-screen'>
            <div className='app-top-menu'>
                <Link to='Main'><img className='undo' src={undo} /></Link>
            </div>
            <div className='app-wrap'>
                <div className='app-box'>
                    <img className='myp-default' src={profileDefault} />
                    <div className='myp-user-name'>user name</div>
                    <Link to='Profile'><button className='myp-btn-profile'>프로필 편집</button></Link>
                    <div className='myp-address'>서울특별시 서초구 서초대로77길 17 스파크플러스 404호</div>
                    <div className='payment'>5,000원</div>
                    <div>
                        <Link to='/MyFooding'><button className='myp-btn'>내 푸딩 관리</button></Link>
                        <Link to='/'><button className='myp-btn'>로그아웃</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MypageContainer;
