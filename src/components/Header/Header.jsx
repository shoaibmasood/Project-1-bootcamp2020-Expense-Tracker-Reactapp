import React from 'react';
import styles from './Header.module.css';
import Total from './Total/Total';
import Income from './Income/Income';
import Expense from './Expense/Expense';

const Header = () => {
  return (
    <div className={styles.top}>
      <div className={styles.budget}>
        <div className={styles.budget__title}>
          <h1>Expense Tracker</h1>
        </div>
        <Total />
        <Income />
        <Expense />
      </div>
    </div>
  );
};

export default Header;
