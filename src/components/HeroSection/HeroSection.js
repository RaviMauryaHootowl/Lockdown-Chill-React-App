import React from 'react';
import './HeroSection.css';

function HeroSection(props){

    const posterURL = (props.movieData.poster_path != null)
            ? 'https://image.tmdb.org/t/p/w500' + props.movieData.poster_path
            :  'https://faculty.eng.ufl.edu/non-traditional-manufacturing-laboratory/wp-content/uploads/sites/60/2015/11/img-placeholder.png';
    
    const backdropURL = 'https://image.tmdb.org/t/p/w500' + props.movieData.backdrop_path;
    const movieTitle = props.movieData.title;
    
    const movieReleaseDate = new Date(props.movieData.release_date);
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const movieReleaseDateString = monthNames[movieReleaseDate.getMonth()] + " " + movieReleaseDate.getDate()+ ", "+ movieReleaseDate.getFullYear();

    const movieRuntime = props.movieData.runtime;
    const movieRuntimeHour = Math.floor(movieRuntime/60);
    const movieRuntimeMins = Math.floor(movieRuntime%60);
    const movieRuntimeString = Math.floor(movieRuntime/60) + 'h ' + Math.floor(movieRuntime%60) + 'm';
    const movieTagline = props.movieData.tagline;
    const movieDescription = props.movieData.overview;
    const movieVoteAverage = props.movieData.vote_average * 0.1;
    

    let backdropcss = {
        backgroundImage : `linear-gradient(0deg, rgba(64, 172, 255, 0.92), rgba(64, 172, 255, 0.92)), url(${backdropURL})`
        
    };

    let outerCirclecss = {
        strokeDasharray : `calc(30 * 2 * 3.141593 * ${movieVoteAverage}) calc(30 * 2 * 3.141593)`
    }

    return (
        <div style={backdropcss} className="heroSection">
                <div className="heroPosterContainer">
                    <img className="hPosterImage" src={posterURL} alt=""/>
                </div>
                <div className="heroMovieContainer">
                    <span className="hmovieTitle">{movieTitle}</span>
                    <div className="hmovieReleaseDataAndRuntimeContainer">
                        <span className="hmovieReleaseDate">{movieReleaseDateString}</span>
                        <span className="hmovieSeperator">&#8226;</span>
                        <span className="hmovieRuntime">{movieRuntimeString}</span>
                    </div>
                    <span className="hmovieTagline">{movieTagline}</span>
                    <span className="hmovieDescription">{movieDescription}</span>
                    <span className="hmovieRatings">
                        <div className="percent">
                            <svg className="percentCircle" viewBox="0 0 76 76">
                                <circle className="percentBg" cx="50%" cy="50%" r="38px"></circle>
                                <circle cx="50%" cy="50%" r="30px"></circle>
                                <circle style={outerCirclecss} className="outerCircle" cx="50%" cy="50%" r="30px"></circle>
                            </svg>
                            <div className="percentIndicator">
                                <span className="percentNumber">{Math.floor(movieVoteAverage*100)}</span>
                                <span className="percentSymbol">%</span>
                            </div>
                        </div>
                    </span>
                </div>
        </div>
    );
}

export default HeroSection;