import React from 'react';
import Header from '../Header';
import styles from '../../styles/QuotesPage.module.css';

const QuotesPage = () => (
  <>
    <Header />
    <section>
      <div className={styles.quotesContainer}>
        <p className={styles.quote}>
          <span className={styles.quoteText}>
            Mathematics is about understanding rather than numbers,
            equations, computations, or methods.
          </span>
          <p className={styles.authorName}>- William Paul Thurston</p>
        </p>
      </div>
    </section>
  </>
);

export default QuotesPage;
