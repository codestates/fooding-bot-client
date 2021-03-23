import React from "react";
import undo from '../images/undo.png'
import fooding from '../images/fooding-icon.png';


function FoodingScoreContainer() {
  return (
    <div className='fs-screen'>
      <div className='app-top-menu'>
      <img className='undo' src={undo} /> 
      <button>저장</button>
      </div>

      <div className='fs-wrap'>
      <div className='fs-questions'>식사는 어떠셨나요?</div>
      <div className='fs-fooding-score'>
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

export default FoodingScoreContainer;