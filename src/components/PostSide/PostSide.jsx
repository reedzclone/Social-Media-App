import React from 'react';
import Posters from '../Posters/Posters';
import PostShare from '../PostShare/PostShare';
import "./PostSide.css";

const PostSide = () => {
  return (
    <div className="PostSide">
        <PostShare />
        <Posters />
    </div>
  )
}

export default PostSide