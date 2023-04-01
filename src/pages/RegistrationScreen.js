import styles from '../styles/RegistrationScreen.module.css'
import { useEffect, useState } from "react";

import { Link } from "react-router-dom"

const moviesURL = "https://api.themoviedb.org/"  // TODO: Talvez mover para um .env
const apiKey = "api_key=da2ade07e560ddc5e0e4b562abc3ce45"
const generetToken = `${moviesURL}3/authentication/token/new?${apiKey}`
const redirectURL = "http://localhost:3000/home"

export default function RegistrationScreen() {

    const [token, setToken] = useState([])

    const getMoviesList = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        return data
    }

    useEffect(() => {
        getMoviesList(generetToken)
            .then((data) => { setToken(data) })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (token['success']==true){

            console.log(token['request_token'])
            const validacaoApi = `https://www.themoviedb.org/authenticate/${token['request_token']}?redirect_to=${redirectURL}`
            alert(`Acesse o link = ${validacaoApi}`)
            
        }else{
            console.log("erro ao obter request_token da API TheMoviesDB")
        }
    }

    return (
        <>
            <h1>ORC'FLIX</h1>
            <div className={styles.caixa_registro}>
                <h2>Crie sua conta</h2>
                <form>
                    <div className={styles.botoes}>
                        <button 
                            className={styles.botao_criar_conta}
                            onClick={handleSubmit}>
                            Criar conta
                        </button>
                        <button 
                            className={styles.botao_voltar}>
                            <Link 
                                to="/">
                                Voltar
                            </Link>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}











// import styles from '../styles/RegistrationScreen.module.css'

// import { Link } from "react-router-dom"

// export default function RegistrationScreen() {
//     return (
//         <>
//             <h1>ORC'FLIX</h1>
//             <div className={styles.caixa_registro}>
//                 <h2>Crie sua conta</h2>
//                 <form>
//                     <div className={styles.divisoes}>
//                         <p>Nome completo:</p>
//                         <input></input>
//                     </div>
//                     <div className={styles.divisoes}>
//                         <p>Nome de usuário:</p>
//                         <input></input>
//                     </div>
//                     <div className={styles.divisoes}>
//                         <p>Senha:</p>
//                         <input></input>
//                     </div>
//                     <div className={styles.divisoes}>
//                         <p>Confirmar senha:</p>
//                         <input></input>
//                     </div>
//                     <div className={styles.botoes}>
//                         <button 
//                             className={styles.botao_criar_conta}>
//                             <Link 
//                                 to="/home">
//                                 Criar conta
//                             </Link>
//                         </button>
//                         <button 
//                             className={styles.botao_voltar}>
//                             <Link 
//                                 to="/">
//                                 Voltar
//                             </Link>
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </>
//     );
// }