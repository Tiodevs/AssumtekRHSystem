// src/api.js ou src/api.ts (se estiver usando TypeScript)

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Substitua pela URL da sua API
});

export default api;
