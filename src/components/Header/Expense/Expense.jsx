import React from 'react';
import styles from './Expense.module.css';
const Expense = () => {
  return (
    <div className={styles.budget__expenses}>
      <div className={styles.budget__expenses__text}>Expenses</div>
      <div className={styles.budget__expenses__value}>- 1,954.36</div>
      {/* <div className={styles.budget__expenses__percentage}>45%</div> */}
    </div>
  );
};

export default Expense;
