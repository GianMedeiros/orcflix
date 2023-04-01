

import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import styles from "../styles/LoginScreen.module.css"

// const moviesURL = "https://api.themoviedb.org/"  // TODO: Talvez mover para um .env
// const apiKey = "api_key=da2ade07e560ddc5e0e4b562abc3ce45"
// const generetToken = `${moviesURL}3/authentication/token/new?${apiKey}`
// const redirectURL = "http://localhost:3000/home"


export default function LoginScreen() {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    // const [token, setToken] = useState([])


    // const getMoviesList = async (url) => {
    //     const res = await fetch(url)
    //     const data = await res.json()
    //     console.log(data)
    //     return data
    // }
    
    // useEffect(() => {
    //     getMoviesList(generetToken)
    //         .then((data) => { setToken(data) })
    // }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        //  Agora eu tenho os valores de user e password
        console.log({ user, password })
        alert("Função de Login incompleta!")

        // if (token['success']==true){

        //     console.log(token['request_token'])
        //     const validacaoApi = `https://www.themoviedb.org/authenticate/${token['request_token']}?redirect_to=${redirectURL}`
        //     alert(`Acesse o link = ${validacaoApi}`)
            
        // }else{
        //     console.log("erro ao obter request_token da API TheMoviesDB")
        // }
    }


    return (
        <>
            <h1>ORC'FLIX</h1>
            <div className={styles.caixa_login}>
                <h2>Login</h2>
                <form >
                    <p>Usuário:</p>
                    <input
                        className={styles.campo_texto}
                        value={user}
                        onChange={(e) => setUser(e.target.value)} >
                    </input>
                    <p>Senha:</p>
                    <input
                        className={styles.campo_texto}
                        value={password}
                        type={password}
                        onChange={(e) => setPassword(e.target.value)}>
                    </input>
                    <button
                        type="submit"
                        className={styles.botao_entrar}
                        onClick={handleSubmit}>
                        Entrar
                        {/* <Link 
                            to="/home">
                            Entrar
                        </Link> */}
                    </button>
                    <button
                        type="submit"
                        className={styles.botao_entrar}>
                        <Link 
                            to="/home">
                            Home
                        </Link>
                    </button>
                </form>
                <p >
                    Não tem conta?
                    {/* <Link 
                        onClick={handleSubmit}>
                        Criar conta.
                    </Link>  */}
                    <Link 
                        to="/register">
                        Criar conta.
                    </Link>
                </p>
            </div>
        </>
    )
}