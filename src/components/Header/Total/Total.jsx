import React from 'react';
import styles from './Total.module.css';

const Total = ({ total }) => {
  return <div className={styles.budget__value}>${total}</div>;
};

export default Total;
