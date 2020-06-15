import React from 'react';
import styles from './IncomeList.module.css';
const IncomeList = ({ transaction: { text, amount } }) => {
  if (amount > 0) {
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

export default IncomeList;
