import React, { useState } from 'react';
import styles from './AddForm.module.css';

const AddForm = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [sign, setSign] = useState('+');

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <select
          className={styles.add__type}
          defaultValue={sign}
          onChange={(e) => setSign(e.target.value)}
        >
          <option value="+">+</option>
          <option value="-">-</option>
        </select>
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
