import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State

const initialState = {
  transactions: [],
};

//Create Context

export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions thats make call to reducer
  function deleteIncome(id) {
    dispatch({
      type: 'DELETE_INCOME',
      payload: id,
    });
  }

  function deleteExpense(id) {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteIncome,
        deleteExpense,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
