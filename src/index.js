import React from "react"
import ReactDOM from "react-dom/client"
// Como ainda nao temos as rotas feitas o jeito mais facil de reidenizar
//  uma das paginas é mudando o elemento no React.StrictMode

import AppRoutes from './AppRoutes'

import "./styles/index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <AppRoutes />
    </React.StrictMode>
)