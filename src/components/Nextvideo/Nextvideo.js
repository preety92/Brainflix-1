import React from "react";
import "./Nextvideo.scss";

const NextVideos=({nextVideos,onVideoClick})=>{
    if (!NextVideos || !Array.isArray(nextVideos)) {
        return null;
      }
    return(
        <div className="nextVideos">
            <h2 className="nextVideos__header">Next videos</h2>
            {nextVideos.map(video=>(
                <div className="nextVideos__main" key={video.id} onClick={()=>onVideoClick(video.id)}>
                   <div className="nextVideos__imgdiv">
                    <img className="nextVideos__image" src={video.image} alt={video.title}/>
                    </div>
                    <div className="nextVideos__textdiv">
                    <h3 className="nextVideos__title">{video.title}</h3>
                    <p className="nextVideos__channel">{video.channel}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NextVideos;