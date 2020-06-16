import React from 'react';
import styles from './Income.module.css';

const Income = ({ income }) => {
  return (
    <div className={styles.budget__income}>
      <div className={styles.budget__income__text}>Income</div>
      <div className={styles.budget__income__value}>$ {income}</div>
    </div>
  );
};

export default Income;
