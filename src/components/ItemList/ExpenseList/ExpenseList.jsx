import React from 'react';
import styles from './ExpenseList.module.css';
const ExpenseList = ({ transaction: { text, amount } }) => {
  if (amount < 0) {
    return (
      <>
        <ul className={styles.container}>
          <li>{text}</li>
          <li>{amount}</li>
        </ul>
      </>
    );
  } else {
    return null;
  }
};

export default ExpenseList;
