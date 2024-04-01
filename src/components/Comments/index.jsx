import React from 'react';

import './comments.scss';
import { formatTime } from '../utils/formatTime';
import { CommentInput } from '../CommentInput';

export const Comments = ({ currentVideo }) => {
  return (
    <div className="comments">
      <p className="comments__counts">{currentVideo.comments.length} Comments</p>
      <CommentInput />
      {currentVideo.comments.map((comment) => (
        <div key={comment.id} className="comments__exists">
          <div className="comments__img-group">
            <div className="comments__img"></div>
          </div>
          <div className="comments__group">
            <div className="comments__name-date">
              <p className="comments__name">{comment.name}</p>
              <p className="comments__date">{formatTime(comment.timestamp)}</p>
            </div>
            <p className="comments__comment">{comment.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
