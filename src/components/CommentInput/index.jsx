import React from 'react';

import ProfilePhoto from '../../assets/images/images/Mohan-muruge.jpg';
import AddIcon from '../../assets/images/icons/add_comment.svg'

import './commentInput.scss';

export const CommentInput = () => {
  return (
    <div className="comment-input">
      <div className="comment-input__group">
        <img src={ProfilePhoto} alt="comment-input__photo" className="comment-input__photo" />
        <form className="comment-input__form" id="comment-input__form">
          <div className="comment-input__form-input">
            <label htmlFor="commentAdd">JOIN THE CONVERSATION</label>
            <textarea
              className="comment-input__form-text"
              type="text"
              name="comment"
              id="commentAdd"
              placeholder="Add a new comment"></textarea>
          </div>
          <button type="submit" className="comment-input__form-button"><img src={AddIcon} alt='add__comment' />
            COMMENT
          </button>
        </form>
      </div>
    </div>
  );
};
