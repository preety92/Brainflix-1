import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./UploadPage.scss";
import Thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import UploadIcon from "../../assets/Icons/publish.svg";
import Header from '../../components/Header/Header';

const UploadVideo = () => {
  const navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert("Your upload was successful!");
    navigate("/");
  };
  return (
    <>
      <Header />
      <section className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <label className="upload__label0">Video Thumbnail</label>
        <div className='upload__inline'>
          <div className='upload__inline1'>
            <img className="upload__image" src={Thumbnail} alt="Video Thumbnail" />
          </div>
          <div className='upload__inline2'>
            <label className="upload__label">Title Your Video</label>
            <input className="upload__input" type="text" placeholder="Add a title to your video" />
            <label className="upload__label">Add a video Description</label>
            <textarea className="upload__textarea" placeholder="Add a description to your video" ></textarea>
          </div>
        </div>
        <div className="upload__buttons">
          <button className="upload__button1" onClick={handleFormSubmit}>Publish</button>
          <img src={UploadIcon} alt="publish Icon" className="upload__icon" />
          <button className="upload__button2">Cancel</button>
        </div>
      </section>
      <div className='upload__border'></div>
    </>
  );
};
export default UploadVideo;

