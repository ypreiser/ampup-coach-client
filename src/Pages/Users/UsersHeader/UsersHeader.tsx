// src/Teams/TeamsHeader/TeamsHeader.tsx

import styles from './UsersHeader.module.css';
import { usePopupStore } from '../../../store';
import Button from '../../../components/Button/Button';
import { SearchIcon } from '../../../components/Icons/Icons';
import AddUser from '../AddUser/AddUser';

const UsersHeader = () => {
  const { setPopUp } = usePopupStore();
  const handleAddUser = () => {
    console.log('add user');
    
    setPopUp({ title: 'Add User', component: <AddUser /> });
  };

  return (
    <div className={styles.header}>
      <h1>Users</h1>
      <div className={styles.searchCreateContainer}>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search" />
          <div className={styles.searchIcon}>
          <SearchIcon fill='currentcolor' />
          </div>
        </div>
        <Button className={styles.createButton} onClick={handleAddUser} type={'button'}>
          Add User
        </Button>
      </div>
    </div>
  );
};

export default UsersHeader;
