import React from 'react'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft';
import "./Profile.css";

const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft />
        <div>ProfileMiddle</div>
        <div>ProfileRight</div>
    </div>
  )
}

export default Profile