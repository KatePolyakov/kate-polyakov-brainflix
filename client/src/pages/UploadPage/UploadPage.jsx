import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import UploadVideoPreview from '../../assets/images/images/Upload-video-preview.jpg';
import './uploadPage.scss';

export const UploadPage = () => {
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const navigate = useNavigate();

  const handleAddTitle = (event) => {
    setVideoTitle(event.target.value);
  };

  const handleAddDescription = (event) => {
    setVideoDescription(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (videoTitle === '' || videoDescription === '') {
      alert('Please fill the form!');
    } else {
      alert('Publishing!');
      navigate('/');
    }
  };

  return (
    <div className="upload-video">
      <p className="upload-video__title-section">Upload Video</p>
      <form className="upload-video__form" onSubmit={(e) => handleSubmit(e)}>
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
                value={videoTitle}
                onChange={handleAddTitle}
              />
            </div>
            <div className="upload-video__description-video">
              <label className="upload-video__title">ADD A VIDEO DESCRIPTION</label>
              <textarea
                className="upload-video__textarea"
                type="text"
                placeholder="Add a description to your video"
                rows={5}
                value={videoDescription}
                onChange={handleAddDescription}
              />
            </div>
          </div>
        </div>
        <div className="upload-video__buttons">
          <button className="upload-video__cancel-button" link="/">CANCEL</button>
          <button className="upload-video__publish-button">PUBLISH</button>
        </div>
      </form>
    </div>
  );
};
