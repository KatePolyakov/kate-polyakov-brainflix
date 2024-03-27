import React from 'react';

import Logo from '../../assets/images/logo/BrainFlix-logo.svg';
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
          </div>
          <div className="navigation__upload-logo"></div>
        </div>
      </div>
    </div>
  );
};
