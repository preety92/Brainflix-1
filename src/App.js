import React, { useState, useEffect } from 'react';
import videoData from "../src/Data/videos.json";
import videoDetailsData from '../src/Data/video-details.json';
import Header from './components/Header/Header';
import './App.scss';
import NextVideos from './components/Nextvideo/Nextvideo';
import MainVideo from './components/Mainvideo/Mainvideo';
import MainVideoDetail from './components/MainVideoDetails/MainVideoDetails';
import CommentSection from './components/Comments/Comments';


const App = () => {
 const [mainVideo,setMainVideo]=useState({});

 useEffect(()=>{
  setMainVideo(videoDetailsData[0]);
 },[]);

  return (
 <div>
  <Header />
<MainVideo videoDetails={mainVideo}/>
<MainVideoDetail videoDetails={mainVideo}/>
<CommentSection/>
 </div>
  );
};
export default App;


