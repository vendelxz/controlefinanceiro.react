import React from 'react';

export default function AvisoDadosVazios() {
  return (
    <div className="transacoes-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem', minHeight: '300px', textAlign: 'center' }}>
      <p style={{ color: '#967bb6', fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
        Nenhum registro encontrado
      </p>
      <p style={{ color: '#9ca3af', fontSize: '0.9rem', maxWidth: '360px', margin: 0 }}>
        Não existem transações para a combinação de filtros selecionada neste mês. Tente flexibilizar os critérios de busca.
      </p>
    </div>
  );
}