import CaixaBusca from "../components/CaixaBusca";
import CaixaComentario from "../components/CaixaComentario";
import CaixaFilmes from "../components/CaixaFilmes"; // Para os Semelhantes

export default function TelaDetalheFilme() {
    return (
        <>
            <h1>
                Hello tela de detalhe do filmes
            </h1>
            <CaixaBusca />
            <CaixaFilmes />
            <CaixaComentario />
            <CaixaComentario />
            <CaixaComentario />
            <CaixaComentario />
        </>
    );
}