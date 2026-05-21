export class GraphicsUtils {
  static CORES_SISTEMA = {
    lavanda: '#967bb6',
    vermelhoPastel: '#f87171',
    verdePastel: '#34d399',
    grafiteBorda: '#25242a',
    fundoCard: '#18181c',
    textoClaro: '#f3f4f6',
    textoMuted: '#9ca3af'
  };

  static PALETA_SEQUENCIAL = [
    '#967bb6',
    '#34d399',
    '#f87171',
    '#60a5fa',
    '#fbbf24'
  ];

   static calcularTotalPorTipo(transacoes, tipo) {
    if (!Array.isArray(transacoes)) return 0;
    return transacoes
      .filter(t => t.tipo === tipo)
      .reduce((sum, t) => sum + (t.valor || 0), 0);
  }

  static obterDadosComparativos(transacoes) {
    const receitas = this.calcularTotalPorTipo(transacoes, 'RECEITA');
    const despesas = this.calcularTotalPorTipo(transacoes, 'DESPESA');

    return [
      {
        name: 'Balanço Geral',
        Receitas: receitas,
        Despesas: despesas
      }
    ];
  }

  static filtrarTransacoes(transacoes, filtros) {
    if (!Array.isArray(transacoes)) return [];
    
    return transacoes.filter(t => {
      if (filtros.tipo && filtros.tipo !== 'GERAL' && t.tipo !== filtros.tipo) {
        return false;
      }
      if (filtros.categoria && filtros.categoria !== 'GERAL' && t.categoria !== filtros.categoria) {
        return false;
      }
      if (filtros.metodoPagamento && filtros.metodoPagamento !== 'GERAL' && t.metodoPagamento !== filtros.metodoPagamento) {
        return false;
      }
      return true;
    });
  }

  static obterDadosPorCategoria(transacoesFiltradas) {
    if (!Array.isArray(transacoesFiltradas)) return [];

    const agrupado = transacoesFiltradas.reduce((acc, t) => {
      const categoria = t.categoria || 'OUTROS';
      acc[categoria] = (acc[categoria] || 0) + (t.valor || 0);
      return acc;
    }, {});

    return Object.keys(agrupado).map(categoria => ({
      name: categoria,
      value: agrupado[categoria]
    }));
  }

  static obterDadosPorMetodoPagamento(transacoesFiltradas) {
    if (!Array.isArray(transacoesFiltradas)) return [];

    const agrupado = transacoesFiltradas.reduce((acc, t) => {
      const metodo = t.metodoPagamento || 'OUTROS';
      acc[metodo] = (acc[acc] || 0) + (t.valor || 0);
      return acc;
    }, {});

    return Object.keys(agrupado).map(metodo => ({
      name: metodo,
      value: agrupado[metodo]
    }));
  }
}