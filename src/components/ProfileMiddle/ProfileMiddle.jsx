import React from 'react';
import PostSide from "../PostSide/PostSide";
import ProfileCard from '../ProfileCard/ProfileCard';
import "./ProfileMiddle.css";

const ProfileMiddle = () => {
  return (
    <div className="ProfileMiddle">
        <ProfileCard />
        <PostSide />
    </div>
  )
}

export default ProfileMiddle