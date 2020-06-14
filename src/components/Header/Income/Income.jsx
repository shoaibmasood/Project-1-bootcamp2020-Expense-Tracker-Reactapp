import React from 'react';
import styles from './Income.module.css';

const Income = () => {
  return (
    <div className={styles.budget__income}>
      <div className={styles.budget__income__text}>Income</div>
      <div className={styles.budget__income__value}>+ 4,300.00 {}</div>
      {/* <div className={styles.budget__income__percentage}>{}</div> */}
    </div>
  );
};

export default Income;
