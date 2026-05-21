import React, { useState, useMemo } from 'react';
import MainLayout from '../layout/MainLayout';
import SeletorPeriodo from '../ui/SeletorPeriodo';
import {Modal} from '../Modal';
import { useTransacoes } from '../../hooks/useTransacoes';
import { GraphicsUtils } from '../../utils/GraphicsUtils';

export default function Graphics() {
  const { transacoes, loading } = useTransacoes();
  
  const [filtroTipo, setFiltroTipo] = useState('GERAL');
  const [filtroCategoria, setFiltroCategoria] = useState('GERAL');
  const [filtroPagamento, setFiltroPagamento] = useState('GERAL');

  const transacoesFiltradas = useMemo(() => {
    return GraphicsUtils.filtrarTransacoes(transacoes, {
      tipo: filtroTipo,
      categoria: filtroCategoria,
      metodoPagamento: filtroPagamento
    });
  }, [transacoes, filtroTipo, filtroCategoria, filtroPagamento]);

  return (
      <>
    <Modal isOpen={loading}
     onClose={!loading}
      titulo="Carregando"
       children="Aguarde enquanto o sistema busca os dados..."
       ></Modal>
    <MainLayout>
      <div className="relatorios-container">
        <div className="relatorios-header">
          <h2>Análise de Gráficos</h2>
          <SeletorPeriodo />
        </div>
      </div>
    </MainLayout>
  </>);
}