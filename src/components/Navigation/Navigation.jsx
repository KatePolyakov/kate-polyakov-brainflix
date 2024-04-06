import React from 'react';

import Logo from '../../assets/images/logo/BrainFlix-logo.svg';
import Avatar from '../../assets/images/images/Mohan-muruge.jpg';
import './navigation.scss';

export const Navigation = () => {
  return (
    <div className='navigation'>
      <div className='navigation__wrapper'>
        <img src={Logo} alt='BrainFlix Logo' className='navigation__logo-name' />

        <div className='navigation__search-buttons-group'>
          <div className='navigation__search-logo'>
            <form>
              <input
                type='text'
                name='search'
                placeholder='Search..'
                className='navigation__search-bar'
              />
            </form>
            <img src={Avatar} className='navigation__avatar-mobile' alt='avatar'/>
          </div>
          <button className="navigation__upload-button">UPLOAD</button>
          <img src={Avatar} className='navigation__avatar-tablet' alt='avatar'/>
        </div>

        
      </div>
    </div>
  );
};
