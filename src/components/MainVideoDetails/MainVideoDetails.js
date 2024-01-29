import React, { useEffect, useState } from "react";
import "./MainVideoDetails.scss";
import viewIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";
import CommentsSection from "../Comments/Comments";
import { useParams } from 'react-router-dom';

const MainVideoDetail = ({ videoDetails }) => {
  const { videoId } = useParams();
  const [selectedVideoDetails, setSelectedVideoDetails] = useState();

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try{
        const response = await fetch(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=fae8f5da-718b-4873-995f-e035547f0e06`);
        const data = await response.json();
        console.log(data);
        setSelectedVideoDetails(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchVideoDetails();
  }, [videoId]);

  if (!selectedVideoDetails) {
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
      <CommentsSection comments={videoDetails.comments} />
    </section>
  );
};
export default MainVideoDetail;





