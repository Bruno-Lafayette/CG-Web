// src/App.js
import React from 'react';
import TransactionList from './components/TransactionList';

const App = () => {
    return (
        <div>
            <h1>Gerenciador de Gastos</h1>
            <TransactionList /> {/* Renderiza apenas o TransactionList */}
        </div>
    );
};

export default App;
