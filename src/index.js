import React from "react"
import ReactDOM from "react-dom/client"
// Como ainda nao temos as rotas feitas o jeito mais facil de reidenizar
//  uma das paginas é mudando o elemento no React.StrictMode
// import TelaInicial from './pages/TelaInicial'
import TelaLogin from "./pages/TelaLogin"

import "./styles/index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <TelaLogin />
    </React.StrictMode>
)
