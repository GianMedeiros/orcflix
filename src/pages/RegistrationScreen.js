import styles from '../styles/RegistrationScreen.module.css'

import { Link } from "react-router-dom"

export default function RegistrationScreen() {
    return (
        <>
            <h1>ORC'FLIX</h1>
            <div className={styles.caixa_registro}>
                <h2>Crie sua conta</h2>
                <form>
                    <div className={styles.divisoes}>
                        <p>Nome completo:</p>
                        <input></input>
                    </div>
                    <div className={styles.divisoes}>
                        <p>Nome de usuário:</p>
                        <input></input>
                    </div>
                    <div className={styles.divisoes}>
                        <p>Senha:</p>
                        <input></input>
                    </div>
                    <div className={styles.divisoes}>
                        <p>Confirmar senha:</p>
                        <input></input>
                    </div>
                    <div className={styles.botoes}>
                        <button 
                            className={styles.botao_criar_conta}>
                            <Link 
                                to="/home">
                                Criar conta
                            </Link>
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