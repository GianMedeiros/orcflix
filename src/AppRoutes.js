import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Home from './pages/Home'
import ConfigScreen from "./pages/ConfigScreenVisual";
import LoginScreen from "./pages/LoginScreen"
import MovieDetailScreen from "./pages/MovieDetailScreen"
import RegistrationScreen from "./pages/RegistrationScreen"
import SearchScreen from "./pages/SearchScreen"
import UserScreen from "./pages/UserScreen"

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/config" element={<ConfigScreen />} />
                <Route exact path="/login" element={<LoginScreen />} />
                <Route exact path="/movie/:id" element={<MovieDetailScreen />} />
                <Route exact path="/register" element={<RegistrationScreen />} />
                <Route exact path="/search/:query" element={<SearchScreen />} />
                <Route exact path="/user/:id" element={<UserScreen />} />
            </Routes>
        </Router>

    )
}
export default AppRoutes;