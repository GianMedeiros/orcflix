import CardFilme from "./CardFilme";

export default function CaixaFilmes() {
    // Esse componente deve receber os filmes que serao listados e retornar um
    // container com os card de filme agrupados para usar esse componente na 
    // Tela de busca onde os cards exibidos serao os do filtro, na tela de 
    // detalhe onde os cards exibidos serao os semelhantes e na tela do 
    // usuario onde os cards exibidos serao os de favorito/Assitidos/Mais Tarde
    // Tambem seria interessante usar esse elemento na tela inicial assim
    // mas para isso é necessario um condicional para nao criar os elementos 
    // em caixa mas sim em bandeija (tipo a da netflix)
    return (
        <>
            <CardFilme />
            <CardFilme />
            <CardFilme />
            <CardFilme />
            <CardFilme />
            <CardFilme />
        </>
    );
}