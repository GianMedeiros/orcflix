import { useState } from "react";
import styles from "../styles/TelaLogin.module.css"

export default function TelaLogin() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        //  wip
    };
    return (
        <>
            <h1>Orc'flix</h1>
            <div className={styles.caixa_login}>
                <h2>Login</h2>
                <form>
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
                    <button className={styles.botao_entrar}>Entrar</button>
                </form>
                <span>
                    Não tem conta?<b>Criar conta.</b>
                </span>
            </div>
        </>
    )
}
