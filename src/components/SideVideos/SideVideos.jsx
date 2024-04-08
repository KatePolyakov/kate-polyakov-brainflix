import React from 'react';

import { Link } from 'react-router-dom';

import './sideVideos.scss';

export const SideVideos = ({ currentVideo, videoList }) => {

  return (
    <div className="video-list">
      <p className="video-list__title">NEXT VIDEOS</p>
      <div className="video-list__list">
        {videoList
          .filter((video) => video.id !== currentVideo.id)
          .map((video) => (
            <>
              <Link key={video.id} to={`/video-player/${video.id}`} className="video-list__video">
                <img src={video.image} alt={video.title} className="video-list__img" />
                <div className="video-list__title-channel">
                  <p className="video-list__video-title">{video.title}</p>
                  <p className="video-list__video-channel">{video.channel}</p>
                </div>
              </Link>
            </>
          ))}
      </div>
    </div>
  );
};
