import React from 'react';
import "./Mainvideo.scss";

const MainVideo=({videoDetails})=>{
    return(
 <div className='video'>
        <div className='video__div'>
           <video className='video__poster' controls poster={videoDetails.image}>
            </video> 
        </div>    
 </div>
 
    );
};

export default MainVideo;