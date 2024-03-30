import React from 'react';

export const Comments = ({ currentVideo }) => {
  return (
    <div className="video__comments">
      <p>{currentVideo.comments.length} comments</p>
      {currentVideo.comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.name}</p>
          <p>{comment.timestamp}</p>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
};
