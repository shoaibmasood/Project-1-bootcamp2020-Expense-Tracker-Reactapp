import React from 'react';
import Header from './components/Header/Header';
import AddInput from './components/AddInput/AddInput';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <AddInput />
    </div>
  );
}

export default App;
