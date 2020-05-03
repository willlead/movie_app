import React from "react";
import prototype from "prop-types"
import "./Movie.css"
import { Link } from "react-router-dom";


function Movie({ year, title, summary, poster, genres }) {
    return <Link to = {{
        pathname: '/movie-detail',
        state:{
            year,
            title,
            summary,
            poster,
            genres
        }
    }}>
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre, index) =>
                        <li key={index} className="geners__genre">{genre}</li>)}
                </ul>
                <p className="movie__summary">{summary}</p>

            </div>
        </div>
    </Link>
}

Movie.prototype = {
    id: prototype.number.isRequired,
    years: prototype.number.isRequired,
    title: prototype.string.isRequired,
    summary: prototype.string.isRequired,
    poster: prototype.string.isRequired,
    genres: prototype.arrayOf(prototype.string).isRequired
}

export default Movie;