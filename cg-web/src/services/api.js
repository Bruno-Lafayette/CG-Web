// src/services/api.js
import axios from 'axios';

const API_URL = "http://localhost:8080/api/transactions";

// Função para buscar transações
export const fetchTransactions = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Função para criar nova transação
export const createTransaction = async (transaction) => {
    const response = await axios.post(API_URL, transaction);
    return response.data;
};
