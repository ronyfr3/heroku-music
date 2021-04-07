import React, { useEffect } from "react";
import Player from "./Player";
import { getSongs } from "../redux/actions/SongActions";
import { useSelector, useDispatch } from "react-redux";
import { deleteSong} from "../redux/actions/SongActions";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { FaMusic } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import "./Music.css";
import Loader from './Loader'
import axios from "axios";
import fileDownload from 'js-file-download' //it helps to download file to avoid req.headers set issue

const AllSongs = () => {
  const dispatch = useDispatch();
  const allsong = useSelector((state) => state.songs); //state.songs===songs:songReducer
  const { songs } = allsong; //songs-->songs=[{_id,fileName etc}]  destructuring songs array
  console.log("Allsongs:--->", songs);

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);
if(songs.length===0){
  return <Loader/>
}

  return (
    <div className="songs_profiles">
      {songs.map((song) => {
        const { filePath, fileName, _id } = song;
        console.log(song)
        //dispatch(downloadSong(_id))
        //we dont need redux for download file coz we never have to update it or need to do something with it
        return (
          <div key={_id} className="song_info">
            <div className="download_delete_song">
              <p
                className="downloadbtn"
                onClick={() =>
                  axios.get(`http://localhost:5000/songs/downloadSong/`, {
                    responseType: 'blob',
                    params: {
                      fileName,
                      filePath
                    },
                  }).then(res=>fileDownload(res.data, fileName))
                }
              >
                <FiDownload className="downloadlogo" /> Download
              </p>
              <p
                onClick={() => dispatch(deleteSong(_id))}
                className="deleteSong"
              >
                <RiDeleteBack2Fill />
              </p>
            </div>
            <div className="music_logo">
              <FaMusic className="famusiclogo" />
              <p className="famusic">{fileName}</p>
            </div>
            <img src="./visualizer2.gif" alt="" />
            <Player filePath={filePath} song={song}></Player>
          </div>
        );
      })}
    </div>
  );
};

export default AllSongs;
