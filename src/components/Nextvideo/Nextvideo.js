import React from 'react';
import './NextVideo.scss';

const NextVideos = ({ nextVideos, onVideoClick, mainVideoId }) => {
  if (!nextVideos || !Array.isArray(nextVideos)) {
    return null;
  }
  const filteredNextVideos = nextVideos.filter((video) => video.id !== mainVideoId);
  return (
    <section className="nextVideos">
      <h2 className="nextVideos__header">Next videos</h2>
      {filteredNextVideos.map((video) => (
        <div className="nextVideos__main" key={video.id} onClick={() => onVideoClick(video.id)}>
          <div className="nextVideos__imgdiv">
            <img className="nextVideos__image" src={video.image} alt={video.title} />
          </div>
          <div className="nextVideos__textdiv">
            <h3 className="nextVideos__title">{video.title}</h3>
            <p className="nextVideos__channel">{video.channel}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default NextVideos;


