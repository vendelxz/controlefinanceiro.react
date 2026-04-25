import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SummaryCard } from '../../components/SummaryCard'
import { useTransacoes } from '../../hooks/useTransacoes.js'
import Transacoes from '../transacoes/transacoes.jsx'
import './home.css'

function Home() {
  const mesAtual = new Date().getMonth() + 1;
  const anoAtual = new Date().getFullYear();
  const { transacoes } = useTransacoes(mesAtual, anoAtual);


  //Para testar apenas...
  //Lógica de valor dos cards...
  const receitas = transacoes
    .filter(t => t.tipo === 'RECEITA')
    .reduce((acc, t) => acc + t.valor, 0);

  const despesas = transacoes
    .filter(t => t.tipo === 'DESPESA')
    .reduce((acc, t) => acc + t.valor, 0);

  const saldo = receitas - despesas;

  //Pensar depois em uma refatoração para cada card de acordo com a aba (Receitas, despesas...) ter uma cor personalizada.
  return (
   <div className="home-content">
      {/* Seção de Cards */}
      <section className="summary-grid">
        <SummaryCard titulo="Receitas" valor={receitas} tipo="positivo" />
        <SummaryCard titulo="Despesas" valor={despesas} tipo="negativo" />
        <SummaryCard titulo="Saldo Atual" valor={saldo} tipo={saldo >= 0 ? 'destaque' : 'negativo'} />
    </section>
    </div>
  )
}

export default Home
