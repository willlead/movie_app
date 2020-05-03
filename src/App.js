import React from 'react';
import prototype from "prop-types";
import axios from "axios";
import Moive from "./Movie";


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
    return <div>
      {
        this.state.isLoading ? "Loading..." :
          movies.map(movie => {
            console.log(movie);
            return <Moive
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image} />
          })}</div>
  }


}
export default App;
