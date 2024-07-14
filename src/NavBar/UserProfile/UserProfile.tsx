import React from 'react';
import styles from './UserProfile.module.css';
import { useUserStore } from '../../store';

interface UserProfileProps {
  isOpen: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({ isOpen }) => {
  const { user } = useUserStore();
  console.log('profile:', user);
  
  if (!user) return <></>;
  
  const { fullName, email, picture } = user;

  return (
    <>
      <hr className={isOpen ? styles.hrOpen : styles.hr} />
      <div className={styles.userProfile}>
        <img src={picture} alt={fullName} className={styles.userImage} />
        {isOpen && (
          <div className={isOpen ? styles.userInfoOpen : styles.userInfo}>
            <span className={styles.userName}>{fullName}</span>
            <span className={styles.userEmail}>{email}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default UserProfile;
