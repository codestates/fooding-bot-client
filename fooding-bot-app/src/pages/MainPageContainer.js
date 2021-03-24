import React, { useState, useEffect } from 'react';
import Fooding from '../components/FoodingAsk.js';
import UserAnswer from '../components/UserAnswer.js';
import foodingT from '../images/fooding-talk.png';

import sample1 from '../images/sample/sample-food-1.png';

function MainPageContainer() {

    const [isFooding, setIsFooding] = useState(false);
    const [foodCategory, setFoodCategory] = useState({ name: '', isCategory: false });
    const [personnel, setPersonnel] = useState({ howMany: '', isPersonnel: false });
    const [estimatedAmount, setEstimatedAmount] = useState({ estimated: '', isEstimated: false });
    const [isPrice, setPrice] = useState(false);
    const [isAfter, setAfter] = useState({ personnelAfter: false, recommend: false, review: false });

    useEffect(() => {
        console.log(isAfter);
    });

    const handleFoodCategory = (category) => {
        setFoodCategory({ name: category, isCategory: true })
    }

    const handlePersonnel = (many) => {
        setPersonnel({ howMany: many, isPersonnel: true })
        setAfter({ personnelAfter: true, recommend: false, review: false })
    }

    const handlePrice = (answer) => {
        if (answer === '입력하기') {
            setPrice(true)
            setEstimatedAmount({ isEstimated: true })
        } else {
            setPrice(false)
            setEstimatedAmount({ estimated: '5,000', isEstimated: true })
        }
    }

    const handleInputPrice = (e) => {
        if (e > 7) {
            e = e.slice(0, 7)
        }
        // let showPrice = e.toLocaleString('ko-KR');
        setEstimatedAmount({ estimated: e, isEstimated: true })
    }

    const handleAfter = () => {
        setAfter({ personnelAfter: true, recommend: true, review: false })
    }

    const handleReview = () => {
        setAfter({ personnelAfter: true, recommend: true, review: true })
    }


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
                    <button className='ma-food-btn' onClick={() => setIsFooding(true)}>음식 추천</button>
                    <button className='ma-myp-btn'>마이페이지</button>
                </div>
            </div>

            <div className='ma-content'>
                <div className='ma-cnt-wrap'>

                    {/* fooding-bot case #1 */}
                    {isFooding && <Fooding
                        handleUserChoice={handleFoodCategory}
                        ment={<div>한식, 중식, 일식, 양식 중에서 <br />어느걸 드시겠습니까?</div>}
                        choice={['한식', '중식', '일식', '양식']}
                    />}
                    {/* <Fooding
                        handleUserChoice={handleFoodCategory}
                        ment={<div>한식, 중식, 일식, 양식 중에서 <br />어느걸 드시겠습니까?</div>}
                        choice={['한식', '중식', '일식', '양식']}
                    /> */}

                    {/* user case #1 */}
                    {foodCategory.name !== '' && <UserAnswer
                        answer={foodCategory.name}
                        ment={'에서 음식 추천해줘~'}
                    />}

                    {/* fooding-bot case #2 */}
                    {foodCategory.isCategory && <Fooding
                        handleUserChoice={handlePersonnel}
                        ment={<div>몇 명이 식사하시나요?</div>}
                        choice={['혼밥', '2 명', '3 명 이상']}
                    />}

                    {/* user case #2 */}
                    {personnel.isPersonnel && <UserAnswer
                        answer={personnel.howMany}
                        ment={'이 식사 할거야'}
                    />}

                    {/* fooding-bot case #3 */}
                    {isAfter.personnelAfter && <Fooding
                        handleUserChoice={handlePrice}
                        handleInputPrice={handleInputPrice}
                        ment={<div>금액은 얼마를 예상하시나요?</div>}
                        choice={['입력하기', '모르겠어']}
                        isPrice={isPrice}
                    />}

                    {/* user case #3 */}
                    {estimatedAmount.isEstimated && <UserAnswer
                        handleAfter={handleAfter}
                        answer={estimatedAmount.estimated}
                        ment={'을 예상하고 있어'}
                    />}

                    {/* fooding-bot case #4 */}
                    {isAfter.recommend && <Fooding
                        handleUserChoice={handleReview}
                        img={
                            <div className='ma-food-area'>
                                <img src={sample1} />
                            </div>
                        }
                        ment={
                            <div>
                                오늘의 추천 음식은
                            {" '"}<span className='u-choice-1'>햄버거</span>{"'"} 입니다.
                            <br />
                            평균 푸딩: <span className='u-choice-1'>4.2</span>
                            </div>
                        }
                        choice={['재추천', '재설정', '고마워']}
                    />}

                    {/* fooding-bot case #5 */}
                    {isAfter.review && <Fooding
                        ment={<div>맛있게 드셨나요? <br /> 푸딩을 달아주세요!</div>}
                        choice={['푸딩주기']}
                    />}

                </div>
            </div>
        </div>
    );
}

export default MainPageContainer;