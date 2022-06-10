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
            Many who have had an opportunity of knowing any more about mathematics confuse it
            with arithmetic, and consider it an arid science. In reality, however, it is a science
            which requires a great amount of imagination.
          </span>
          <p className={styles.authorName}>— Sofia Kovalevskaya</p>
        </p>
      </div>
    </section>
  </>
);

export default QuotesPage;
