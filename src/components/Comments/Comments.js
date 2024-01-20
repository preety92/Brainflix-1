import React from "react";
import './Comments.scss';
import presonImage from '../../assets/Images/Mohan-muruge.jpg';

 const CommentSection=()=>{
    return(
        <div className="commentbox">
        <h2 className="commentbox__heading1">3 comments</h2>
        <p className="commentbox__heading2">JOIN THE CONVERSATION</p>
<div className="commentbox__form">
   <div className="commentbox__form--imgtext">
      <div className="commentbox__form--imgdiv">
<img src={presonImage} alt="persons_image" className="commentbox__logo1" />
</div>
<div className="commentbox__form--textdiv"></div>
 <textarea className="commentbox__textarea" placeholder="  Add a new comment" />
 </div>
 <div className="commentbox__form--buttondiv">
<button className="commentbox__form-button"> Comment</button>
</div>
</div>
 </div>
    )
 }
 export default CommentSection;