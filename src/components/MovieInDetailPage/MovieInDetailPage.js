import React, {useEffect, useState} from 'react';
import './MovieInDetailPage.css';
import HeroSection from '../HeroSection/HeroSection';
import RecMovieCard from '../RecMovieCard/RecMovieCard';
import {Link} from 'react-router-dom';
import SearchArea from '../SearchArea';


function MovieInDetailPage({ match }){
    const idMovie = match.params.id;
    const [movieData, setMovieData] = useState({});
    const [recMovieData, setRecMovieData] = useState([]);

    const fetchMovieDetails = () => {
        fetch(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=ce6e892f0c5567534312ccf1e1631929&query=`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMovieData(data);
            });

        fetch(`https://api.themoviedb.org/3/movie/${idMovie}/recommendations?api_key=ce6e892f0c5567534312ccf1e1631929&page=1`)
            .then(response => response.json())
            .then(data => {
                console.log(data.results);
                setRecMovieData(data.results);
            });
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchMovieDetails();
    }, [match]);

    const isEmpty = (obj) => {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    return (
        <div className="movieDetailsPageContainer">
            <div className="movieSectionContainer">
                <div className="movieSectionHeader">
                    <span className="appTitleDetailsPage">
                        <Link to="/">
                            Lockdown & Chills
                        </Link>
                    </span>
                    
                    <div className="searchBarContainerDetailsPage">
                        <SearchArea/>
                    </div>
                </div>
                
                <div className="heroSectionContainerDetailsPage">
                    {(!isEmpty(movieData)) ? <div></div> : <div className="loadingContainer"><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>}
                    {(!isEmpty(movieData)) ? <HeroSection movieData={movieData}/> : <div></div>}
                </div>
            </div>

            <div className="movieRecommendationsSectionContainer">
                <span className="movieRecommendationsSectionHeader">
                    Similar Taste Movies
                </span>

                <div className="recommendedMoviesContainer">
                    {
                        recMovieData.map((data) => (
                            <RecMovieCard movieData={data} />
                        ))
                    }
                </div>

            </div>

        </div>
    );
}

export default MovieInDetailPage;