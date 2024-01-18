import React from 'react';
import './Header.scss';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import upload from '../../assets/Icons/upload.svg';
import searchIcon from '../../assets/Icons/search.svg';
import presonImage from '../../assets/Images/Mohan-muruge.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img src={logo} alt="Logo" className="header__logo" />
      </div>
      <div className="header__search">
        <input type="text" placeholder="         Search" className="header__search-input" />
        <img src={searchIcon} alt="Search Icon" className="header__search-icon" />
        <img src={presonImage} alt="persons_image" className="header__logo1" />
      </div>
      <button className="header__upload-button">UPLOAD</button>
      <img src={upload} alt="upload Icon" className="header__upload-icon" />
      <img src={presonImage} alt="persons_image" className="header__logo2" />
    </header>
  );
};

export default Header;

