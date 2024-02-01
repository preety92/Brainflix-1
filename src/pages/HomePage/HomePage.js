import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './HomePage.scss';
import Header from '../../components/Header/Header';
import MainVideoDetail from '../../components/MainVideoDetails/MainVideoDetails';
import NextVideos from '../../components/NextVideo/NextVideo';
import MainVideo from '../../components/MainVideo/MainVideo';
import axios from 'axios';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function HomePage() {
  const [mainVideo, setMainVideo] = useState(null);
  const [nextVideos, setNextVideos] = useState([]);
  const { videoId } = useParams(); 

  
  useEffect(() => {
    const fetchMainVideoData = async () => {
      try {
        const response = await axios.get(
          `${REACT_APP_SERVER_URL}/videos/${videoId || '84e96018-4022-434e-80bf-000ce4cd12b8'}` 
        );
        setMainVideo(response.data);
      } catch (error) {
        console.error('Error fetching main video data:', error);
       
      }
    };

    fetchMainVideoData();

   
    const fetchNextVideosData = async () => {
      try {
        const response = await axios.get(`${REACT_APP_SERVER_URL}/videos`);
        setNextVideos(response.data);
      } catch (error) {
        console.error('Error fetching next videos data:', error);
       
      }
    };

    fetchNextVideosData();
  }, [videoId]); 

  const handleVideoClick = (clickedVideo) => {
    setMainVideo(clickedVideo);
  };

  return (
    <div>
      <Header />
      {mainVideo && ( 
        <>
          <MainVideo videoDetails={mainVideo} />
          <div className='Detail'>
            <div className='Detail__row'>
              <MainVideoDetail videoDetails={mainVideo} />
            </div>
            <div className='Detail__column'>
              <NextVideos
                nextVideos={nextVideos}
                mainVideoId={mainVideo.id}
                handleVideoClick={handleVideoClick}
              />
            </div>
          </div>
        </>
      )}
     
    </div>
  );
}

export default HomePage;







 







