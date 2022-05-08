import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

function moneyFormatter(num) {
  let p = Number(num).toFixed(2).split('.');
  return (
    '£ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div className="bg-white shadow-black p-5 flex justify-between my-5 mx-0">
      <div className="flex-1 text-center border-r-2 border-stone-300">
        <h4 className="m-0 uppercase">Income</h4>
        <p className="text-xl tracking-wide my-1.5 mx-0 text-green-500">{moneyFormatter(income)}</p>
      </div>
      <div className="flex-1 text-center">
        <h4 className="m-0 uppercase">Expenses</h4>
        <p className="text-xl tracking-wide my-1.5 mx-0 text-red-500">{moneyFormatter(expense)}</p>
      </div>
    </div>
  )
}
