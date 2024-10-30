// src/components/TransactionForm.js
import React, { useState } from 'react';
import { createTransaction } from '../services/api';

const TransactionForm = ({ onAddTransaction }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('expense');
    const [date, setDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const transaction = {
            description,
            amount: parseFloat(amount),
            type,
            date: date || new Date().toISOString(), // Usa a data atual se não for preenchida
        };
        const newTransaction = await createTransaction(transaction);
        onAddTransaction(newTransaction);

        // Limpa os campos do formulário
        setDescription('');
        setAmount('');
        setType('expense');
        setDate('');
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
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form>
    );
};

export default TransactionForm;
