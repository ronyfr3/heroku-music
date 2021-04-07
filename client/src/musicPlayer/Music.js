import React from "react";
// import Player from "./Player";
import SongForm from "./SongForm";
import AllSongs from "./AllSongs";
// import "./Music.css";

const Music = () => {
  // const [songs, setSongs] = useState([]);
  // const [currentSongIndex, setCurrentSongIndex] = useState(0);
  // const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  // useEffect(() => {
  //   setNextSongIndex(() => {
  //     if (currentSongIndex + 1 > songs.length - 1) {
  //       return 0;
  //     } else {
  //       return currentSongIndex + 1;
  //     }
  //   });
  // }, [currentSongIndex, songs.length]);
  return (
    <div className="music">
      <SongForm />
      <AllSongs />
    </div>
  );
};

export default Music;
