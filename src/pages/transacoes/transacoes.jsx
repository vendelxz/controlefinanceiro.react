import { useState } from 'react';
import { TransactionTable } from '../../components/ui/TransactionTable';
import { useTransacoes } from '../../hooks/useTransacoes';
import { criarTransacao } from '../../service/transacoesService';
import { deletarTransacao } from '../../service/transacoesService';
import SeletorPeriodo from '../../components/ui/SeletorPeriodo';
import { usePeriodo } from '../../contexts/PeriodoContext';
import { AddTransaction } from '../../components/ui/addTransaction';
import {Modal} from '../../components/ui/Modal'
import './transacoes.css'; 

function Transacoes() {

  const {mes, ano} = usePeriodo();
  
  
  const [modalAberto, setModalAberto] = useState(false);
  const [errosLocal, setErrosLocal] = useState({});
  const [sucesso, setSucesso] = useState(false);
  const [refetchTrigger, setRefetchTrigger] = useState(0);


   const { transacoes, loading, erros } = useTransacoes(mes, ano, refetchTrigger);
   const refetch = () => setRefetchTrigger(prev => prev +1);

   const handleDeletar = async (id) => {
     try{
       await deletarTransacao(id);
       //Preciso refatorar para um refetch no service depois...
      refetch();

     }catch(erro){
       const status = erro.response?.status;
       if(status === 400){
          setErrosLocal({dados: "Transaçao não encontrada para deletar."})
       }
       else if(status === 500){
        setErrosLocal({servidor: "Erro interno de servidor."});
       }
       else{
        setErrosLocal({geral: "Erro geral ao deletar transação."})
       }
     }
   };

  const handleSalvar = async (dadosTransacao) => {

    try{
        await criarTransacao(dadosTransacao);
        setModalAberto(false);
        setSucesso(true);
        refetch();

    }catch(erro){
       const status = erro.response?.status;
       console.log(erro);
       if(status === 400){
        setErrosLocal({dados: "Dados inválidos para registrar transação."});
       }
       else if(status === 500){
        setErrosLocal({servidor: "Erro interno de servidor."});
       }
       else{
        setErrosLocal({geral: "Erro geral ao registrar transação."});
       }
    }
  }


  //Será necessário um useEffect para o carregando da página...?

  //Na table apenas possui erros gerais e de servidor para o usuário saber antes mesmo de cadastrar ou deletar algo...
 
  return (

    <>
    <Modal isOpen={loading}
     onClose={!loading}
      titulo="Carregando"
       children="Aguarde enquanto o sistema busca os dados..."
       ></Modal>

       <Modal isOpen={sucesso} onClose={() => setSucesso(false)}
          titulo="Transação sucedida." children="Sua transação foi registrada com sucesso."></Modal>
    
    <div className="transacoes-container">
      <div className="header-pagina">
        <h2>Histórico de Transações</h2>
        <button className="btn-transacao" onClick={() => setModalAberto(true)}>
          Adicionar
        </button>
      </div>

      <div className="filtros-section">
       <SeletorPeriodo/>
      </div>

      <TransactionTable listaTransacoes={transacoes} onDeletar={handleDeletar} />
       {errosLocal.geral && <div className="erro-mensagem">{errosLocal.geral}</div>}
       {errosLocal.servidor && <div className="erro-mensagem">{errosLocal.servidor}</div>}

      <Modal isOpen={modalAberto} onClose={() => setModalAberto(false)} titulo="Nova Transação">

        {errosLocal.geral && <div className="erro-mensagem">{errosLocal.geral}</div>}
        {errosLocal.dados && <div className="erro-mensagem">{errosLocal.dados}</div>}
        {errosLocal.servidor && <div className="erro-mensagem">{errosLocal.servidor}</div>}
         <AddTransaction onSalvar={handleSalvar} onFechar={() => setModalAberto(false)} /> 
      </Modal>
    </div>
    </>
   
  );
}

export default Transacoes;