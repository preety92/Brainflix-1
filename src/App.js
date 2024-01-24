import React, { useState, useEffect } from 'react';
import videoData from "../src/Data/videos.json";
import videoDetailsData from '../src/Data/video-details.json';
import Header from './components/Header/Header';
import './App.scss';
import NextVideos from './components/Nextvideo/Nextvideo';
import MainVideo from './components/Mainvideo/Mainvideo';
import MainVideoDetail from './components/MainVideoDetails/MainVideoDetails';

const App = () => {
  const [mainVideo, setMainVideo] = useState({});
  const [nextVideos, setNextVideos] = useState([]);

  useEffect(() => {
    setNextVideos(videoData);
    setMainVideo(videoDetailsData[0]);
  }, []);

  const handleNextVideoClick = (videoId) => {
    const selectedVideoDetails = videoDetailsData.find((video) => video.id === videoId);

    setNextVideos((prevNextVideos) => {
      const filteredNextVideos = prevNextVideos.filter((video) => video.id !== mainVideo.id);
      return [...filteredNextVideos, mainVideo];
    });

    setMainVideo(selectedVideoDetails);
  };

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

export default App;










