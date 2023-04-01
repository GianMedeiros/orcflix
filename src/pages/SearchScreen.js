import SearchBox from "../components/SearchBox"
import MoviesBox from "../components/MoviesBox"

import styles from '../styles/SearchScreen.module.css'

import { Link, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"

const apiKey = "api_key=da2ade07e560ddc5e0e4b562abc3ce45"

export default function SearchScreen() {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("q")
    const [movies, setMovies] = useState([])

    const getMoviesList = (url) => {
        return fetch(url)
            .then(res => res.json())
            .then(data => data.results)
            .then(data => setMovies(data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        const searchedMoviesURL = `https://api.themoviedb.org/3/search/movie?${apiKey}&query=${query}`
        getMoviesList(searchedMoviesURL)
    }, [query])

    return (
        <>
            <button
                className={styles.botao}>
                <Link
                    to="/home">
                    Home
                </Link>
            </button>
            <SearchBox />
            <h2>Mostrando resultados para: {query}</h2>
            <MoviesBox movies={movies} />
        </>
    )
}