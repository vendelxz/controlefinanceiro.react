import React, { useState, useMemo } from "react";
import SeletorPeriodo from "../../components/ui/SeletorPeriodo";
import FiltrosSection from "../../components/ui/graphics/FiltrosSection";
import AvisoDadosVazios from "../../components/ui/graphics/AvisoDadosVazios";
import CardGraficoBarra from "../../components/ui/graphics/CardGraficoBarra";
import CardGraficoPizza from "../../components/ui/graphics/CardGraficoPizza";
import {usePeriodo} from "../../contexts/PeriodoContext";
import { Modal } from "../../components/ui/Modal";
import { useTransacoes } from "../../hooks/useTransacoes";
import { GraphicsUtils } from "../../utils/GraphicsTypeUtils";
import "./graficos.css";

function Graficos() { 
  const { mes, ano } = usePeriodo();
  const { transacoes, loading, erros} = useTransacoes(mes, ano);
  

  const [filtroTipo, setFiltroTipo] = useState("GERAL");
  const [filtroCategoria, setFiltroCategoria] = useState("GERAL");
  const [filtroPagamento, setFiltroPagamento] = useState("GERAL");

  const transacoesFiltradas = useMemo(() => {
        return GraphicsUtils.filtrarTransacoes(transacoes, {
      tipo: filtroTipo,
      categoria: filtroCategoria,
      metodoPagamento: filtroPagamento,
    });
  }, [transacoes, filtroTipo, filtroCategoria, filtroPagamento]);

  const temDados = transacoesFiltradas.length > 0;

  return (
    <>
      <Modal
        isOpen={loading}
        onClose={!loading}
        titulo="Carregando"
        children="Aguarde enquanto o sistema busca os dados..."
      ></Modal>
        <div className="graphics-page-container">
          <div className="relatorios-header">
            <h2>Análise de Gráficos</h2>
            <SeletorPeriodo  className='filtros-periodo'/>
          </div>

          <FiltrosSection
            filtroTipo={filtroTipo}
            setFiltroTipo={setFiltroTipo}
            filtroCategoria={filtroCategoria}
            setFiltroCategoria={setFiltroCategoria}
            filtroPagamento={filtroPagamento}
            setFiltroPagamento={setFiltroPagamento}
          />

          {!temDados ? (
            <AvisoDadosVazios />
          ) : (
            <div className="graphics-grid">
              <CardGraficoBarra transacoesFiltradas={transacoesFiltradas} />
              <CardGraficoPizza
                transacoesFiltradas={transacoesFiltradas}
                filtroTipo={filtroTipo}
              />
            </div>
          )}
        </div>
    </>
  );
}
export default Graficos;
