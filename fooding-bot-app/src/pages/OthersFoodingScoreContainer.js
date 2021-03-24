import React from "react";
import undo from '../images/undo.png'
import sample from '../images/sample/sample-food-1.png';
import fooding from '../images/fooding-icon.png';
import {Link} from "react-router-dom";


function OthersFoodingScoreContainer() {
  return (
    <div className='app-background'>
      <Link to='Main'><img className='undo' src={undo} /></Link>
      <div className='fooding-score-wrap'>
      <img className='recommend-img' src={sample} />
      <div className='score'>5.0</div>
      <div className='avg-fooding'>평균 푸딩</div>
      <div className='avg-fooding-score'>
                                <img src={fooding} />
                                <img src={fooding} />
                                <img src={fooding} />
                                <img src={fooding} />
                                <img src={fooding} />
                            </div>
      </div>

    </div>
  )
}

export default OthersFoodingScoreContainer;