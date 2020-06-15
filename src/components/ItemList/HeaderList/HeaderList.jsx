import React from 'react';
import styles from './HeaderList.module.css';

const HeaderList = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.income__title}>Income</h2>
      <h2 className={styles.expense__title}>Expense</h2>
    </div>
  );
};

export default HeaderList;
