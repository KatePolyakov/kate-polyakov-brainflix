import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { VideoDescription } from '../../components/VideoDescription/VideoDescription';
import { Comments } from '../../components/Comments/Comments';
import { SideVideos } from '../../components/SideVideos/SideVideos';

import './homePage.scss';

const API_URL = 'http://localhost:8080';

export const HomePage = () => {
  const [videoList, setVideoList] = useState([]); //List of video, short
  const [currentVideo, setCurrentVideo] = useState({});
  const { videoId } = useParams();

  const PageTitle = () => {
    useEffect(() => {
      document.title = 'Home Page';
    }, []);
  };

  PageTitle();

  useEffect(() => {
    axios
      .get(`${API_URL}/videos`)
      .then((response) => {
        console.log('Response data', response.data[0].id);
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
      .get(`${API_URL}/videos/${videoId}`)
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
