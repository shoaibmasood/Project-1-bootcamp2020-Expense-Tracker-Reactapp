import React, { useState, useContext } from 'react';
import styles from './AddForm.module.css';
import { GlobalContext } from '../../../context/GlobalState';

const AddForm = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          className={styles.add__description}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add Description.."
        />
        <input
          className={styles.add__value}
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Add Amount.."
        />
        <button className={styles.add__btn}>
          <i className="ion-ios-checkmark-outline"></i>
        </button>
      </form>
    </>
  );
};

export default AddForm;
