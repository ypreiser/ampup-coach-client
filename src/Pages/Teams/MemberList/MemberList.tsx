// src/components/MembersList.tsx

import React from 'react';
import styles from './MemberList.module.css';
import { HeartIcon } from '../../../components/Icons/Icons';

interface IMember {
  name: string;
  email: string;
  image: string;
  heart: string;
}

interface MembersListProps {
  members: IMember[];
}

const MembersList: React.FC<MembersListProps> = ({ members }) => {
  return (
    <div className={styles.membersList}>
      {members.map((member, index) => (
        <div className={styles.memberItem} key={index}>
          <img
            src={member.image}
            alt={member.name}
            className={styles.memberImage}
          />
          <div className={styles.memberDetails}>
            <div className={styles.memberName}>
              {member.name}{' '}
              <span className={styles.icon}>
                <HeartIcon
                  fill={member.heart == '❤️' ? 'var(--red)' : 'var(--yellow)'}
                />
              </span>
            </div>
            <div className={styles.memberEmail}>{member.email}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MembersList;
