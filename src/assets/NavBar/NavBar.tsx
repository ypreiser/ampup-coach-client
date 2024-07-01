import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navHeader}>
        <button className={styles.backButton}>
          ←
        </button>
        <h1>AmpUp</h1>
      </div>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/challenges"
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ''}`
            }
          >
            <span className={styles.navIcon}>🏆</span>
            Challenges
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/teams"
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ''}`
            }
          >
            <span className={styles.navIcon}>👥</span>
            Teams
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/decks"
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ''}`
            }
          >
            <span className={styles.navIcon}>🃏</span>
            Decks
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/stores"
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ''}`
            }
          >
            <span className={styles.navIcon}>🏪</span>
            Stores
          </NavLink>
        </li>
      </ul>
      <div className={styles.navFooter}>
        <NavLink
          to="/help"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ''}`
          }
        >
          <span className={styles.navIcon}>❓</span>
          Help
        </NavLink>
        <div className={styles.userProfile}>
          {/* Add user profile image here */}
          <span>Julia Tsyhanenko</span>
          <span className={styles.userEmail}>yulia.tsyhanenko@gmail.com</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
