
export const MESES = [
  { valor: 1, label: 'Janeiro' },
  { valor: 2, label: 'Fevereiro' },
  { valor: 3, label: 'Março' },
  { valor: 4, label: 'Abril' },
  { valor: 5, label: 'Maio' },
  { valor: 6, label: 'Junho' },
  { valor: 7, label: 'Julho' },
  { valor: 8, label: 'Agosto' },
  { valor: 9, label: 'Setembro' },
  { valor: 10, label: 'Outubro' },
  { valor: 11, label: 'Novembro' },
  { valor: 12, label: 'Dezembro' },
];

export const ANOS = Array.from(
  { length: 2027 - 2016 + 1 },
  (_, i) => 2016 + i
);