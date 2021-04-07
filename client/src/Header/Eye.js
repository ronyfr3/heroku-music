import React from "react";
import './Eye.css'

const Eye = () => {
  const handleClick=()=>{
    const sound = new Audio()
    sound.src='./beep.wav'
    sound.play()
  }
  return (
    <div>
      <div className="eye" onClick={handleClick}>
        <div className="upper-pupil"></div>
        <div className="iris"></div>
        <div className="lower-pupil"></div>
      </div>
    </div>
  );
};

export default Eye;
