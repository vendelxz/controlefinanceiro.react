import api from './api'

//Pronta para o consumo dos hooks personalizados do react
export const criarTransacao = (dados) => {
    api.post('/transacoes/criar', {dados});
}

export const buscarTransacao = (mes, ano) => {
    api.get('/transacoes/filtro', {params:{mes,ano}} );
}

export const deletarTransacao = (id) => {
    api.delete(`/transacoes/deletar/${id}`);
}