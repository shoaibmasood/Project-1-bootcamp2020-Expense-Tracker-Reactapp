import React from 'react'
import styles from './ExpenseList.module.css'
const ExpenseList = ({ transaction: { text, amount } }) => {
  return (
    <>
      {amount > 0 && <ul className={styles.container}>
        <li>{text}</li>
        <li>{amount}</li>
      </ul>}
    </>
  )
}

export default ExpenseList
