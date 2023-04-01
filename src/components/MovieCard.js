import styles from "../styles/MovieCard.module.css"

const imagesURL = "https://image.tmdb.org/t/p/w500" // TODO: Talvez mover para um .env

// Recebe um objeto movie como parametro
export default function MovieCard({ movie }) {
    return (
        <div className={styles.card}>
            <a href={`/movie/${movie.id}`}>
                <img src={imagesURL + movie.poster_path} alt={movie.title} title={"Ver detalhes de " + movie.title} />
            </a>
        </div>
    )
}