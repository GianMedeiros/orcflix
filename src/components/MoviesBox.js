import MovieCard from "./MovieCard";

import styles from "../styles/MoviesBox.module.css"

// Recebe um array de objetos de filmes
export default function MoviesBox({ movies, isCarousel = false }) {
    return (
        <div className={isCarousel ? styles.carousel : styles.movies_list}>
            {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
    )
}