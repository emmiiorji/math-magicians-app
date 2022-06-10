import React from 'react';
import Header from '../Header';
import Calculator from '../Calculator';
import styles from '../../styles/CalculatorPage.module.css';

const CalculatorPage = () => (
  <main>
    <Header />
    <section className={styles.calcContainer}>
      <div className={styles.wrapper}>
        <h2>Can we do some math?</h2>
        <Calculator id="calculator" />
      </div>
    </section>
  </main>
);

export default CalculatorPage;
