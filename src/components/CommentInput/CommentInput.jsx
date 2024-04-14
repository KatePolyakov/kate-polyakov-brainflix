import React from 'react';
import axios from 'axios';

import ProfilePhoto from '../../assets/images/images/Mohan-muruge.jpg';
import AddIcon from '../../assets/images/icons/add_comment.svg';

import './commentInput.scss';

const API_URL = 'http://localhost:8080';

export const CommentInput = ({ currentVideo, getCurrentVideo }) => {
  const handleAddComment = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/videos/${currentVideo.id}/comments`, {
        name: 'Kate Polyakov',
        comment: e.target.commentAdd.value,
      })
      .then((res) => {
        console.log(currentVideo.id);
        getCurrentVideo(currentVideo.id);
      })
      .catch((err) => {
        console.log(err);
      });

    e.target.reset();
  };

  return (
    <div className="comment-input">
      <div className="comment-input__group">
        <img src={ProfilePhoto} alt="comment-input__photo" className="comment-input__photo" />
        <form className="comment-input__form" id="comment-input__form" onSubmit={handleAddComment}>
          <div className="comment-input__form-input">
            <label htmlFor="commentAdd">JOIN THE CONVERSATION</label>
            <textarea
              className="comment-input__form-text"
              type="text"
              name="comment"
              id="commentAdd"
              placeholder="Add a new comment"></textarea>
          </div>
          <button type="submit" className="comment-input__form-button">
            <img src={AddIcon} alt="add__comment" />
            COMMENT
          </button>
        </form>
      </div>
    </div>
  );
};
