import React from 'react';
import Header from '../Header';
import Calculator from '../Calculator';
import styles from '../../styles/CalculatorPage.module.css';

const CalculatorPage = () => (
  <main>
    <Header />
    <section className={styles.calcContainer}>
      <h2>Can we do some math?</h2>
      <Calculator id="calculato" />
      {/* <div className={styles.wrapper}>
      </div> */}
    </section>
  </main>
);

export default CalculatorPage;
