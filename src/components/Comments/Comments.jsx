import React from 'react';

import './comments.scss';
import { dynamicTimestamp } from '../utils/formatTime';
import { CommentInput } from '../CommentInput/CommentInput';

export const Comments = ({ currentVideo }) => {
  return (
    <div className="comments">
      {currentVideo.comments ? (
        <p className="comments__counts">{currentVideo.comments.length} Comments</p>
      ) : (
        ''
      )}

      <CommentInput />
      {currentVideo.comments
        ? currentVideo.comments.map((comment) => (
            <div key={comment.id} className="comments__exists">
              <div className="comments__img-group">
                <div className="comments__img"></div>
              </div>
              <div className="comments__group">
                <div className="comments__name-date">
                  <p className="comments__name">{comment.name}</p>
                  <p className="comments__date">{dynamicTimestamp(comment.timestamp)}</p>
                </div>
                <p className="comments__comment">{comment.comment}</p>
              </div>
            </div>
          ))
        : 'No comments'}
    </div>
  );
};
