import React, { useState } from 'react';
import "./RightSide.css";

import Home from "../../img/home.png";
import {UilSetting} from "@iconscout/react-unicons";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import Trends from '../Trends/Trends';
import ShareModal from "../ShareModal/ShareModal";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);


  return (
    <div className="RigthSide">
        <div className="navIcons">
        <img src={Home} alt="" />
        <UilSetting />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
        </div>


        <Trends />

        <button className="btn r-btn" onClick={() => setModalOpened(true)}>share</button>
        <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
    </div>
  )
}

export default RightSide