// src/components/TransactionForm.js
import React, { useState } from 'react';
import { createTransaction } from '../services/api';

const TransactionForm = ({ onAddTransaction }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('expense');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const transaction = {
            description,
            amount: parseFloat(amount),
            type,
        };
        const newTransaction = await createTransaction(transaction);
        onAddTransaction(newTransaction);
        setDescription('');
        setAmount('');
        setType('expense');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Adicionar Transação</h2>
            <input
                type="text"
                placeholder="Descrição"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Valor"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="income">Renda</option>
                <option value="expense">Despesa</option>
            </select>
            <button type="submit">Adicionar</button>
        </form>
    );
};

export default TransactionForm;
