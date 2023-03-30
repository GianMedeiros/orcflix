import { useState } from "react";
import styles from "../styles/ConfigScreenVisual.module.css"

export default function ConfigScreenVisual() {
    const [isEditing, setIsEditing] = useState(false)
    // Essa tela tem duas versoes a no modo de edicao e 
    // a no modo de visualizacao, ver prototipo no figma
    return (
        <>
            <div className={styles.titulo}>
                <h2>Configurações</h2>
            </div>
            {isEditing ? // Tela caso esteja editando o perfil
                //TODO: Substituir as div por input e criar um forms
                <div className={styles.bloco_fundo}>
                    <div className={styles.dados}>
                        <div className={styles.conta}>
                            <h3>Conta:</h3>
                            <p>Nome:</p>
                            <div className={styles.dados_do_usuario}>Dados</div>
                            <p>Sobrenome:</p>
                            <div className={styles.dados_do_usuario}>Dados</div>
                            <p>Nome de usuário:</p>
                            <div className={styles.dados_do_usuario}>Dados</div>
                            <p>Descrição:</p>
                            <div className={styles.dados_do_usuario}>Dados</div>
                            <button className={styles.botao_editar}>Salvar Alterações</button>
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
                            <p>Nome:</p>
                            <div className={styles.dados_do_usuario}>Dados</div>
                            <p>Sobrenome:</p>
                            <div className={styles.dados_do_usuario}>Dados</div>
                            <p>Nome de usuário:</p>
                            <div className={styles.dados_do_usuario}>Dados</div>
                            <p>Descrição:</p>
                            <div className={styles.dados_do_usuario}>Dados</div>
                            <button className={styles.botao_editar}
                                onClick={() => { setIsEditing(true) }}>
                                Editar perfil
                            </button>
                        </div>
                        <div className={styles.voltar}>
                            <button className={styles.botao_voltar}>Voltar</button>
                        </div>
                    </div>
                    <div className={styles.excluir}>
                        <button className={styles.botao_excluir}>Exluir conta</button>
                    </div>
                </div>
            }
        </>
    );
}