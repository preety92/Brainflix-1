import React, { useState } from "react";
import './Comments.scss';
import presonImage from '../../assets/Images/Mohan-muruge.jpg';
import commentIcon from '../../assets/Icons/add_comment.svg';

const CommentsSection = ({ comments, addComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      const timestamp = Date.now();
      const id = timestamp.toString();
      
      const newCommentObject = {
        id,
        name: "User",
        timestamp,
        comment: newComment
      };

      addComment(newCommentObject); 

      setNewComment('');
    }
  };
  
  if (!comments || !Array.isArray(comments)) {
    return null;
  }

  return (
    <section className="commentbox">
      <h2 className="commentbox__heading1">{comments.length} comments</h2>
      <p className="commentbox__heading2">JOIN THE CONVERSATION</p>
      <div className="commentbox__form">
        <div className="commentbox__form--row">
          <div className="commentbox__form--imgdiv">
            <img src={presonImage} alt="persons_image" className="commentbox__logo1" />
          </div>
          <div className="commentbox__form--textdiv">
            <textarea
              className="commentbox__textarea"
              placeholder="Add a new comment"
              value={newComment}
              onChange={handleCommentChange}
            />
          </div>
        </div>
        <div className="commentbox__form--buttondiv">
          <button className="commentbox__form-button" onClick={handleCommentSubmit}>
            Comment
            <img src={commentIcon} alt="comment Icon" className="commentbox__upload-icon" />
          </button>
        </div>
      </div>
      <div className="commentbox__container">
        {comments.map(comment => (
          <div key={comment.id} className="commentbox__div">
            <div className="commentbox__details">
              <div className="commentbox__flex">
                <div className="commentbox__flex1">
                  <div className="commentbox__logoContainer"></div>
                </div>
                <div>
                  <p className="commentbox__name">{comment.name}</p>
                </div>
                <div className="commentbox__datediv">
                  <p className="commentbox__timestamp">
                    {new Date(comment.timestamp).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <p className="commentbox__comment">{comment.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommentsSection;





