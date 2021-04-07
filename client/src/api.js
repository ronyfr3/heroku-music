import axios from "axios";

const url = "http://localhost:5000/songs/";

export const fetchSongs = () => axios.get(url + "getallSongFiles");
export const createSong = (newSong) => axios.post(url + "singleFile", newSong);
export const deleteSong = (id) => axios.delete(`${url + "deleteSong"}/${id}`);
