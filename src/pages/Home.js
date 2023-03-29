import SearchBox from "../components/SearchBox";
import MoviesBox from "../components/MoviesBox";

export default function Home() {
    return (
        <>
            <h1>
                Hello tela inicial
            </h1>
            <SearchBox />
            <MoviesBox modoBandeija="on" />
            <MoviesBox modoBandeija="on" />
            <MoviesBox modoBandeija="on" />
        </>
    );
}