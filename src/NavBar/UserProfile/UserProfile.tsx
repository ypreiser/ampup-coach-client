import React from 'react';
import styles from './UserProfile.module.css';
import userData from '../../fakeData/userData.json';

interface UserProfileProps {
  isOpen: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({ isOpen }) => {
  const { name, email, avatar } = userData;
  return (
    <>
      <hr className={isOpen ? styles.hrOpen : styles.hr} />
      <div className={styles.userProfile}>
        <img src={avatar} alt={name} className={styles.userImage} />
        {isOpen && (
          <div className={isOpen? styles.userInfoOpen: styles.userInfo}>
            <span className={styles.userName}>{name}</span>
            <span className={styles.userEmail}>{email}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default UserProfile;
