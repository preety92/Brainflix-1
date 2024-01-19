import React from "react";
import "./MainVideoDetails.scss";
import viewIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";
const MainVideoDetail=({videoDetails})=>{
    const convertTime=new Date(videoDetails.timestamp).toLocaleDateString();

    return(
        <div className="Details">
           <h1 className="Details__title">{videoDetails.title}</h1>
           <div className="Details__flex">
           <div className="Details__flexelement1">
           <p className="Details__channel">By {videoDetails.channel}</p>
           <p className="Details__date">{convertTime}</p>
           </div>
           <div className="Details__flexelement2">
            <div className="Details__subelement1">
           <img src={viewIcon} alt="view Icon" className="Details__view-icon" />
           <p className="Details__views">{videoDetails.views}</p>
           </div>
           <div className="Details__subelement2">
           <img src={likesIcon} alt="likes Icon" className="Details__likes-icon" />
           <p className="Details__likes">{videoDetails.likes}</p>
           </div>
           </div>
           </div>
           <p className="Details__description">{videoDetails.description}</p>
          
          
        </div>
    );
    };
    export default MainVideoDetail;
