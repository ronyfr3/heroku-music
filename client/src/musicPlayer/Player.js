import React, { useState, useRef, useEffect } from "react";
import PlayerControls from "./PlayerControls";

function Player({ filePath, song }) {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [currentSongIndex, setCurrentSongIndex] = useState(0);
  // const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  // useEffect(() => {
  //   setNextSongIndex(() => {
  //     if (currentSongIndex + 1 > song.length - 1) {
  //       return 0;
  //     } else {
  //       return currentSongIndex + 1;
  //     }
  //   });
  // }, [currentSongIndex, song.length]);

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  });


  // const SkipSong = (forwards = true) => {
  //   if (forwards) {
  //     setCurrentSongIndex(() => {
  //       let temp = currentSongIndex;
  //       temp++;

  //       if (temp > song.length - 1) {
  //         temp = 0;
  //       }

  //       return temp;
  //     });
  //   } else {
  //     setCurrentSongIndex(() => {
  //       let temp = currentSongIndex;
  //       temp--;

  //       if (temp < 0) {
  //         temp = song.length - 1;
  //       }

  //       return temp;
  //     });
  //   }
  // };

  return (
    <div className="music-player">
      <audio src={filePath} ref={audioElement}></audio>
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        // SkipSong={SkipSong}
        audioElement={audioElement}
      />
    </div>
  );
}
export default Player;
