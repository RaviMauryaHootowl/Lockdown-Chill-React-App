import React from 'react';
import './RecMovieCard.css';
import {Link} from 'react-router-dom';

function RecMovieCard(props){

    const posterURL = (props.movieData.poster_path != null)
            ? 'https://image.tmdb.org/t/p/w300' + props.movieData.poster_path
            :  'https://faculty.eng.ufl.edu/non-traditional-manufacturing-laboratory/wp-content/uploads/sites/60/2015/11/img-placeholder.png';
    
    const movieTitle = props.movieData.title;
    const movieReleaseDate = new Date(props.movieData.release_date);
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    const movieReleaseDateString = monthNames[movieReleaseDate.getMonth()] + " " + movieReleaseDate.getDate()+ ", "+ movieReleaseDate.getFullYear();

    console.log(props.movieData.title)

    return (
        <div className="recMovieCard">
            <Link to={`/movie-details/${props.movieData.id}`}>
                <img src={posterURL} alt=""/>
                <span className="recMovieName">{movieTitle}</span>
            </Link>
            <span className="recMovieReleaseDate">{movieReleaseDateString}</span>
        </div>
    );
}

export default RecMovieCard;
