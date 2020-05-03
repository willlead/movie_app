import React from "react";
import prototype from "prop-types"

function Movie({id,year,title,summary,poster}){
    return <h4>{title}</h4>
}

Movie.prototype = {
    id: prototype.number.isRequired,
    years: prototype.number.isRequired,
    title: prototype.string.isRequired,
    summary: prototype.string.isRequired,
    poster: prototype.string.isRequired
}

export default Movie;