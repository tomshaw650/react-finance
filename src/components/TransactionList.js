import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList  = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3 className="border-b-2 border-b-stone-500 pb-0.5 mt-2.5 mx-0 mb-0.5">History</h3>
      <ul className="list list-none p-0 mb-10">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}
