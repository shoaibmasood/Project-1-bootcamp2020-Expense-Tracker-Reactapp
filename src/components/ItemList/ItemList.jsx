import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import ExpenseList from './ExpenseList/ExpenseList'
import IncomeList from './IncomeList/IncomeList'

const ItemList = () => {
  const { transactions } = useContext(GlobalContext)

  return (
    <div className='flexer' style={{ justifyContent: 'space-around' }}>
      <div style={{ flex: 1 }}>
        {transactions.map((transaction) => (
          <IncomeList key={transaction.id} transaction={transaction} />
        ))}
      </div>
      <div style={{ flex: 1 }}>
        {transactions.map((transaction) => (
          <ExpenseList key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  )
}

export default ItemList
