import styles from "../styles/CardFilme.module.css"

export default function CardFilme() {
    // Esse componente deve conter o card do filme aqueles menores 
    // que levam para a tela de detalhe de filme. Alem de ter o poster do filme deve ter o seu nome, 
    // e principalmente o icone de assistir mais tarde e tambem deve ser exibido no lugar o icone de 
    // assitido caso o usuario logado ja tenha visto o filme, isso é um dos requisitos que os 
    // filmes assitidos devem ser exibidos diferentemente.
    return (
        <p className={styles.card}>
            Hello card de fimes
        </p>
    );
}