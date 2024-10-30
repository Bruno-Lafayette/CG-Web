// src/App.js
import React, { useState } from 'react';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';

function App() {
    const [transactions, setTransactions] = useState([]);

    const handleAddTransaction = (transaction) => {
        setTransactions((prevTransactions) => [...prevTransactions, transaction]);
    };

    return (
        <div className="App">
            <h1>Gerenciador de Gastos</h1>
            <TransactionForm onAddTransaction={handleAddTransaction} />
            <TransactionList transactions={transactions} />
        </div>
    );
}

export default App;
