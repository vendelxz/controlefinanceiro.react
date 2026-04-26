import api from './api';

//Download direto na página...
export const getRelatorioDownload = async (mes, ano) => {
    const resposta = await api.get('/relatorios/pfd', {params: {mes, ano}}); //A API Irá mandar um array de Bites...
    return resposta.data;
}

//Envio de e-mail para o usuário da sessão.
export const enviarRelatorioEmail = async (mes, ano) => {
    const resposta =  await api.post('/relatorios/email', {params: {mes, ano}})
    return resposta.data;
}