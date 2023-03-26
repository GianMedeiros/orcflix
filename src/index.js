import React from 'react';
import ReactDOM from 'react-dom/client';
import TelaInicial from './pages/TelaInicial';

import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <TelaInicial />
    </React.StrictMode>
);