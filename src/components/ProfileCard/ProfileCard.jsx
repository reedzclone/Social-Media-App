import React from 'react'
import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";


const ProfileCard = () => {
    return (
        <div className="ProfileCard">
            <div className="ProfileImages">
                <img src={Cover} alt="" />
                <img src={Profile} alt="" />
            </div>
            <div className="profileName">
                <span>Marvel Kaira</span>
                <span>American Model</span>
            </div>

            <div className="follow-status">
                <hr />
                <div>
                    <div className="follow">
                        <span>6,866</span>
                        <span>Followers</span>
                    </div>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>1</span>
                        <span>Following</span>
                    </div>
                </div>
                <hr />
            </div>
            
            <span>My Profile</span>
            
        </div>
    )
}

export default ProfileCard