import React, { useContext } from 'react';
import styles from './Total.module.css';
import { GlobalContext } from '../../../context/GlobalState';

const Total = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return <div className={styles.budget__value}>${total}</div>;
};

export default Total;
