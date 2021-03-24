import React, { useState } from 'react'
import BtnAsk from './ButtonAsk.js';
import fooding from '../images/fooding-icon.png';

export default function FoodingAsk({ handleUserChoice, handleInputPrice, img, ment, choice, isPrice }) {

    return (
        <div className='ma-cnt-box'>
            <div className='ma-fd-left'>
                <img className='ma-icon' src={fooding} />
            </div>
            <div className='ma-fd-right'>
                <div className='ma-fooding-bubble'>
                    {img}
                    {ment}
                    <div>
                        {choice.map((el, idx) =>
                            <BtnAsk
                                key={idx}
                                handleUserChoice={handleUserChoice}
                                choice={el}
                            />
                        )}
                    </div>

                    {isPrice ?
                        <div>
                            <input type='number' onChange={e => handleInputPrice(e.target.value)} />
                        </div> : null}
                </div>
            </div>
        </div>
    );
}