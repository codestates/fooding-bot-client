import React from "react";
import undo from '../images/undo.png';

function OthersFoodingScore() {
  return (
    <div className='app-background'>
      <img className='undo' src={undo} /> 
      <div className='fooding-score-wrap'>
      <img className='recommendimg' src={} />
      <div className='score'>4.2</div>
      <div>평균 푸딩</div>
      <div className='logo-score'>푸딩 이미지 점수</div>
      </div>

    </div>
  )
}

export default OthersFoodingScore;