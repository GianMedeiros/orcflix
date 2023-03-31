import { useState } from "react"

import styles from "../styles/LoginScreen.module.css"

export default function LoginScreen() {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        //  Agora eu tenho os valores de user e password
        console.log({ user, password })
    }

    return (
        <>
            <h1>ORC'FLIX</h1>
            <div className={styles.caixa_login}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
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
                        onChange={(e) => setPassword(e.target.value)}>
                    </input>
                    <button
                        type="submit"
                        className={styles.botao_entrar}>
                        Entrar
                    </button>
                </form>
                <a href="/new">
                    <span>Não tem conta?<b>Criar conta.</b></span>
                </a>
            </div>
        </>
    )
}
