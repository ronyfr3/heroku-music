import React, { useEffect, useState } from 'react';
// import {AiFillForward,AiFillBackward} from 'react-icons/ai'
import {FaPlay} from 'react-icons/fa'
import {FaPause,FaVolumeMute} from 'react-icons/fa'
import {BsFillVolumeUpFill} from 'react-icons/bs'
import './Music.css'

function PlayerControls({SkipSong,setIsPlaying,isPlaying,audioElement}) {
  const [statevolum, setStateVolum] = useState(0.3)
  const play=()=>{
    setIsPlaying(!isPlaying)
    const sound = new Audio()
    sound.src='./btnclick.mp3'
    sound.play()
  }
  const handleVolume = (q) => {
    setStateVolum(q);
    audioElement.current.volume = q;
  }
  const volumeZero=()=>{
    const sound = new Audio()
    sound.src='./buttonClick.mp3'
    sound.play()
    setStateVolum(0)
  }
  useEffect(()=>{
    audioElement.current.volume = statevolum;
  },[statevolum,audioElement])
  return (
    <div className="btn-controls">
    {/* <button className="skip-btn" onClick={()=>SkipSong(false)}><AiFillBackward/></button> */}
    <button className="play-btn" onClick={play}>{isPlaying ? <FaPause/> : <FaPlay/>}</button>
    {
      statevolum===0? <FaVolumeMute className='mic'/>:   <BsFillVolumeUpFill className='mic'onClick={volumeZero}/>
      }
    <input value={Math.round(statevolum * 100)} type="range" name="volBar" id="volBar" onChange={(e) => handleVolume(e.target.value / 100)} className='inputvolume' />
    {/* <button className="skip-btn" onClick={()=>SkipSong()}><AiFillForward/></button> */}
    </div>
  )
}

export default PlayerControls