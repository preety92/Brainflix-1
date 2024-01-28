import React from 'react';
import "./MainVideo.scss";

const MainVideo = ({ videoDetails }) => {
  return (
    <main className='video'>
      <div className='video__div'>
      <video className='video__poster' controls poster={videoDetails.image}>
           </video>
      </div>
    </main>
  );
};

export default MainVideo;

