import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {  FaQuestionCircle } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import styles from './NavBar.module.css';
import decks from '../assets/decks.svg'
import ampup from '../assets/ampup.svg'
import challenges from '../assets/challenges.svg'
import teams from '../assets/teams.svg'
import stores from '../assets/stores.svg'

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState('');

  const handleToggle = (menu: string) => {
    setOpenMenu(openMenu === menu ? '' : menu);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navHeader}>
        <img src={ampup} alt="" className={styles.backIcon} />
        <h1>AmpUp</h1>
      </div>
      <ul className={styles.navList}>
        <li>
          <NavLink
            onClick={() => handleToggle('challenges')}
            to="/challenges"
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ''}`
            }
          >
            <img src={challenges} alt="" />
            <span>Challenges</span>
            <span className={styles.arrow}>
              {openMenu === 'challenges' ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/teams"
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ''}`
            }
            onClick={() => handleToggle('teams')}
          >
            <img src={teams} alt="" />
            <span>Teams</span>
            <span className={styles.arrow}>
              {openMenu === 'teams' ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </NavLink>
          {openMenu === 'teams' && (
            <ul className={styles.subMenu}>
              <li>
                <NavLink
                  to="/users"
                  className={({ isActive }) =>
                    `${styles.navItem} ${isActive ? styles.active : ''}`
                  }
                >
                  <span>Users</span>
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink
            to="/decks"
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ''}`
            }
            onClick={() => handleToggle('decks')}
          >
            <img src={decks} alt="" className={styles.navIcon} />
            <span>Decks</span>
            <span className={styles.arrow}>
              {openMenu === 'decks' ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </NavLink>
          {openMenu === 'decks' && (
            <ul className={styles.subMenu}>
              <li>
                <NavLink
                  to="/decksCatalog"
                  className={({ isActive }) =>
                    `${styles.navItem} ${isActive ? styles.active : ''}`
                  }
                >
                  <span>Deck Catalog</span>
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink
            onClick={() => handleToggle('stores')}
            to="/stores"
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ''}`
            }
          >
            <img src={stores} alt="" />
            <span>Stores</span>
            <span className={styles.arrow}>
              {openMenu === 'stores' ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
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
          <FaQuestionCircle className={styles.navIcon} />
          Help
        </NavLink>
        <div className={styles.userProfile}>
          <span>Julia Tsyhanenko</span>
          <span className={styles.userEmail}>yulia.tsyhanenko@gmail.com</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
