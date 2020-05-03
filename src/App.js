import React from 'react';
import prototype from "prop-types";
import axios from "axios";
import Moive from "./Movie";
import "./App.css"

//https://willlead.github.io.movie_app
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  //await 은 async의 매서드 
  // 잠시 데이터를 가져오기까지 기다려야한다고 알려준다.
  getMovies = async () => {

    const { data: { data: { movies } } }
      = await axios.get(
        "https://yts-proxy.now.sh/list_movies.json?sort_by=rating");

    //{moives : movies} 
    // states.movies
    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return <section className='container'>
      {
        isLoading ?
          (<div className="loader">
            <span className="loader_text">
              "Loading..."</span>
          </div>
          )
          : (<div className="movies">
            {movies.map(movie => (
              < Moive
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres= {movie.genres}
              />
            ) )}
          </div>
          )}
    </section>
  }
}
export default App;
