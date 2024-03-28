import React, { useState } from 'react';
import videoData from '../../data/video-details.json';

import likesIcon from '../../assets/images/icons/likes.svg';
import viewsIcon from '../../assets/images/icons/views.svg';

export const VideoSection = () => {
  const [currentVideo, setCurrentVideo] = useState(videoData[0]);

  let videoArr = [];
  for (let i = 0; i < videoData.length; i++) {
    if (videoData[i].id !== currentVideo.id) {
      videoArr.push(videoData[i]);
    }
  }

  const setNewVideo = (video) => {
    for (let v = 0; v < videoData.length; v++) {
      if (videoData[v].id === video.id) {
        setCurrentVideo(videoData[v]);
      }
    }
  };

  return (
    <div className="video">
      <video width="320" poster={currentVideo.image} controls></video>
      <div className="video__wrapper">
        <div className="video__additional">
          <div className="video__group">
            <p className="video__title">{currentVideo.title}</p>
            <div className="video__statistics">
              <div className="video__channel-date">
                <p className="video__channel">{currentVideo.channel}</p>
                <p className="video__date">{currentVideo.timestamp}</p>
              </div>
              <div className="video__likes-view">
                <p className="video__view">
                  <img src={viewsIcon} alt="views" /> {currentVideo.views}
                </p>
                <p className="video__likes">
                  <img src={likesIcon} alt="likes" /> {currentVideo.likes}
                </p>
              </div>
            </div>
            <p className="video__description">{currentVideo.description}</p>
          </div>
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
        </div>
        <div className="video__list">
          <p>NEXT VIDEOS</p>
          <div>
            {videoArr.map((video) => (
              <button key={video.id} onClick={() => setNewVideo(video)}>
                <img src={video.image} alt={video} width="150px" />
                <p>{video.title}</p>
                <p>{video.channel}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
