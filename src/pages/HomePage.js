import React from 'react';
import NextVideos from '../components/Nextvideo/Nextvideo';
import MainVideoDetail from '../components/MainVideoDetails/MainVideoDetails';
import MainVideo from '../components/Mainvideo/Mainvideo';
import Header from '../components/Header/Header';


const HomePage = ({ mainVideo, nextVideos, handleNextVideoClick }) => {
  return (
    <div>
          <Header />
      <MainVideo videoDetails={mainVideo} />
      <div className='App__main'>
        <div className='App__flex1'>
          <MainVideoDetail videoDetails={mainVideo} />
        </div>
        <div className='App__flex2'>
          <NextVideos nextVideos={nextVideos} onVideoClick={handleNextVideoClick} mainVideoId={mainVideo.id} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
