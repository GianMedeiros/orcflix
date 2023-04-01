import SearchBox from "../components/SearchBox"
import MoviesBox from "../components/MoviesBox"

import { useEffect, useState } from "react"

import styles from '../styles/Home.module.css'

const moviesURL = "https://api.themoviedb.org/3"  // TODO: Talvez mover para um .env
const apiKey = "api_key=da2ade07e560ddc5e0e4b562abc3ce45"

export default function Home() {
    const [popularMovies, setPolularMovies] = useState([])
    const [actionMovies, setActionMovies] = useState([])
    const [documentariesMovies, setDocumentariesMovies] = useState([])

    const getMoviesList = (url) => {
        return fetch(url)
            .then(res => res.json())
            .then(data => data.results)
    }

    useEffect(() => {
        const popularMoviesURL = `${moviesURL}/movie/top_rated?${apiKey}`
        getMoviesList(popularMoviesURL)
            .then(data => setPolularMovies(data))
            .catch(error => console.log(error))

        const actionMoviesURL = `${moviesURL}/discover/movie?${apiKey}&with_genres=28`
        getMoviesList(actionMoviesURL)
            .then(data => setActionMovies(data))
            .catch(error => console.log(error))


        const documentariesMoviesURL = `${moviesURL}/discover/movie?${apiKey}&with_genres=99`
        getMoviesList(documentariesMoviesURL)
            .then(data => setDocumentariesMovies(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <>

            <div>
                <SearchBox />
            </div>
            <div className={styles.boxfullmovies}> 
                <h2 className={styles.nameMovies}>Populares</h2>
                <div className={styles.boxmovies}>
                    <MoviesBox movies={popularMovies} isCarousel={true} />
                </div>
                <h2 className={styles.nameMovies}>Ação</h2>
                <div className={styles.boxmovies}>
                    <MoviesBox movies={actionMovies} isCarousel={true} />
                </div>
                
                <div className={styles.boxmovies}>
                    <h2 className={styles.nameMovies}>Drama</h2>
                    <MoviesBox movies={documentariesMovies} isCarousel={true} />
                </div>
            </div>
        </>
    )
}