import React from "react"
import ReactDOM from "react-dom/client"
// Como ainda nao temos as rotas feitas o jeito mais facil de reidenizar
//  uma das paginas é mudando o elemento no React.StrictMode
// import Home from './pages/Home'
import LoginScreen from "./pages/LoginScreen"

import "./styles/index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <LoginScreen />
    </React.StrictMode>
)
