import React from 'react';
import './Movie.scss';

import notfound from '../../assets/image-not-found.png'

const Movie = (props) => {
    return (
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image">
                    <button className="btn-floating halfway-fab waves-effect waves-light red" href="#" onClick={() => props.viewMovieInfo(props.movieId)}><i className="material-icons">add</i></button>
                    {
                        props.image == null ?
                            <img src={notfound} alt="card" /> :
                            <img src={`http://image.tmdb.org/t/p/w500${props.image}`} alt="card" />
                    }
                </div>
                <div className="card-content">
                    <strong>{props.name}</strong>
                    <p><strong>Genres: </strong> {props.genres.join(' ') || ''}</p>
                    <p><strong>Release Date: </strong> {props.release_date.substring(5).split("-").concat(props.release_date.substring(0, 4)).join('/')}</p>
                </div>
            </div>
        </div>
    )
}

export default Movie;