import { moviesData } from "../src/data/MoviesData";
import "./MovieComponent.css";
import Movie from "./movie";
const MovieComponent = () => {
  return (
    <div className="movie-container">
      <ul key ={moviesData.id}className="movie-list">
        {moviesData.map((moviesData) => (
          <Movie key={moviesData.id} moviesData={moviesData} />
        ))}
      </ul>
    </div>
  );
};

export default MovieComponent;
