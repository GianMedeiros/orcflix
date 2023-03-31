import { useState } from "react"
import styles from "../styles/ConfigScreenVisual.module.css"

import { Link } from "react-router-dom"

export default function ConfigScreenVisual() {
    const [isEditing, setIsEditing] = useState(false)

    return (
        <>
            <div className={styles.titulo}>
                <h2>Configurações</h2>
            </div>
            {isEditing ? // Tela caso esteja editando o perfil
                <div className={styles.bloco_fundo}>
                    <div className={styles.dados}>
                        <div className={styles.conta}>
                            <h3>Conta:</h3>
                            <form>
                                <p>Nome completo:</p>
                                <input></input>
                                <p>Nome de usuário:</p>
                                <input></input>
                                <p>Senha:</p>
                                <input></input>
                                <button className={styles.botao_editar}>Salvar Alterações</button>
                            </form>
                        </div>
                        <div className={styles.voltar}>
                            <button className={styles.botao_voltar}
                                onClick={() => { setIsEditing(false) }}>
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
                :  // Tela caso não esteja editando o perfil
                <div className={styles.bloco_fundo}>
                    <div className={styles.dados}>
                        <div className={styles.conta}>
                            <h3>Conta:</h3>
                            <p>Nome completo:</p>
                            <div className={styles.dados_do_usuario}>Dados</div>
                            <p>Nome de usuário:</p>
                            <div className={styles.dados_do_usuario}>Dados</div>
                            <p>Senha:</p>
                            <div className={styles.dados_do_usuario}>Dados</div>
                            <button className={styles.botao_editar}
                                onClick={() => { setIsEditing(true) }}>
                                Editar perfil
                            </button>
                        </div>
                        <div className={styles.voltar}>
                            <button 
                                className={styles.botao_voltar}>
                                <Link 
                                    to="/home">
                                    Voltar
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className={styles.excluir}>
                        <button className={styles.botao_excluir}>Exluir conta</button>
                    </div>
                </div>
            }
        </>
    )
}