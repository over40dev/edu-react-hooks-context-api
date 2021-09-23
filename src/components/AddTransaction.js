import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

function AddTransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const {addTransaction} = useContext(GlobalContext);

  function onSubmit(e) {
    e.preventDefault();

    if (!text || !amount) {
      console.log('missing required values for text or amount');
      return;
    }

    addTransaction({
      id: Math.floor(Math.random() * 1000000), 
      text, 
      amount: +amount, // converts amount to number
    });
  }

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button 
        className="btn">Add Transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
