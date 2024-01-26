import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./HomePage.scss"; 
import Header from '../../components/Header/Header';
import MainVideo from '../../components/MainVideo/MainVideo';
import MainVideoDetail from '../../components/MainVideoDetails/MainVideoDetails';
import NextVideos from '../../components/NextVideo/NextVideo';

const HomePage = () => {
  const [mainVideo, setMainVideo] = useState({});
  const [nextVideos, setNextVideos] = useState([]);
  const { videoId } = useParams();

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const mainVideoResponse = await fetch(`https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=fae8f5da-718b-4873-995f-e035547f0e06`);
        const mainVideoData = await mainVideoResponse.json();
        const nextVideosResponse = await fetch('https://project-2-api.herokuapp.com/videos?api_key=fae8f5da-718b-4873-995f-e035547f0e06');
        const nextVideosData = await nextVideosResponse.json();
        setMainVideo(mainVideoData);
        setNextVideos(nextVideosData);
      } 
      catch (error) 
      {
        console.error('Error fetching data:', error);
      }
    };

  
    fetchVideoData();
  }, [videoId]);

  const handleNextVideoClick = async (videoId) => {
    try {
      const selectedVideoResponse = await fetch(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=fae8f5da-718b-4873-995f-e035547f0e06`);
      const selectedVideoDetails = await selectedVideoResponse.json();

     
      setNextVideos((prevNextVideos) => {
        const filteredNextVideos = prevNextVideos.filter((video) => video.id !== mainVideo.id);
        return [...filteredNextVideos, mainVideo];
      });

      setMainVideo(selectedVideoDetails);
    } catch (error) {
      console.error('Error fetching next video details:', error);
    }
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

export default HomePage;







