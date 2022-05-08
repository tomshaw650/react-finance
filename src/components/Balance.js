import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

//Money formatter function
function moneyFormatter(num) {
  let p = Number(num).toFixed(2).split('.');
  return (
    '£ ' + (p[0].split('')[0]=== '-' ? '-' : '') +
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

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);



  return (
    <>
      <h4 className="flex place-content-center m-0 uppercase inline-block">Your Balance</h4>
      <h1 className="flex place-content-center">{moneyFormatter(total)}</h1>
    </>
  )
}
