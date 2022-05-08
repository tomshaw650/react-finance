import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      // research uid and maybe use that instead
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3 className="border-b-2 border-b-stone-500 pb-0.5 mt-2.5 mx-0 mb-0.5">Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label className="inline-block my-2.5 mx-0" htmlFor="text">Text</label>
          <input className="border-2 border-stone-300 rounded-sm block text-base p-2.5 w-full" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div>
          <label className="inline-block my-2.5 mx-0" htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input className="border-2 border-stone-300 rounded-sm block text-base p-2.5 w-full" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="cursor-pointer bg-violet-500 shadow-slate-200 text-white border-0 block text-base mt-2.5 mx-0 mb-7 p-2.5 w-full hover:outline-0">Add transaction</button>
      </form>
    </>
  )
}
