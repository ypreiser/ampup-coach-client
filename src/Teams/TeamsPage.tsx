// src/components/TeamsPage.tsx

import styles from './TeamsPage.module.css';
import TeamsHeader from './TeamsHeader/TeamsHeader';
import TeamsList from './TeamsList/TeamsList';

const TeamsPage = () => {
  return (
    <div className={styles.teamsContainer}>
      <TeamsHeader />
      <TeamsList />
    </div>
  );
};

export default TeamsPage;
