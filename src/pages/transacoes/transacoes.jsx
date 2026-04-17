import { useState } from 'react';
import { TransactionTable } from '../../components/TransactionTable';
import { useTransacoes } from '../../hooks/useTransacoes';
import { criarTransacao } from '../../service/transacoesService';
import { deletarTransacao } from '../../service/transacoesService';
import { ANOS, MESES } from '../../utils/filtroDados';
import { AddTransaction } from '../../components/addTransaction';
import {Modal} from '../../components/Modal'
import './transacoes.css'; 

function Transacoes() {

  const hoje = new Date();
  const [mes, setMes] = useState(hoje.getMonth() + 1);
  const [ano, setAno] = useState(hoje.getFullYear());
  const [modalAberto, setModalAberto] = useState(false);
  const [errosLocal, setErrosLocal] = useState({});

   const { transacoes, loading, erros } = useTransacoes(mes, ano);

   const handleDeletar = async (id) => {
     try{
       await deletarTransacao(id);
       //Preciso refatorar para um refetch no service depois...
       window.location.reload();

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

  const handleSalvar = async (dados) => {
    try{
        await criarTransacao(dados);
        window.location.reload();
    }catch(erro){
       const status = erro.response?.status;
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


  if (loading) return <p>Carregando...</p>;
 
  return (
   <div className="transacoes-container">
      <div className="header-pagina">
        <h2>Histórico de Transações</h2>
        <button className="btn-transacao" onClick={() => setModalAberto(true)}>
          Adicionar
        </button>
      </div>

      <div className="filtros-section">
        <select className='card-select' value={mes} onChange={e => setMes(Number(e.target.value))}>
          {MESES.map(m => <option key={m.valor} value={m.valor}>{m.label}</option>)}
        </select>

        <select className='card-select' value={ano} onChange={e => setAno(Number(e.target.value))}>
          {ANOS.map(a => <option key={a} value={a}>{a}</option>)}
        </select>
      </div>

      <TransactionTable listaTransacoes={transacoes} onDeletar={handleDeletar} />
       {errosLocal.geral && <div className="erro-mensagem">{errosLocal.geral}</div>}
       {errosLocal.dados && <div className="erro-mensagem">{errosLocal.dados}</div>}
       {errosLocal.servidor && <div className="erro-mensagem">{errosLocal.servidor}</div>}

      <Modal isOpen={modalAberto} onClose={() => setModalAberto(false)} titulo="Nova Transação">

        {errosLocal.geral && <div className="erro-mensagem">{errosLocal.geral}</div>}
        {errosLocal.dados && <div className="erro-mensagem">{errosLocal.dados}</div>}
        {errosLocal.servidor && <div className="erro-mensagem">{errosLocal.servidor}</div>}
         <AddTransaction onSalvar={handleSalvar} onFechar={() => setModalAberto(false)} /> 
      </Modal>
    </div>
  );
}

export default Transacoes;