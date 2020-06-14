import React from 'react';
import styles from './AddInput.module.css';
import AddForm from './AddForm/AddForm';

const AddInput = () => {
  return (
    <div className={styles.add}>
      <div className={styles.add__container}>
        <AddForm />
      </div>
    </div>
  );
};

export default AddInput;
