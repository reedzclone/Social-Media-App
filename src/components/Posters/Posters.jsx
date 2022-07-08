import React from 'react';
import "./Posters.css"; 
import { PostedData } from "../Data/PostedData";
import Post from '../Post/Post';

const Posters = () => {
  return (
    <div className="Posters">
        {PostedData.map((post, id) => {
            return <Post data={post} id={id}/>
        })}
    </div>
  )
}

export default Posters