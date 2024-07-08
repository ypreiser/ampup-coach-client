// src/Teams/TeamsHeader/TeamsHeader.tsx

import styles from './TeamsHeader.module.css';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { ReactNode, useContext } from 'react';
import DataContext from '../../context/DataContext';
import NewTeam from '../../components/NewTeam/NewTeam';

const TeamsHeader = () => {
  const { setPopUp } = useContext(DataContext) as {
    setPopUp: (content: { title: string, component: ReactNode } | null) => void;
  };

  const handleCreateTeamClick = () => {
    setPopUp({ title: 'Create New Team', component: <NewTeam /> });
  };

  return (
    <div className={styles.header}>
      <h1>Teams</h1>
      <div className={styles.searchCreateContainer}>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search" />
          <FaSearch />
        </div>
        <button className={styles.createButton} onClick={handleCreateTeamClick}>
          <FaPlus /> Create Team
        </button>
      </div>
    </div>
  );
};

export default TeamsHeader;
