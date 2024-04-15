import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import UploadVideoPreview from '../../assets/images/images/Upload-video-preview.jpg';
import './uploadPage.scss';

const API_URL = 'http://localhost:8080';

export const UploadPage = () => {
  const PageTitle = () => {
    useEffect(() => {
      document.title = 'Upload Page';
    }, []);
  };

  PageTitle();

  
  const navigate = useNavigate();
  const handleSubmitVideo = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/videos`, {
        title: e.target.videoTitle.value,
        description: e.target.videoDescription.value,
      })
      .then((response) => {
        alert('Video is uploaded');
        e.target.reset();
        navigate('/');
      })
      .catch((error) => {
        let messageErr = error.response.data;
        alert(messageErr);
        console.log(`Post request for upload video with: ${error}`);
      });
  };

  return (
    <div className="upload-video">
      <p className="upload-video__title-section">Upload Video</p>
      <form className="upload-video__form" onSubmit={(e) => handleSubmitVideo(e)}>
        <div className="upload-video__wrapper">
          <div className="upload-video__video-section">
            <label className="upload-video__title">VIDEO THUMBNAIL</label>
            <img src={UploadVideoPreview} className="upload-video__video" alt="thumbnail" />
          </div>
          <div className="upload-video__description-section">
            <div className="upload-video__title-video">
              <label className="upload-video__title">TITLE YOUR VIDEO</label>
              <input
                className="upload-video__input"
                type="text"
                placeholder="Add a title to your video"
                id="videoTitle"
              />
            </div>
            <div className="upload-video__description-video">
              <label className="upload-video__title">ADD A VIDEO DESCRIPTION</label>
              <textarea
                className="upload-video__textarea"
                type="text"
                placeholder="Add a description to your video"
                rows={5}
                id="videoDescription"
              />
            </div>
          </div>
        </div>
        <div className="upload-video__buttons">
          <Link to="/">
            <button className="upload-video__cancel-button">
              CANCEL
            </button>
          </Link>

          <button className="upload-video__publish-button">PUBLISH</button>
        </div>
      </form>
    </div>
  );
};
