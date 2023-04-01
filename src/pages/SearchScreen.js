import SearchBox from "../components/SearchBox"
import MoviesBox from "../components/MoviesBox"

import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"

const apiKey = "api_key=da2ade07e560ddc5e0e4b562abc3ce45"

export default function SearchScreen() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");
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
            <SearchBox />
            <h1>
                Hello tela de busca
            </h1>
            <MoviesBox movies={movies} />
        </>
    );
}