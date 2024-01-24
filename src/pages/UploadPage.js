import React from 'react';
// import './UploadVideo.scss'; // Create a new CSS file for styling

const UploadVideo = () => {
  return (
    <div className="upload-video">
      <h1 className="upload-video__title">Upload Video</h1>
      <label className="upload-video__label">Video Thumbnail</label>
      <img className="upload-video__image" src="" alt="Video Thumbnail" />
      <label className="upload-video__label">Title Your Video</label>
      <input className="upload-video__input" type="text" placeholder="Enter video title" />
      <label className="upload-video__label">Description</label>
      <textarea className="upload-video__textarea" placeholder="Enter video description"></textarea>
      <div className="upload-video__buttons">
        <button className="upload-video__button">Publish</button>
        <button className="upload-video__button">Cancel</button>
      </div>
    </div>
  );
};

export default UploadVideo;

