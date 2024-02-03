import React, { useEffect, useState } from 'react';
import './MainVideoDetails.scss';
import viewIcon from '../../assets/Icons/views.svg';
import likesIcon from '../../assets/Icons/likes.svg';
import CommentsSection from '../Comments/Comments';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const MainVideoDetail = () => {
  const { videoId } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await axios.get(  videoId ? `http://localhost:8081/videos/${videoId}` : `${REACT_APP_SERVER_URL}/videos/84e96018-4022-434e-80bf-000ce4cd12b8`);
        setVideoDetails(response.data);
      } catch (error) {
        console.error('Error fetching video details:', error);
      }
    };

    fetchVideoDetails();
  }, [videoId]);

  const addComment = (newComment) => {
    setVideoDetails({
      ...videoDetails,
      comments: [...videoDetails.comments, newComment],
    });
  };

  if (!videoDetails) {
    return <div>Loading...</div>;
  }

  const convertTime = new Date(videoDetails.timestamp).toLocaleDateString();

  return (
    <section className="Details">
      <h1 className="Details__title">{videoDetails.title}</h1>
      <div className="Details__flex">
        <div className="Details__flexelement1">
          <p className="Details__channel">By {videoDetails.channel}</p>
          <p className="Details__date">{convertTime}</p>
        </div>
        <div className="Details__flexelement2">
          <div className="Details__subelement1">
            <img src={viewIcon} alt="view Icon" className="Details__view-icon" />
            <p className="Details__views">{videoDetails.views}</p>
          </div>
          <div className="Details__subelement2">
            <img src={likesIcon} alt="likes Icon" className="Details__likes-icon" />
            <p className="Details__likes">{videoDetails.likes}</p>
          </div>
        </div>
      </div>
      <p className="Details__description">{videoDetails.description}</p>
      <CommentsSection comments={videoDetails.comments} addComment={addComment} />
    </section>
  );
};

export default MainVideoDetail;












