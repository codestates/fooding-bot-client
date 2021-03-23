import React from 'react';
import foodingT from '../images/fooding-talk.png';
import fooding from '../images/fooding-icon.png';
import user from '../images/user-pr-black.png';

import sample1 from '../images/sample/sample-food-1.png';

function MainPageContainer() {
    return (
        <div className='ma-screen'>
            <div className='ma-top-menu'>
                <div className='ma-top-left'>
                    <img className='ma-icon' src={foodingT} />
                </div>
                <div className='ma-top-right'>
                    <div className='ma-service-ment'>
                        <span className='ma-username'>김코딩</span>님 안녕하세요. <p>푸딩입니다!
                        푸딩봇을 이용해 주셔서 감사합니다!</p>
                    </div>
                    <button className='ma-food-btn'>음식 추천</button>
                    <button className='ma-myp-btn'>마이페이지</button>
                </div>
            </div>

            <div className='ma-content'>
                <div className='ma-cnt-wrap'>

                    {/* fooding-bot case #1 */}
                    <div className='ma-cnt-box'>
                        <div className='ma-fd-left'>
                            <img className='ma-icon' src={fooding} />
                        </div>
                        <div className='ma-fd-right'>
                            <div className='ma-fooding-bubble'>
                                <div>한식, 중식, 일식, 양식 중에서 <br />어느걸 드시겠습니까?</div>
                                <div>
                                    <button>한식</button>
                                    <button>중식</button>
                                    <button>일식</button>
                                    <button>양식</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* user case #1 */}
                    <div className='ma-cnt-box'>
                        <div className='ma-user-left'>
                            <div className='ma-user-bubble'>
                                <div>
                                    {"'"}<span className='u-choice-1'>한식</span>{"'"}에서 음식 추천해줘~
                                </div>
                            </div>
                        </div>
                        <div className='ma-user-right'>
                            <img src={user} />
                        </div>
                    </div>

                    {/* fooding-bot case #2 */}
                    <div className='ma-cnt-box'>
                        <div className='ma-fd-left'>
                            <img className='ma-icon' src={fooding} />
                        </div>
                        <div className='ma-fd-right'>
                            <div className='ma-fooding-bubble'>
                                <div>몇 명이 식사하시나요?</div>
                                <div>
                                    <button>혼밥</button>
                                    <button>2 명</button>
                                    <button>3 명 이상</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* user case #2 */}
                    <div className='ma-cnt-box'>
                        <div className='ma-user-left'>
                            <div className='ma-user-bubble'>
                                <div>
                                    {"'"}<span className='u-choice-1'>2 명</span>{"'"}이 식사 할거야
                                </div>
                            </div>
                        </div>
                        <div className='ma-user-right'>
                            <img src={user} />
                        </div>
                    </div>

                    {/* fooding-bot case #3 */}
                    <div className='ma-cnt-box'>
                        <div className='ma-fd-left'>
                            <img className='ma-icon' src={fooding} />
                        </div>
                        <div className='ma-fd-right'>
                            <div className='ma-fooding-bubble'>
                                <div>금액은 얼마를 예상하시나요?</div>
                                <div>
                                    <button>입력하기</button>
                                    <button>모르겠어</button>
                                </div>
                                <div>
                                    <input type='number' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* user case #3 */}
                    <div className='ma-cnt-box'>
                        <div className='ma-user-left'>
                            <div className='ma-user-bubble'>
                                <div>
                                    {"'"}<span className='u-choice-1'>5,000 원</span>{"'"}을 예상하고 있어
                                </div>
                            </div>
                        </div>
                        <div className='ma-user-right'>
                            <img src={user} />
                        </div>
                    </div>

                    {/* fooding-bot case #4 */}
                    <div className='ma-cnt-box'>
                        <div className='ma-fd-left'>
                            <img className='ma-icon' src={fooding} />
                        </div>
                        <div className='ma-fd-right'>
                            <div className='ma-fooding-bubble'>
                                <div className='ma-food-area'>
                                    <img src={sample1} />
                                </div>
                                <div>
                                    오늘의 추천 음식은
                                    {" '"}<span className='u-choice-1'>햄버거</span>{"'"} 입니다.
                                    <br />
                                    평균 푸딩: <span className='u-choice-1'>4.2</span>
                                </div>
                                <div>
                                    <button>재추천</button>
                                    <button>재설정</button>
                                    <button>고마워</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* fooding-bot case #5 */}
                    <div className='ma-cnt-box'>
                        <div className='ma-fd-left'>
                            <img className='ma-icon' src={fooding} />
                        </div>
                        <div className='ma-fd-right'>
                            <div className='ma-fooding-bubble'>
                                <div>맛있게 드셨나요? <br /> 푸딩을 달아주세요!</div>
                                <div>
                                    <button>푸딩주기</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default MainPageContainer;