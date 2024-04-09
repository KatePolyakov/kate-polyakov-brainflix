import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { VideoDescription } from '../../components/VideoDescription/VideoDescription';
import { Comments } from '../../components/Comments/Comments';
import { SideVideos } from '../../components/SideVideos/SideVideos';

import './homePage.scss';

const api = 'https://unit-3-project-api-0a5620414506.herokuapp.com';
const APIKey = '31012632-a2fa-467b-814e-11f3fa402723';

export const HomePage = () => {
  const [videoList, setVideoList] = useState([]); //List of video, short
  const [currentVideo, setCurrentVideo] = useState({});
  const { videoId } = useParams();

  useEffect(() => {
    axios
      .get(`${api}/videos?api_key=${APIKey}`)
      .then((response) => {
        setVideoList(response.data);
      })
      .catch((error) => {
        console.log('error:', error);
      });
  }, []);

  useEffect(() => {
    if (videoId) {
      getCurrentVideo(videoId);
    } else if (videoList.length) {
      getCurrentVideo(videoList[0].id);
    }
  }, [videoId, videoList]);

  function getCurrentVideo(videoId) {
    axios
      .get(`${api}/videos/${videoId}?api_key=${APIKey}`)
      .then((response) => {
        setCurrentVideo(response.data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  return (
    <div className="main">
      <div className="main__video">
        <video poster={currentVideo.image} controls></video>
      </div>
      <div className="main__wrapper">
        <div className="main__additional">
          <VideoDescription currentVideo={currentVideo} />
          <Comments currentVideo={currentVideo} getCurrentVideo={getCurrentVideo} />
        </div>
        <SideVideos videoList={videoList} currentVideo={currentVideo} />
      </div>
    </div>
  );
};
