import React from 'react';
import { GraphicsTransactionsUtils } from '../../../utils/GraphicsTransactionsUtils';

export default function FiltrosSection({
  filtroTipo,
  setFiltroTipo,
  filtroCategoria,
  setFiltroCategoria,
  filtroPagamento,
  setFiltroPagamento
}) {
  return (
    <div className="filtros-section">
      <select
        value={filtroTipo}
        onChange={(e) => setFiltroTipo(e.target.value)}
        className="card-select"
      >
        {GraphicsTransactionsUtils.obterOpcoesTipos().map((tipo) => (
          <option key={tipo} value={tipo}>
            {GraphicsTransactionsUtils.formatarTexto(tipo)}
          </option>
        ))}
      </select>

      <select
        value={filtroCategoria}
        onChange={(e) => setFiltroCategoria(e.target.value)}
        className="card-select"
      >
        {GraphicsTransactionsUtils.obterOpcoesCategorias().map((cat) => (
          <option key={cat} value={cat}>
            {GraphicsTransactionsUtils.formatarTexto(cat)}
          </option>
        ))}
      </select>

      <select
        value={filtroPagamento}
        onChange={(e) => setFiltroPagamento(e.target.value)}
        className="card-select"
      >
        {GraphicsTransactionsUtils.obterOpcoesPagamentos().map((pag) => (
          <option key={pag} value={pag}>
            {GraphicsTransactionsUtils.formatarTexto(pag)}
          </option>
        ))}
      </select>
    </div>
  );
}