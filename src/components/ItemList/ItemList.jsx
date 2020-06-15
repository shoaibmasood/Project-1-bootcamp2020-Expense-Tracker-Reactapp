import React, { useContext } from 'react';
import styles from './ItemList.module.css';
import IncomeList from './IncomeList/IncomeList';
import ExpenseList from './ExpenseList/ExpenseList';
import { GlobalContext } from '../../context/GlobalState';

const ItemList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div style={{ display: 'flex' }}>
      {transactions.map((transaction) => (
        <div className={styles.income__container}>
          <IncomeList key={transaction.id} transaction={transaction} />
        </div>
      ))}
      {transactions.map((transaction) => (
        <div className={styles.expense__container}>
          <ExpenseList key={transaction.id} transaction={transaction} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
