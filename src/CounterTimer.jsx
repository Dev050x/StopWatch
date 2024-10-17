import React from 'react'

const CounterTimer = ({hour , minute , second , handlePause , handleResume , handleReset , isPause}) => {
  return (
    <div className='box2'>
        <h1>Time Counter</h1>
        <div className='timer'>
          <div className='time-font'>{hour < 10 ? `0${hour}` : hour}</div>
          <span className='time-font'>:</span>
          <div className='time-font'>{minute < 10 ? `0${minute}` : minute}</div>
          <span className='time-font'>:</span>
          <div className='time-font'>{second < 10 ? `0${second}` : second}</div>
        </div>
        <div>
          {!isPause && <button className='buttons' onClick={handlePause}>Pause</button>}
          {isPause &&  <button className='buttons' onClick={handleResume}>Resume</button>}
          <button className='buttons' onClick={handleReset}>Reset</button>
        </div>
      </div>
  )
}

export default CounterTimer
