import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import data from "../../utils/constants/data";
import { useState } from "react";
import { nanoid } from "nanoid";

function Movies() {
  const [movies, setMovies] = useState(data);

  function handleClick() {
    const newFilm = {
      id: nanoid(),
      title: "Jigsaw",
      year: "2022",
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };

    setMovies([...movies, newFilm]);
    console.log(movies);
  }
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
        <button onClick={handleClick}>add Movie</button>
      </section>
    </div>
  );
}

export default Movies;
