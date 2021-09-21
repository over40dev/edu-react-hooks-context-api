import {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

function IncomeExpenses() {
  const {transactions} = useContext(GlobalContext);

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0)
    .toFixed(2);

  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => (acc - t.amount), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
