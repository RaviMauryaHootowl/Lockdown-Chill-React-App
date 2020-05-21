import React, { useState,useEffect } from 'react';
import './SearchPage.css';
import SearchArea from '../SearchArea';
import MovieCard from '../MovieCard/MovieCard';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function SearchPage({location}) {

  const [datas, setDatas] = useState([]);
  //console.log('Page Loaded' +location.search );
  const fetchSearchQuery = (queryText) => {
    fetch('https://api.themoviedb.org/3/search/movie?api_key=ce6e892f0c5567534312ccf1e1631929&query=' + queryText)
      .then(response => response.json())
      .then(data => {
        console.log(data.results);
        setDatas(data.results);
      });
  }

  useEffect(() => {
    fetchSearchQuery(decodeURI(location.search.substring(3)));
  },[location])

  const isEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

  return (
    <div className="searchHomeContainer">
      <div className="topBarSearch">
        <div className="appTitleContainerSearch">
          <Link to="/">
            <span className="appTitle">Lockdown & Chills</span>
          </Link>
        </div>
        <SearchArea initialText={decodeURI(location.search.substring(3))} searchCallback={fetchSearchQuery}/>
      </div>

      {
        (!(isEmpty(datas))) ? (
            datas.map((data) => (
                <MovieCard key={data.id} movieData={data}/>
            ))
          ) : <div className="loadingContainer"><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div> 
      }
    </div>
  );
}

export default SearchPage;
