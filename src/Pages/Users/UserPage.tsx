// src/components/TeamsPage.tsx

import styles from './UsersPage.module.css';
import UsersHeader from './UsersHeader/UsersHeader';
import UsersList from './UsersList/UsersList';

const TeamsPage = () => {
  return (
    <div className={styles.usersContainer}>
      <UsersHeader />
      <UsersList />
    </div>
  );
};

export default TeamsPage;
