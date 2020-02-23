import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpence = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transition => transition.amount);
  const income = amounts
    .filter(item => item > 0)
    .reduce((tot, item) => (tot += item), 0)
    .toFixed(2);

  const expence = amounts
    .filter(item => item < 0)
    .reduce((tot, item) => (tot -= item), 0)
    .toFixed(2);

  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${expence}</p>
        </div>
      </div>
    </>
  );
};
