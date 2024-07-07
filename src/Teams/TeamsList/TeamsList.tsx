// src/components/TeamsList.tsx

import styles from './TeamsList.module.css';
import TeamsItem from '../TeamsItem/TeamsItem';
import  teams  from '../../fakeData/TeamsData.json';

const TeamsList = () => {
  return (
    <table className={styles.teamsTable}>
      <thead className={styles.thead}>
        <tr className={styles.thead}>
          <th>Name</th>
          <th>Members</th>
          <th>Date of Creation</th>
          <th>Challenges</th>
          <th>Link</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team, index) => (
          <TeamsItem
            key={index}
            name={team.name}
            members={team.members}
            dateOfCreation={team.dateOfCreation}
            challenges={team.challenges}
            link={team.link}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TeamsList;
