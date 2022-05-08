import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);


  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}£{Math.abs(transaction.amount)}</span>
      <button className="hover:outline-0 hover:opacity-100 cursor-pointer bg-red-500 border-0 text-white pb-0.5 px-1.5 transition-opacity" onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  )
}
