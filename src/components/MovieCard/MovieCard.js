import React from 'react';
import './MovieCard.css';
import {Link, useRouteMatch, useHistory} from 'react-router-dom';

function MovieCard(props){
    const history = useHistory();
    const posterURL = (props.movieData.poster_path != null)
            ? 'https://image.tmdb.org/t/p/w300' + props.movieData.poster_path
            :  'https://faculty.eng.ufl.edu/non-traditional-manufacturing-laboratory/wp-content/uploads/sites/60/2015/11/img-placeholder.png';
    const movieTitleName = props.movieData.title;
    const movieDescription = props.movieData.overview;
    const movieReleaseDate = new Date(props.movieData.release_date);
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    const pushMovieDetailsRoute = () => {
        history.push("/movie-details")
    }

    return (
        <div className="movieCard">
            <div className="posterContainer">
                <Link to={`/movie-details/${props.movieData.id}`}>
                    <img src={posterURL} />
                </Link>
            </div>
            <div className="movieDetailsContainer">
                <Link to={`/movie-details/${props.movieData.id}`}>
                    <span className="movieTitle">{movieTitleName}</span>
                </Link>
                <span className="movieReleaseDate">{monthNames[movieReleaseDate.getMonth()]} {movieReleaseDate.getDate()}, {movieReleaseDate.getFullYear()}</span>
                <span className="movieDescription">{movieDescription}</span>
            </div>
        </div>
    );
}
//export default MovieCard;
export default MovieCard;
