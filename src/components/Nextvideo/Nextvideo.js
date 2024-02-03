import React from 'react';
import { Link } from 'react-router-dom';
import './NextVideo.scss';

const NextVideos = ({ nextVideos, mainVideoId, handleVideoClick }) => {
  if (!nextVideos || !Array.isArray(nextVideos)) {
    return null;
  }
  const filteredNextVideos = nextVideos.filter((video) => video.id !== mainVideoId);

  return (
    <section className="nextVideos">
      <h2 className="nextVideos__header">Next videos</h2>
      {filteredNextVideos.map((video) => (
        <div key={video.id} className="nextVideos__main" onClick={() => handleVideoClick(video)}>
          <Link className="nextVideos__imgdiv" to={`/video/${video.id}`}>
            <div className="nextVideos__div">
              <img className="nextVideos__image" src={video.image} alt={video.title} />
            </div>
            <div className="nextVideos__textdiv">
              <h3 className="nextVideos__title">{video.title}</h3>
              <p className="nextVideos__channel">{video.channel}</p>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default NextVideos;




