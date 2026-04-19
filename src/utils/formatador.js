export const formatarMoeda = (valor) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);

export const formatarData = (data) =>
  new Date(data).toLocaleDateString('pt-BR');