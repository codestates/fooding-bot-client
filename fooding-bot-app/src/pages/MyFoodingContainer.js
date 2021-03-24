import React from 'react';
import undo from '../images/undo.png';
import fooding from '../images/fooding-icon.png';
import {Link} from "react-router-dom";

import sample1 from '../images/sample/sample-food-1.png';
import sample2 from '../images/sample/sample-food-2.png';
import sample3 from '../images/sample/sample-food-3.png';
import sample4 from '../images/sample/sample-food-4.png';

function MyFoodingContainer() {


    return (
        <div className='mf-screen'>
            <div className='my-fooding'>
                <div className='app-top-menu'>
                    <Link to='Mypage'><img className='undo' src={undo} /></Link>
                </div>
            </div>
            <div>
                <div className='mf-title'>내가 등록한 푸딩</div>
                <div className='mf-wrap'>
                    <div className='mf-box'>
                        <div className='mf-box-right'>
                            <div className='mf-delete-x'>
                                <button>X</button>
                            </div>
                            <div className='mf-date'>
                                2021.03.21
                            </div>
                            <div className='mf-score'>
                                <img src={fooding} />
                                <img src={fooding} />
                                <img src={fooding} />
                                <img src={fooding} />
                                <img src={fooding} />
                            </div>
                        </div>
                        <div className='mf-img'>
                            <img src={sample1} />
                        </div>
                    </div>

                    <div className='mf-box'>
                        <div className='mf-box-right'>
                            <div className='mf-delete-x'>
                                <button>X</button>
                            </div>
                            <div className='mf-date'>
                                2021.02.13
                            </div>
                            <div className='mf-score'>
                                <img src={fooding} />
                                <img src={fooding} />
                            </div>
                        </div>
                        <div className='mf-img'>
                            <img src={sample2} />
                        </div>
                    </div>

                    <div className='mf-box'>
                        <div className='mf-box-right'>
                            <div className='mf-delete-x'>
                                <button>X</button>
                            </div>
                            <div className='mf-date'>
                                2020.12.07
                            </div>
                            <div className='mf-score'>
                                <img src={fooding} />
                                <img src={fooding} />
                                <img src={fooding} />
                            </div>
                        </div>
                        <div className='mf-img'>
                            <img src={sample3} />
                        </div>
                    </div>

                    <div className='mf-box'>
                        <div className='mf-box-right'>
                            <div className='mf-delete-x'>
                                <button>X</button>
                            </div>
                            <div className='mf-date'>
                                2019.07.13
                            </div>
                            <div className='mf-score'>
                                <img src={fooding} />
                                <img src={fooding} />
                                <img src={fooding} />
                                <img src={fooding} />
                            </div>
                        </div>
                        <div className='mf-img'>
                            <img src={sample4} />
                        </div>
                    </div>

                    <div className='mf-box'>
                        <div className='mf-box-right'>
                            <div className='mf-delete-x'>
                                <button>X</button>
                            </div>
                            <div className='mf-date'>
                                2019.07.13
                            </div>
                            <div className='mf-score'>
                                <img src={fooding} />
                                <img src={fooding} />
                                <img src={fooding} />
                                <img src={fooding} />
                            </div>
                        </div>
                        <div className='mf-img'>
                            <img src={sample4} />
                        </div>
                    </div>

                    <div className='mf-box'>
                        <div className='mf-box-right'>
                            <div className='mf-delete-x'>
                                <button>X</button>
                            </div>
                            <div className='mf-date'>
                                2019.07.13
                            </div>
                            <div className='mf-score'>
                                <img src={fooding} />
                                <img src={fooding} />
                                <img src={fooding} />
                                <img src={fooding} />
                            </div>
                        </div>
                        <div className='mf-img'>
                            <img src={sample4} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MyFoodingContainer;