import React from "react";
import Eye from "./Eye";
import { useSelector } from "react-redux";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import "./Header.css";

const Header = () => {
  const allsong = useSelector((state) => state.songs); //state.songs===songs:songReducer
  const { songs } = allsong;
  return (
    <div className="header">
      <Eye />
      <img src="./fr3musiclogo.png" alt="logo" />
      <span className="length">{songs.length}</span>
      <BsFillMusicPlayerFill className="radio" />
    </div>
  );
};

export default Header;
