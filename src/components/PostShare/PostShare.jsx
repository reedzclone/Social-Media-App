import React, {useState, useRef} from 'react'
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import profileImg from "../../img/profileImg.jpg";
import "./PostShare.css";

const PostShare = () => {
    const [image, setImage] = useState(null);
    const imageRef = useRef()


    const onImageChange = (e) => {
        if(e.target.files && e.target.files[0]){
            let img = e.target.files[0];
            setImage({
                image: URL.createObjectURL(img)
            })
        }
    }
    return (
        <div className="PostShare">
            <img src={profileImg} alt="profileImg" />
            <div>
                <input type="text" placeholder="what's popping?" />
                <div className="PostOptions">
                    <div className="option" style={{color: "var(--photo)"}} onClick={()=>imageRef.current.click()}>
                        <UilScenery />
                        Photo
                    </div>
                    <div className="option" style={{color: "var(--video)"}}>
                        <UilPlayCircle />
                        Video
                    </div>
                    <div className="option" style={{color: "var(--location)"}}>
                        <UilLocationPoint />
                        Location
                    </div>
                    <div className="option" style={{color: "var(--schedule)"}}>
                        <UilSchedule />
                        Schedule
                    </div>
                    <button className="btn share-btn">share</button>
                    <div style={{display: "none"}}>
                        <input type="file" name="myImage" ref={imageRef} onChange={onImageChange}/>
                    </div>
                </div>
                {image && (
                    <div className="previewImage">
                        <UilTimes onClick={()=>setImage(null)}/>
                        <img src={image.image} alt="" />
                    </div>
                )}
            </div>

        </div>
    
  )
}

export default PostShare