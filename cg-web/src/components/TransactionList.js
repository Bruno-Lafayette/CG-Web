// src/components/TransactionList.js
import React, { useEffect, useState } from 'react';
import { fetchTransactions } from '../services/api';
import TransactionForm from './TransactionForm';

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);

    // Função que busca as transações
    const loadTransactions = async () => {
        const data = await fetchTransactions();
        setTransactions(data || []);
    };

    useEffect(() => {
        loadTransactions();
    }, []);

    const handleAddTransaction = async (newTransaction) => {
        setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
        await loadTransactions(); // Recarrega a lista para garantir atualização
    };

    return (
        <div>
            <TransactionForm onAddTransaction={handleAddTransaction} />
            <h2>Lista de Transações</h2>
            <ul>
                {transactions.map((transaction, index) => (
                    transaction && transaction.description ? (
                        <li key={transaction.id || index}>
                            {transaction.description} - {transaction.type} - R${transaction.amount.toFixed(2)}
                        </li>
                    ) : null
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;
