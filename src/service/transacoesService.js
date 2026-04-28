import api from './api'

//Pronta para o consumo dos hooks personalidos...
export const criarTransacao = (dados) => {
     return api.post('/transacoes/criar', dados);//Não encapsular senão dá erro, a API espera o JSON completo da transação.
}

export const buscarTransacao = (mes, ano) => {
    return api.get('/transacoes/filtro', { params: { mes, ano } });
}
export const deletarTransacao = (id) => {
    return api.delete(`/transacoes/${id}`);
}