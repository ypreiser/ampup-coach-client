// src/Teams/TeamsHeader/TeamsHeader.tsx

import styles from './TeamsHeader.module.css';
import { ReactNode, useContext } from 'react';
import DataContext from '../../context/DataContext';
import NewTeam from '../NewTeam/NewTeam';
import { SearchIcon } from '../../components/Icons/Icons';

const TeamsHeader = () => {
  const { setPopUp } = useContext(DataContext) as {
    setPopUp: (content: { title: string, component: ReactNode } | null) => void;
  };

  const handleCreateTeamClick = () => {
    setPopUp({ title: 'New Team', component: <NewTeam /> });
  };

  return (
    <div className={styles.header}>
      <h1>Teams</h1>
      <div className={styles.searchCreateContainer}>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search" />
          <div className={styles.searchIcon}>
          <SearchIcon fill='currentcolor' />
          </div>
        </div>
        <button className={styles.createButton} onClick={handleCreateTeamClick}>
          Create Team
        </button>
      </div>
    </div>
  );
};

export default TeamsHeader;
