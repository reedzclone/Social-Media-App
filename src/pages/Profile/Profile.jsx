import React from 'react'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft';
import ProfileMiddle from '../../components/ProfileMiddle/ProfileMiddle';
import ProfileRight from '../../components/ProfileRight/ProfileRight';
import "./Profile.css";

const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft />
        <ProfileMiddle />
        <ProfileRight />
    </div>
  )
}

export default Profile