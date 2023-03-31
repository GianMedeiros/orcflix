import styles from '../styles/RegistrationScreen.module.css'

export default function RegistrationScreen() {
    return (
        <>
            <h1>ORC'FLIX</h1>
            <div className={styles.caixa_registro}>
                <h2>Crie sua conta</h2>
                <form>
                    <div className={styles.divisoes}>
                        <p>Nome:</p>
                        <input></input>
                    </div>
                    <div className={styles.divisoes}>
                        <p>Sobrenome:</p>
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
                        <button className={styles.botao_criar_conta}>Criar conta</button>
                        <button className={styles.botao_voltar}>Voltar</button>
                    </div>
                </form>
            </div>
        </>
    );
}