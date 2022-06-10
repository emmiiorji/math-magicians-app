import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <nav>
    <ul className={styles.navs}>
      <li>
        <NavLink
          to="/"
          className={(navLink) => (navLink.isActive ? 'active' : 'none')}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/calculator"
          className={(navLink) => (navLink.isActive ? 'active' : 'none')}
        >
          Calculator
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/quotes"
          className={(navLink) => (navLink.isActive ? 'active' : 'none')}
        >
          Quotes
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
