import styles from "../styles/MovieCard.module.css"

const imagesURL = "https://image.tmdb.org/t/p/w160/" // TODO: Talvez mover para um .env

// Recebe um objeto movie como parametro
export default function MovieCard(movie) {
    // Esse componente deve conter o card do filme aqueles menores 
    // que levam para a tela de detalhe de filme. Alem de ter o poster do filme deve ter o seu nome, 
    // e principalmente o icone de assistir mais tarde e tambem deve ser exibido no lugar o icone de 
    // assitido caso o usuario logado ja tenha visto o filme, isso é um dos requisitos que os 
    // filmes assitidos devem ser exibidos diferentemente.
    return (
        <div className={styles.card}>
            <a href={`/movie/${movie.id}`}>
                <img src={imagesURL + movie.poster_path} alt={movie.title} />
                <span>{movie.title}</span>
            </a>
        </div>
    );
}