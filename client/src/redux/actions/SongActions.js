import {
  CREATE_SONG,
  DELETE_SONG,
  GET_ALL_SONGS
} from "../constants/SongActionTypes";

import * as api from "../../api";

//GET_SONGS_FROM BACKEND
export const getSongs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchSongs();
    dispatch({
      type: GET_ALL_SONGS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

//CREATE_SONG_THEN SEND TO BACKEND
export const createSong = (songFormData, options) => async (dispatch) => {
  try {
    //sending a post into backend
    const { data } = await api.createSong(songFormData, options);
    dispatch({
      type: CREATE_SONG,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

//DELETE_SONG_FROM DB
export const deleteSong = (id) => async (dispatch) => {
  try {
    await api.deleteSong(id);

    dispatch({ type: DELETE_SONG, payload: id });
  } catch (error) {
    console.log(error);
  }
};
