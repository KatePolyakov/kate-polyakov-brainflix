import React from 'react';

import { dynamicTimestamp } from '../utils/formatTime';

import likesIcon from '../../assets/images/icons/likes.svg';
import viewsIcon from '../../assets/images/icons/views.svg';

import './videoDescription.scss';

export const VideoDescription = ({ currentVideo }) => {
  return (
    <div className="video">
      <p className="video__title">{currentVideo.title}</p>
      <div className="video__statistics">
        <div className="video__channel-date">
          <p className="video__channel">By {currentVideo.channel}</p>
          <p className="video__date">{dynamicTimestamp(currentVideo.timestamp)}</p>
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
  );
};
