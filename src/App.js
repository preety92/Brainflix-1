import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import videoData from "../src/Data/videos.json";
import videoDetailsData from '../src/Data/video-details.json';
import './App.scss';
import HomePage from './pages/HomePage';
import UploadPage from './pages/UploadPage';



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

    <Router>
    <div>
      <Routes>
        <Route
          path="/"
          element={<HomePage mainVideo={mainVideo} nextVideos={nextVideos} handleNextVideoClick={handleNextVideoClick} />}
        />
        <Route
          path="/video/:videoId" 
          element={<UploadPage />}
        />
        console.log(videoId);
      </Routes>
    </div>
  </Router>
  );
};

export default App;










