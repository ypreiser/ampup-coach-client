// src/components/TeamsList.tsx

import styles from './UsersList.module.css';
import  teams  from '../../../fakeData/TeamsData.json';
import UsersItem from '../UsersItem/UsersItem';
import { ArrowDownIcon } from '../../../components/Icons/Icons';

const TeamsList = () => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.thead}>
          <th>Name</th>
          <th>Challenge</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Date Added <ArrowDownIcon fill={undefined} /></th>
          <th>Last Seen <ArrowDownIcon fill={undefined} /></th>
          <th>Overall Points <ArrowDownIcon fill={undefined} /></th>
        </tr>
      </thead>
      <tbody>
        {teams[0].members.map((user, index) => (
          <UsersItem
            key={index}
            user={user}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TeamsList;
