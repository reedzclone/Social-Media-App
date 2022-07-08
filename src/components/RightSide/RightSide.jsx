import React from 'react';
import "./RightSide.css";

import Home from "../../img/home.png";
import {UilSetting} from "@iconscout/react-unicons";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import Trends from '../Trends/Trends';

const RightSide = () => {
  return (
    <div className="RigthSide">
        <div className="navIcons">
        <img src={Home} alt="" />
        <UilSetting />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
        </div>


        <Trends />

        <button className="btn r-btn">share</button>
    </div>
  )
}

export default RightSide