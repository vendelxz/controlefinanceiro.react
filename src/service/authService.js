import api from './api.js';
import { useNavigate } from 'react-router-dom';

//Centralizar a lógica de algumas ações do usuário.


export const logout = () => {

    const token = localStorage.getItem('token');
    console.log("Token encontrado para logout:"); //Para fins de debug e erros...

    if (token === null) {
        window.location.replace('/auth/login');
    }

    localStorage.removeItem(token);
    console.log("Token removido do localStorage."); //Para fins de debug e erros...
    window.location.replace('/auth/login');
}

//Login
export const login = async (email, senha) => {
    const response = await api.post('/auth/login', { email, senha });
    return response.data;
}

export const registro = async (nome, email, senha, confirmarSenha) => {
    const response = await api.post('auth/registrar', {nome, email, senha, confirmarSenha});
    return response.data;
}

export const solicitarRecuperacao = async (email, origem) => {
    const response = await api.post('/auth/esqueci-senha', {email, origem});//Passando a origem do site para montar o e-mail.
    return response.data;
}

export const recuperaSenha = async (token, novaSenha) => {
    const response = await api.post('/auth/recuperar-senha',{token, novaSenha})
    return response.data;
} //Implementação para testes...
