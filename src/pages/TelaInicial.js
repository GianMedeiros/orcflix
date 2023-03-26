import CaixaBusca from "../components/CaixaBusca";
import CaixaFilmes from "../components/CaixaFilmes";

export default function TelaInicial() {
    return (
        <>
            <h1>
                Hello tela inicial
            </h1>
            <CaixaBusca />
            <CaixaFilmes modoBandeija="on" />
            <CaixaFilmes modoBandeija="on" />
            <CaixaFilmes modoBandeija="on" />
        </>
    );
}