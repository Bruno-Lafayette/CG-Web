// src/components/TransactionList.js
import React, { useEffect, useState } from 'react';
import { fetchTransactions } from '../services/api';

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const getTransactions = async () => {
            const data = await fetchTransactions();
            setTransactions(data);
        };
        getTransactions();
    }, []);

    return (
        <div>
            <h2>Lista de Transações</h2>
            <ul>
                {transactions.map((transaction) => (
                    <li key={transaction.id}>
                        {transaction.description} - {transaction.type} - R${transaction.amount.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;
