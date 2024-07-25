import styles from './TeamsHeader.module.css';
import NewTeam from '../NewTeam/NewTeam';
import { SearchIcon } from '../../../components/Icons/Icons';
import { usePopupStore } from '../../../store';

const TeamsHeader = () => {
  const { setPopUp } = usePopupStore();
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
            <SearchIcon fill="currentcolor" />
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
