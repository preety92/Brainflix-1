import React from 'react';
import playIcon from '../../assets/Icons/play.svg';
import fullscreenIcon from '../../assets/Icons/fullscreen.svg';
import soundIcon from '../../assets/Icons/volume_off.svg';
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

