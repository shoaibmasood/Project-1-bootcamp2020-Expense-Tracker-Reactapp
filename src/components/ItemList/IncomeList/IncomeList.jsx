import React, { useContext } from 'react';
import styles from './IncomeList.module.css';
import { GlobalContext } from '../../../context/GlobalState';

const IncomeList = ({ transaction: { text, amount, id } }) => {
  const { deleteIncome } = useContext(GlobalContext);

  if (amount > 0) {
    return (
      <>
        <ul className={styles.container}>
          <li>{text}</li>
          <li>{amount}</li>
          <li>
            <button
              onClick={() => deleteIncome(id)}
              className={styles.item__delete__btn}
            >
              <i class="ion-ios-close-outline"></i>
            </button>
          </li>
        </ul>
      </>
    );
  } else {
    return null;
  }
};

export default IncomeList;
