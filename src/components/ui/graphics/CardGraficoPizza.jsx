import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GraphicsUtils } from '../../../utils/GraphicsTypeUtils';
import { GraphicsTransactionsUtils } from '../../../utils/GraphicsTransactionsUtils';

export default function CardGraficoPizza({ transacoesFiltradas, filtroTipo }) {
  const dadosBrutos = filtroTipo === 'RECEITA' 
    ? GraphicsUtils.obterDadosPorCategoria(transacoesFiltradas)
    : GraphicsUtils.obterDadosPorCategoria(transacoesFiltradas);

  const dados = dadosBrutos.filter(item => item.value > 0);
  const cores = GraphicsUtils.CORES_SISTEMA;
  const paleta = GraphicsUtils.PALETA_SEQUENCIAL;

  return (
    <div className="transacoes-section" style={{ height: '400px', width: '100%' }}>
      <h3 style={{ color: cores.textoMuted, fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
        {filtroTipo === 'RECEITA' ? 'Receitas por Categoria' : filtroTipo === 'DESPESA' ? 'Despesas por Categoria' : 'Distribuição por Categoria'}
      </h3>

      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={dados}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={105}
            paddingAngle={4}
          >
            {dados.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={paleta[index % paleta.length]} 
                stroke={cores.fundoCard}
                strokeWidth={2}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => [`R$ ${value.toFixed(2)}`, 'Total']}
            contentStyle={{ backgroundColor: cores.fundoCard, borderColor: cores.grafiteBorda, borderRadius: '8px', padding: '10px' }}
            itemStyle={{ fontSize: '13px', color: cores.textoClaro }}
            labelStyle={{ display: 'none' }}
          />
          <Legend 
            formatter={(value) => GraphicsTransactionsUtils.formatarTexto(value)}
            wrapperStyle={{ fontSize: '13px', fontWeight: '500', color: cores.textoMuted }}
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}