import React, { useState, Fragment } from 'react';
import './HomePage.css';
import SearchArea from '../SearchArea';

function HomePage() {

  return (
    <div className="homeContainer">
      
      <div className="appTitleContainer">
        <span className="appTitleHome">Lockdown & Chills</span>
        <span className="appSubTitleHome">Discover your Next Favorite Movie</span>
      </div>
      <div className="searchContainer">
        <SearchArea/>
      </div>
      <div className="bottomContainer">
        <span>Made with React.js</span>
        <a target="_blank" href="https://github.com/RaviMauryaHootowl/Lockdown-Chill-React-App">
          <div className="gitLink">
            <img src="https://image.flaticon.com/icons/svg/25/25231.svg" alt=""/>
            <span>View Source Code</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
