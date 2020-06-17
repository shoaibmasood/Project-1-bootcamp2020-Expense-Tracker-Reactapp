import React, { useContext } from 'react';
import styles from './ExpenseList.module.css';
import { GlobalContext } from '../../../context/GlobalState';

const ExpenseList = ({ transaction: { text, amount, id } }) => {
  const { deleteExpense } = useContext(GlobalContext);

  return (
    <>
      {amount < 0 && (
        <ul className={styles.container}>
          <li>{text}</li>
          <div className="flexer">
            <li>{amount}&nbsp;&nbsp;</li>
            <li>
              <button
                onClick={() => deleteExpense(id)}
                className={styles.item__delete__btn}
              >
                <i class="ion-ios-close-outline" />
              </button>
            </li>
          </div>
        </ul>
      )}
    </>
  );
};

export default ExpenseList;
