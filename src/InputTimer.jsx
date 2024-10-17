import React from 'react'

const InputTimer = (props) => {
  return (
    <div className='box1'>
        <h1>Time Counter</h1>
        <div className='input-field'>
          <input id='hour' type="text" placeholder='HH' className='input-box' onChange={props.handleInput}/>
          <input id='minute' type="text" placeholder='MM' className='input-box'  onChange={props.handleInput}/>
          <input id='second' type="text" placeholder='SS' className='input-box'  onChange={props.handleInput}/>
        </div>
        <br />
        <button onClick={props.handleStart}>Start</button>
      </div>
  )
}

export default InputTimer
