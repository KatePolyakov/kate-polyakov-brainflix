import React from 'react';

import UploadVideoPreview from '../../assets/images/images/Upload-video-preview.jpg';
import './uploadPage.scss';

export const UploadPage = () => {
  return (
    <div className="upload-video">
      <p className="upload-video__title">Upload Video</p>
      <form className="upload-video__form">
        <div className="upload-video__wrapper">
          <div className="upload-video__video-section">
            <label className="upload-video__title">Video Thumbnail</label>
            <img src={UploadVideoPreview} className="upload-video__video" alt="thumbnail" />
          </div>
          <div className="upload-video__description-section">
            <label className="upload-video__title">TITLE YOUR VIDEO</label>
            <input
              className="upload-video__input"
              type="text"
              placeholder="Add a title to your video"
            />
            <label className="upload-video__title">ADD A VIDEO DESCRIPTION</label>
            <textarea
              className="upload-video__textarea"
              type="text"
              placeholder="Add a description to your video"
              rows={5}
            />
          </div>
        </div>
        <div className='upload-video__buttons'>
          <button className='upload-video__cancel-button'>Cancel</button>
          <button className='upload-video__publish-button'>Publish</button>
        </div>
      </form>
    </div>
  );
};
