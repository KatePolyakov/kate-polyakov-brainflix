import React, { useState } from 'react';

import videoData from '../../data/video-details.json';
import videoDataShort from '../../data/videos.json';

import { VideoDescription } from '../VideoDescription/VideoDescription';
import { Comments } from '../Comments/Comments';
import { SideVideos } from '../SideVideos/SideVideos';

import './mainVideo.scss';

export const MainVideo = () => {
  const [currentVideo, setCurrentVideo] = useState(videoData[0]);

  const setNewVideo = (video) => {
    for (let v = 0; v < videoData.length; v++) {
      if (videoData[v].id === video.id) {
        setCurrentVideo(videoData[v]);
      }
    }
  };
  return (
    <div className="main">
      <div className="main__video">
        <video poster={currentVideo.image} controls></video>
      </div>
      <div className="main__wrapper">
        <div className="main__additional">
          <VideoDescription currentVideo={currentVideo} />
          <Comments currentVideo={currentVideo} />
        </div>
        <SideVideos
          setNewVideo={setNewVideo}
          videoDataShort={videoDataShort}
          currentVideo={currentVideo}
        />
      </div>
    </div>
  );
};
