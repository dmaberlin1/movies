import {Movie} from "./Movie";

const Movies = (props) => {
    const {movies} = props;

    return (
      <div className='movies'>
          {movies.map(movie => (
              <Movie key={movie.imdbID} {...movie}></Movie>
          ))}
      </div>
    )
}
export {Movies}