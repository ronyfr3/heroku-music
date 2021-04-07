import {
  CREATE_SONG,
  DELETE_SONG,
  GET_ALL_SONGS,
} from "../constants/SongActionTypes";

export const songReducer = (state = { songs: [] }, action) => {
  switch (action.type) {
    case GET_ALL_SONGS:
      return { songs: action.payload };

    case CREATE_SONG:
      console.log("songs reducer", [...state.songs, action.payload]);
      return { songs: [...state.songs, action.payload] };

    case DELETE_SONG:
      return {
        songs: state.songs.filter((song) => song._id !== action.payload),
      };

    default:
      return state;
  }
};
