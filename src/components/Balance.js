import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Balance() {

  const {transactions} = useContext(GlobalContext);
  const balance = transactions.reduce((acc, t) => {
    return acc + t.amount;
  },0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${balance.toFixed(2)}</h1>
    </>
  )
}

export default Balance
