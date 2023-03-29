import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Como ainda nao temos as rotas feitas o jeito mais facil de reidenizar
//  uma das paginas é mudando o elemento no React.StrictMode
import ConfigScreen from "./pages/ConfigScreen";
import Home from './pages/Home'
import LoginScreen from "./pages/LoginScreen"
import MovieDetailScreen from "./pages/MovieDetailScreen"
import RegistrationScreen from "./pages/RegistrationScreen"
import SearchScreen from "./pages/SearchScreen"
import UserScreen from "./pages/UserScreen"

import "./styles/index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<Home />}>
                    <Route path="user/:id/config" element={<ConfigScreen />} />
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<LoginScreen />} />
                    <Route path="movie/:id" element={<MovieDetailScreen />} />
                    <Route path="login/new" element={<RegistrationScreen />} />
                    <Route path="seach" element={<SearchScreen />} />
                    <Route path="user/:id" element={<UserScreen />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
