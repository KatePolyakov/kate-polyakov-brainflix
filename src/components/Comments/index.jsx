import React from 'react';

import './comments.scss';
import { formatTime } from '../utils/formatTime';
import { CommentInput } from '../CommentInput';

export const Comments = ({ currentVideo }) => {
  return (
    <div className="comments">
      <p className="comments__counts">{currentVideo.comments.length} comments</p>
      <CommentInput />
      {currentVideo.comments.map((comment) => (
        <div key={comment.id} className="comments__exists">
          <p>{comment.name}</p>
          <p>{formatTime(comment.timestamp)}</p>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
};
