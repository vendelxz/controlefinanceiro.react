import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GraphicsUtils } from '../../utils/GraphicsUtils';

export default function CardGraficoBarra({ transacoesFiltradas }) {
  const dados = GraphicsUtils.obterDadosComparativos(transacoesFiltradas);
  const cores = GraphicsUtils.CORES_SISTEMA;

  return (
    <div className="transacoes-section" style={{ height: '400px', width: '100%' }}>
      <h3 style={{ color: cores.textoMuted, fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
        Balanço Absoluto
      </h3>
      
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={dados} margin={{ top: 10, right: 10, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={cores.grafiteBorda} vertical={false} />
          <XAxis dataKey="name" stroke={cores.textoMuted} tickLine={false} axisLine={false} style={{ fontSize: '12px', fontWeight: '500' }} />
          <YAxis stroke={cores.textoMuted} tickLine={false} axisLine={false} style={{ fontSize: '12px', fontWeight: '500' }} />
          <Tooltip
            contentStyle={{ backgroundColor: cores.fundoCard, borderColor: cores.grafiteBorda, borderRadius: '8px', padding: '10px' }}
            itemStyle={{ fontSize: '13px' }}
            labelStyle={{ color: cores.textoMuted, fontWeight: '600', marginBottom: '4px', fontSize: '12px' }}
            cursor={{ fill: 'rgba(255, 255, 255, 0.03)' }}
          />
          <Legend wrapperStyle={{ paddingTop: '10px', fontSize: '13px', fontWeight: '500' }} />
          <Bar dataKey="Receitas" fill={cores.verdePastel} radius={[6, 6, 0, 0]} barSize={50} />
          <Bar dataKey="Despesas" fill={cores.vermelhoPastel} radius={[6, 6, 0, 0]} barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}