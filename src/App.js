import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, withRouter, Link, useHistory} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import SearchPage from './components/SearchPage/SearchPage';
import MovieInDetailPage from './components/MovieInDetailPage/MovieInDetailPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/search" component={SearchPage}/>
          <Route path="/movie-details/:id" exact component={MovieInDetailPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
