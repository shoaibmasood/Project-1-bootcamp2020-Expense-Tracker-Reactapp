import React, { useContext } from 'react';
import styles from './Header.module.css';
import Total from './Total/Total';
import Income from './Income/Income';
import Expense from './Expense/Expense';
import { GlobalContext } from '../../context/GlobalState';

const Header = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className={styles.top}>
      <div className={styles.budget}>
        <div className={styles.budget__title}>
          <h1>Expense Tracker</h1>
        </div>
        <Total total={total} />
        <Income income={income} />
        <Expense expense={expense} />
      </div>
    </div>
  );
};

export default Header;
