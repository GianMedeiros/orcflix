import SearchBox from "../components/SearchBox";
import MoviesBox from "../components/MoviesBox";

import { useEffect, useState } from "react";

const moviesURL = "https://api.themoviedb.org/3"  // TODO: Talvez mover para um .env
const apiKey = import.meta.env.API_KEY;

export default function Home() {
    const [popularMovies, setPolularMovies] = useState([])
    const [actionMovies, setActionMovies] = useState([])
    const [documentariesMovies, setDocumentariesMovies] = useState([])

    const getMoviesList = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        return data.results
    }

    useEffect(() => {
        const popularMoviesURL = `${moviesURL}/movie/top_rated?${apiKey}`
        getMoviesList(popularMoviesURL)
            .then((data) => { setPolularMovies(data) })

        const actionMoviesURL = `${moviesURL}/discover/movie?${apiKey}&with_genres=28`
        getMoviesList(actionMoviesURL)
            .then((data) => { setActionMovies(data) })

        const documentariesMoviesURL = `${moviesURL}/discover/movie?${apiKey}&with_genres=99`
        getMoviesList(documentariesMoviesURL)
            .then((data) => { setDocumentariesMovies(data) })
    }, [])

    return (
        <>
            <SearchBox />
            <h1>Hello tela inicial</h1>
            <h2>Populares</h2>
            <MoviesBox movies={popularMovies} isCarousel={true} />
            <h2>Ação</h2>
            <MoviesBox movies={actionMovies} isCarousel={true} />
            <h2>Drama</h2>
            <MoviesBox movies={documentariesMovies} isCarousel={true} />
        </>
    )
}