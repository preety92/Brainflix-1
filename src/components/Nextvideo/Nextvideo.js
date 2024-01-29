import React from 'react';
import { Link } from 'react-router-dom';
import './NextVideo.scss';
//test

const NextVideos = ({ nextVideos, mainVideoId }) => {
  if (!nextVideos || !Array.isArray(nextVideos)) {
    return null;
  }
  const filteredNextVideos = nextVideos.filter((video) => video.id !== mainVideoId);

  return (
    <section className="nextVideos">
      <h2 className="nextVideos__header">Next videos</h2>
      {filteredNextVideos.map((video) => (
        <Link to={`/video/${video.id}`} key={video.id} className="nextVideos__main">
         
          <div className="nextVideos__imgdiv">
            <img className="nextVideos__image" src={video.image} alt={video.title} />
          </div>
          <div className="nextVideos__textdiv">
            <h3 className="nextVideos__title">{video.title}</h3>
            <p className="nextVideos__channel">{video.channel}</p>
          </div>
         
        </Link>
      ))}
    </section>
  );
};
export default NextVideos;



