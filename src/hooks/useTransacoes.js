import { useEffect, useState } from 'react'
import {buscarTransacao} from '../service/transacoesService'

//Hook responsável por renderizar as transações na página de acordo com o mês e ano...

export function useTransacoes(mes, ano){

const [transacoes, setTransacoes] = useState([]);
const [loading, setLoading] = useState(true);
const [erros, setErros] = useState(null);

useEffect(() => {
    buscarTransacao(mes, ano)
    .then(res => setTransacoes(res.data))
    .catch(() => setErros("Erro ao carregar transações."))
    .finally(() => setLoading(false))
}, [mes, ano]);

    return {transacoes, loading, erros};

}

