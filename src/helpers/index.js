import currencylib from 'currency.js';

export const convertMoney = (currency = 'USD', price) => {
  const convert = {
    BRL: (value) =>
      currencylib(value, {
        symbol: 'R$ ',
        separator: '.',
        decimal: ',',
        precision: 2,
        formatWithSymbol: true,
      }),
    USD: (value) =>
      currencylib(value, {
        symbol: '$ ',
        separator: '.',
        decimal: ',',
        precision: 2,
      }),
  }[currency];
  return convert(price).format();
};
