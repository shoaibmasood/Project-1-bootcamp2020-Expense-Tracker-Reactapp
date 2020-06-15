import React from 'react';
import Header from './components/Header/Header';
import AddInput from './components/AddInput/AddInput';
import ItemList from './components/ItemList/ItemList';
import HeaderList from './components/ItemList/HeaderList/HeaderList';

import styles from './App.module.css';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider className={styles.container}>
      <Header />
      <AddInput />
      <HeaderList />
      <ItemList />
    </GlobalProvider>
  );
}

export default App;
