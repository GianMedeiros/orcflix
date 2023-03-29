import React from "react"
import ReactDOM from "react-dom/client"
// Como ainda nao temos as rotas feitas o jeito mais facil de reidenizar
//  uma das paginas é mudando o elemento no React.StrictMode
import Home from './pages/Home'
// import ConfigScreen from "./pages/ConfigScreen";
// import LoginScreen from "./pages/LoginScreen"
// import MovieDetailScreen from "./pages/MovieDetailScreen"
// import RegistrationScreen from "./pages/RegistrationScreen"
// import SearchScreen from "./pages/SearchScreen"
// import UserScreen from "./pages/UserScreen"

import "./styles/index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
)
