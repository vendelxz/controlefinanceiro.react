import { CardRelatorio } from "../../components/ui/CardRelatorio";
import { getRelatorioDownload, enviarRelatorioEmail } from "../../service/relatorioService";
import { useTransacoes } from "../../hooks/useTransacoes";
import { useState } from "react";

function Relatorios() {

    const {transaoes, loading, erros} = useTransacoes(mes, ano, refetchTrigger);
    const [mes, setMes] = useState();
    const [ano, setAno] = useState();
    const [refetchTrigger, setRefetchTrigger] = useState(0);

    const refetch = setRefetchTrigger(prev => prev +1);


    const handleDowload = async (event) => {
        event.preventDefault();

        try {

        } catch (erro) {

        }
    }

    const handleEnviarEmail = async (event) => {
        event.preventDefault();

        try {

        } catch (erro) {

        }
    }


    return (<></>)


}

export default Relatorios;