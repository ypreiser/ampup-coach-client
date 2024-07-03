import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowUp, ArrowDown, ArrowLeft, Decks, AmpUp, Challenges, Teams, Stores, Help } from '../assets/Icons';

import styles from './NavBar.module.css';

import UserProfile from './UserProfile/UserProfile';

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuToggle = (menu: string) => {
    setOpenMenu(openMenu === menu ? '' : menu);
  };

  return (
    <nav className={`${styles.navbar} ${isOpen ? styles.open : styles.closed}`} onClick={!isOpen ? handleToggle : undefined}>
      <div className={styles.navHeader}>
        {isOpen && (
          <>
            <AmpUp />
            <h1>AmpUp</h1>
          </>
        )}
        {isOpen && (
          <div className={styles.toggleButton} onClick={handleToggle}>
            <ArrowLeft />
          </div>
        )}
      </div>
      <ul className={styles.navList}>
        <li>
          <NavLink
            onClick={() => handleMenuToggle('challenges')}
            to="/challenges"
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ''}`
            }
          >
            {({ isActive }) => (
              <>
                <Challenges color={isActive ? 'currentColor' : undefined} />
                {isOpen && <span>Challenges</span>}
                {isOpen && (
                  <span className={styles.arrow}>
                    {openMenu === 'challenges' ? <ArrowUp /> : <ArrowDown />}
                  </span>
                )}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/teams"
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ''}`
            }
            onClick={() => handleMenuToggle('teams')}
          >
            {({ isActive }) => (
              <>
                <Teams color={isActive ? 'currentColor' : undefined} />
                {isOpen && <span>Teams</span>}
                {isOpen && (
                  <span className={styles.arrow}>
                    {openMenu === 'teams' ? <ArrowUp /> : <ArrowDown />}
                  </span>
                )}
              </>
            )}
          </NavLink>
          {openMenu === 'teams' && isOpen && (
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
            onClick={() => handleMenuToggle('decks')}
          >
            {({ isActive }) => (
              <>
                <Decks color={isActive ? 'currentColor' : undefined} />
                {isOpen && <span>Decks</span>}
                {isOpen && (
                  <span className={styles.arrow}>
                    {openMenu === 'decks' ? <ArrowUp /> : <ArrowDown />}
                  </span>
                )}
              </>
            )}
          </NavLink>
          {openMenu === 'decks' && isOpen && (
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
            onClick={() => handleMenuToggle('stores')}
            to="/stores"
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ''}`
            }
          >
            {({ isActive }) => (
              <>
                <Stores color={isActive ? 'currentColor' : undefined} />
                {isOpen && <span>Stores</span>}
                {isOpen && (
                  <span className={styles.arrow}>
                    {openMenu === 'stores' ? <ArrowUp /> : <ArrowDown />}
                  </span>
                )}
              </>
            )}
          </NavLink>
        </li>
      </ul>
      <div className={isOpen ? styles.navFooterOpen : styles.navFooterClosed}>
        <NavLink
          to="/help"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ''}`
          }
        >
          {({ isActive }) => (
            <>
              <Help />
              {isOpen && <span>Help</span>}
            </>
          )}
        </NavLink>
        <UserProfile isOpen={isOpen} />
      </div>
    </nav>
  );
};

export default NavBar;
