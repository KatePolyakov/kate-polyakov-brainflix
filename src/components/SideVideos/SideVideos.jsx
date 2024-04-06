import React from 'react';

import './sideVideos.scss';

export const SideVideos = ({ setNewVideo, videoDataShort, currentVideo }) => {
  let videoArr = [];
  for (let i = 0; i < videoDataShort.length; i++) {
    if (videoDataShort[i].id !== currentVideo.id) {
      videoArr.push(videoDataShort[i]);
    }
  }

  return (
    <div className="video-list">
      <p className="video-list__title">NEXT VIDEOS</p>
      <div className="video-list__list">
        {videoArr.map((video) => (
          <button key={video.id} onClick={() => setNewVideo(video)} className="video-list__video">
            <img src={video.image} alt={video.title} className="video-list__img" />
            <div className="video-list__title-channel">
              <p className="video-list__video-title">{video.title}</p>
              <p className="video-list__video-channel">{video.channel}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
