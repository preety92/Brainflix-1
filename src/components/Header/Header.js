import React, { useState } from 'react';
import './Header.scss';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import upload from '../../assets/Icons/upload.svg';
import searchIcon from '../../assets/Icons/search.svg';
import presonImage from '../../assets/Images/Mohan-muruge.jpg';
import { Link } from 'react-router-dom'; 

const Header = () => {
  const [searchText, setSearchText] = useState('');
  const [isInputFocused, setInputFocused] = useState(false);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  return (
    <header className="header">
      <div className="header__logo-container">
        <Link to="/" className="header__logo-container">
          <img src={logo} alt="Logo" className="header__logo" />
        </Link>
      </div>
      <div className="header__search"> <input type="text" placeholder={isInputFocused ? '' : '         Search'}
          className="header__search-input"value={searchText} onChange={handleInputChange} onFocus={handleInputFocus}
          onBlur={handleInputBlur}/>
        {isInputFocused ? null : <img src={searchIcon} alt="Search Icon" className="header__search-icon" />}
        <img src={presonImage} alt="persons_image" className="header__logo1" />
      </div>
      <Link to="/upload/:uploadId"> 
        <button className="header__upload-button">UPLOAD</button>
        <img src={upload} alt="upload Icon" className="header__upload-icon" />
      </Link>
      <img src={upload} alt="upload Icon" className="header__upload-icon" />
      <img src={presonImage} alt="persons_image" className="header__logo2" />
    </header>
  );
};

export default Header;




