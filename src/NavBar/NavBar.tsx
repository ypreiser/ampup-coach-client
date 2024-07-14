import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  AmpUpIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowUpIcon,
  DecksIcon,
  ChallengesIcon,
  TeamsIcon,
  HelpIcon,
  StoresIcon // Assuming you have this icon as well
} from '../components/Icons/Icons';

import styles from './NavBar.module.css';

import UserProfile from './UserProfile/UserProfile';
const active = "#ffd05b";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleMenuToggle = (menu: string) => {
    setOpenMenu(openMenu === menu ? '' : menu);
  };

  return (
    <nav className={`${styles.navbar} ${isOpen ? styles.open : styles.closed}`}>
      <div className={styles.headAndList}>

        <div className={styles.navHeader}>
          <AmpUpIcon fill='currentcolor' />
          {isOpen && <h1>AmpUp</h1>}
          {/* todo: fix toggle button css and icon*/}
          <div className={styles.toggleButton} onClick={handleToggle}>
            {isOpen ? <ArrowLeftIcon fill={active} /> : <ArrowRightIcon fill={active} />}
          </div>
        </div>
        <ul className={styles.navList}>
          <li>
            <NavLink
              onClick={() => handleMenuToggle('challenges')}
              to="/challenges"
              className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}
            >

              <>
                <ChallengesIcon fill="currentcolor" />
                {isOpen && <span>Challenges</span>}
                {isOpen && (
                  <span className={styles.arrow}>
                    {openMenu === 'challenges' ? <ArrowUpIcon fill='currentcolor' /> : <ArrowDownIcon fill='currentcolor' />}
                  </span>
                )}
              </>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/teams"
              className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}
              onClick={() => handleMenuToggle('teams')}
            >
              <TeamsIcon fill='currentcolor' />
              {isOpen && <span>Teams</span>}
              {isOpen && (
                <span className={styles.arrow}>
                  {openMenu === 'teams' ? <ArrowUpIcon fill='currentcolor' /> : <ArrowDownIcon fill='currentcolor' />}
                </span>
              )}
            </NavLink>
            {openMenu === 'teams' && isOpen && (
              <ul className={styles.subMenu}>
                <li>
                  <NavLink
                    to="/users"
                    className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}
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
              className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}
              onClick={() => handleMenuToggle('decks')}
            >
              <DecksIcon fill='currentcolor' />
              {isOpen && <span>Decks</span>}
              {isOpen && (
                <span className={styles.arrow}>
                  {openMenu === 'decks' ? <ArrowUpIcon fill='currentcolor' /> : <ArrowDownIcon fill='currentcolor' />}
                </span>
              )}
            </NavLink>
            {openMenu === 'decks' && isOpen && (
              <ul className={styles.subMenu}>
                <li>
                  <NavLink
                    to="/decksCatalog"
                    className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}
                  >
                    <span>Deck Catalog</span>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink
              onClick={() => handleMenuToggle('stores')}
              to="/stores"
              className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}
            >
              <StoresIcon fill='currentcolor' />
              {isOpen && <span>Stores</span>}
              {isOpen && (
                <span className={styles.arrow}>
                  {openMenu === 'stores' ? <ArrowUpIcon fill='currentcolor' /> : <ArrowDownIcon fill='currentcolor' />}
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={isOpen ? styles.navFooterOpen : styles.navFooterClosed}>
        <NavLink
          to="/help"
          className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}
        >
          <HelpIcon fill='currentColor' />
          {isOpen && <span>Help</span>}
        </NavLink>
        <UserProfile isOpen={isOpen} />
      </div>
    </nav>
  );
};

export default NavBar;
