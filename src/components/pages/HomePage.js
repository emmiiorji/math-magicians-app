import React from 'react';
import Header from '../Header';
import styles from '../../styles/HomePage.module.css';

const HomePage = () => (
  <>
    <Header />
    <section className={styles.home}>
      <div className={styles.quotesContainer}>
        <h2>Welcome to Math Magicians&#39; Page</h2>
        <p>
          The science of mathematics is concerned with the logic of shape, quantity, and order.
          Math is present in every aspect of our lives. Everything in our everyday
          life is built on it, including mobile devices, computers, software, ancient
          and modern architecture, art, money, engineering, and even sports.
        </p>
        <p className={styles.quote2}>
          The world would not move an inch if it weren&#39;t for it.
          It&#39;s the cradle of many things. Everyone requires mathematics in their
          day-to-day lives, whether they are a cook or a farmer, a carpenter or a
          mechanic, a shopkeeper or a doctor, an engineer or a scientist, a musician or a magician.
        </p>
      </div>
    </section>
  </>
);

export default HomePage;
