import React from 'react';

import Logo from '../../assets/images/logo/BrainFlix-logo.svg';
import Avatar from '../../assets/images/images/Mohan-muruge.jpg';
import './navigation.scss';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation__wrapper">
        <Link to="/">
          <img src={Logo} alt="BrainFlix Logo" className="navigation__logo-name" />
        </Link>

        <div className="navigation__search-buttons-group">
          <div className="navigation__search-logo">
            <form>
              <input
                type="text"
                name="search"
                placeholder="Search.."
                className="navigation__search-bar"
              />
            </form>
            <img src={Avatar} className="navigation__avatar-mobile" alt="avatar" />
          </div>
          <Link to="/video-upload">
            <button className="navigation__upload-button">UPLOAD</button>
          </Link>
          <img src={Avatar} className="navigation__avatar-tablet" alt="avatar" />
        </div>
      </div>
    </div>
  );
};
