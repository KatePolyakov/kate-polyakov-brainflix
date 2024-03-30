import React, { useState } from 'react';

import videoData from '../../data/video-details.json';
import videoDataShort from '../../data/videos.json';

import { Comments } from '../Comments';
import { NextVideos } from '../NextVideos';
import { VideoDescription } from '../VideoDescription';

export const VideoSection = () => {
  const [currentVideo, setCurrentVideo] = useState(videoData[0]);

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
            <VideoDescription currentVideo={currentVideo} />
          </div>
          <Comments currentVideo={currentVideo} />
        </div>
        <NextVideos
          setNewVideo={setNewVideo}
          videoDataShort={videoDataShort}
          currentVideo={currentVideo}
        />
      </div>
    </div>
  );
};
