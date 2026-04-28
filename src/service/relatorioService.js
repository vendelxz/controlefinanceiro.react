import api from './api';

//Download direto na página...
export const getRelatorioDownload = async (mes, ano) => {
    const resposta = await api.get('/relatorios/pdf', {params: {mes, ano}, responseType: 'blob'}); //A API Irá mandar um array de Bites...
    return resposta.data;
}

//Envio de e-mail para o usuário da sessão.
export const enviarRelatorioEmail = async (mes, ano) => {
    const resposta =  await api.post('/relatorios/email',null, {params: {mes, ano}})
    return resposta.data;
}