import React, { useContext } from 'react'
import styles from './IncomeList.module.css'
import { GlobalContext } from '../../../context/GlobalState'

const IncomeList = ({ transaction: { text, amount, id } }) => {
  const { deleteIncome } = useContext(GlobalContext)

  return (
    <div>
      {amount > 0 && <ul className={styles.container}>
        <li>{text}</li>
        <div className='flexer'>
          <li>{amount}&nbsp;&nbsp;</li>
          <li>
            <button
              onClick={() => deleteIncome(id)}
              className={styles.item__delete__btn}
            >
              <i class='ion-ios-close-outline' />
            </button>
          </li>
        </div>
      </ul>}
    </div>
  )
}

export default IncomeList
