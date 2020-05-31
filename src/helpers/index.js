import currencylib from 'currency.js';

export const convertMoney = (price, currency = 'BRL') => {
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

export const cashbackCalculate = (transactions) => {
  let amount = 0.0;
  let feedback_score = 0;
  transactions.forEach((trans) => {
    const { seller_feedback_score, price_value, cashback_percentage } = trans;
    amount += price_value * cashback_percentage;
    feedback_score += seller_feedback_score;
  });
  return {
    cashback_amount: convertMoney(amount),
    average_feedback_score: feedback_score / transactions.length,
  };
};
