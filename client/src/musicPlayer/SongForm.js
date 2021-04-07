import React, { useState } from "react";
import {MdCloudUpload} from 'react-icons/md'
import './Music.css'

import { createSong } from '../redux/actions/SongActions';
import { useDispatch  } from 'react-redux';


const SongForm = () => {
  const [file, setFile] = useState('');
  const [singleProgress, setSingleProgress] = useState(0);
console.log(singleProgress)
  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setSingleProgress(0)
  };

  //percentage creator
  const songFileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setSingleProgress(percentage);
    },
  };

  //UPLOAD/SEND DATA TO BACKEND
  const dispatch=useDispatch()
  const uploadSongFile = async () => {
    const formData = new FormData();
    formData.append("file", file);
    dispatch(createSong(formData,songFileOptions));
  };
 
  // console.log(file)
  return (
    <div className='music_form'>
      <form>
        <input type="file" multiple={false} onChange={handleChange} className='upload_input'/>
        <button className='upload_song' type='button' onClick={uploadSongFile}><MdCloudUpload className='uploadlogo'/> Upload Your Song</button>
      </form>
    </div>
  );
};

export default SongForm;
