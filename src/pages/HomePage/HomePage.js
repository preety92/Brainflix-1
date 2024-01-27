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
  const { videoId } = useParams(); // Get the videoId from the URL

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
       
        if (videoId) {
          const mainVideoResponse = await fetch(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=fae8f5da-718b-4873-995f-e035547f0e06`);
          const mainVideoData = await mainVideoResponse.json();
          setMainVideo(mainVideoData);
        } else {
          // Fetch default main video details if no videoId is present
          const mainVideoResponse = await fetch(`https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=fae8f5da-718b-4873-995f-e035547f0e06`);
          const mainVideoData = await mainVideoResponse.json();
          setMainVideo(mainVideoData);
        }
        const nextVideosResponse = await fetch('https://project-2-api.herokuapp.com/videos?api_key=fae8f5da-718b-4873-995f-e035547f0e06');
        const nextVideosData = await nextVideosResponse.json();
        setNextVideos(nextVideosData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchVideoData();
  }, [videoId]);

  return (
    <div>
      <Header />
      <MainVideo videoDetails={mainVideo} />
      <div className='Details__wrapper'>
        <div className='Details__wrapper--row'>
          <MainVideoDetail videoDetails={mainVideo} />
        </div>
        <div className='Details__wrapper--column'>
          <NextVideos nextVideos={nextVideos} mainVideoId={mainVideo.id} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
 







