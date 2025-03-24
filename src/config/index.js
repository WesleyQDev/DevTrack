// Utilizando o sistema de variáveis de ambiente do Vite
export const API_URL = import.meta.env.VITE_API_URL;

// Função auxiliar para verificar o ambiente atual
export const isDevelopment = import.meta.env.MODE === "development";

console.log(`Rodando em ambiente: ${import.meta.env.MODE}`);
console.log(`API URL: ${API_URL}`);
