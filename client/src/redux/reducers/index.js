import { combineReducers } from "redux";
import {songReducer} from "./songs";

export const reducers = combineReducers({ songs:songReducer });
