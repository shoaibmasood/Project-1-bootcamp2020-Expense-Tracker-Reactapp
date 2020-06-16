import React from 'react';
import styles from './Expense.module.css';
const Expense = ({ expense }) => {
  return (
    <div className={styles.budget__expenses}>
      <div className={styles.budget__expenses__text}>Expenses</div>
      <div className={styles.budget__expenses__value}>$ {expense}</div>
    </div>
  );
};

export default Expense;
