import SearchBox from "../components/SearchBox"
import ReviewBox from "../components/ReviewBox"
// import MoviesBox from "../components/MoviesBox" // TODO: Para os Semelhantes

import styles from '../styles/MovieDetailScreen.module.css'


import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const moviesURL = "https://api.themoviedb.org/3/movie/" // TODO: Talvez mover para um .env
const imagesURL = "https://image.tmdb.org/t/p/original"
const apiKey = "api_key=da2ade07e560ddc5e0e4b562abc3ce45"

export default function MovieDetailScreen() {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = (url) => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMovie(data))
            .catch(error => console.log(error));
    }

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}`
        getMovie(movieUrl)
    }, [id])

    return (
        movie && (
            <>
                <button
                    className={styles.botao}>
                    <Link
                        to="/home">
                        Home
                    </Link>
                </button>
                <SearchBox />
                <div className={styles.movie_box}>

                    <div className={styles.title}>
                        <h3>{movie.title}</h3>
                    </div>

                    <p className={styles.tagline}>{movie.tagline}</p>

                    <div className={styles.info}>
                        <p>{movie.runtime} minutos</p>
                    </div>

                    <div className={styles.stars}>
                        <p>{movie.vote_average} Estrelas</p>
                    </div>

                    <div className={styles.desc}>
                        <p>{movie.overview}</p>
                    </div>

                    <div className={styles.poster}>
                        <img src={imagesURL + movie.backdrop_path} alt={movie.title} />
                    </div>
                </div>

                <div className={styles.comments_box}>
                    <ReviewBox />
                </div>
            </>
        )
    )
}