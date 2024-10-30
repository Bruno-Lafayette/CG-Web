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
    if (!transaction.date) {
        transaction.date = new Date().toISOString(); // Define a data atual se não estiver presente
    }

    try {
        const response = await axios.post(API_URL, transaction);
        console.log("Transação criada:", response.data);
    } catch (error) {
        console.error("Erro ao criar transação:", error);
    }
};

