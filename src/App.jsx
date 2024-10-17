import { useEffect, useState } from 'react';
import './App.css'
import InputTimer from './InputTimer';
import CounterTimer from './CounterTimer';

function App() {
  const [isStart , setIsStart] = useState(false);
  const [isPause , setIsPause] = useState(false);
  const [hour , setHour] = useState();
  const [minute , setMinute] = useState();
  const [second , setSecond] = useState();
  const [tid , setTid]  = useState();

  function handleStart(){
    if((hour > 0 && hour <24) || minute >0 || second >0){
      setIsStart(true);
    }
    else{
      alert("please make valid input")
    }
    
  }

  function reset(){
    clearInterval(tid);
    setHour(0);
    setMinute(0);
    setSecond(0);
  }

  function handleReset(){
    setIsStart(false);
    reset();
  }

  function handleInput(e){
    let id = e.target.id;
    let value = e.target.value;
    if(id  == 'hour'){
      setHour(value);
    }else if(id == 'minute'){
      setMinute(value);
    }else if(id == 'second'){
      setSecond(value);
    }
  }

  function handlePause(){
    setIsPause(true);
    clearInterval(tid);
  }

  function handleResume(){
    setIsPause(false);
    runTimer(hour,minute,second);
  }

  const runTimer = (hr , mn , se , tid) => {
    if(se > 0){
      setSecond((se) => se-1);
    }else if(se == 0 && mn > 0){
      setMinute((mn) => mn-1);
      setSecond(59);
    } else if(mn === 0){
      setHour((hr) => hr -1);
      setMinute(59);
      setSecond(59);
    }
    if(hr === 0 && se ===0 && mn ===0){
      reset();
      alert("your timer is finished");
    }

  }


  useEffect(() => {
    let tid;

    if(isStart){
      tid = setInterval(() => {
        console.log(`${hour}:${minute}:${second}`);
        runTimer(hour , minute , second , tid);
      }, 1000);
      setTid(tid);
    }
    return () => {
      clearInterval(tid);
    }
    
  } , [isStart,hour,minute,second] );

  return (
    <div className='App'>
      {!isStart && (<InputTimer handleInput={handleInput} handleStart={handleStart} />)}

      {
        isStart && (<CounterTimer hour={hour} minute={minute} second={second} handlePause={handlePause} handleReset={handleReset} isPause={isPause}  />)
      }

    </div>
  );
}

export default App
