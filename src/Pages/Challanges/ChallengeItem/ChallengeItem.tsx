import React, { useState } from 'react';
import styles from './ChallengeItem.module.css';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  MailIcon,
  ParticipantsIcon,
} from '../../../components/Icons/Icons';

interface IChallenge {
  title: string;
  participants: number;
  status: string;
  duration: string;
}
interface ChallengeItemProps {
  challenge: IChallenge;
}

const ChallengeItem: React.FC<ChallengeItemProps> = ({ challenge }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.challengeItem}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.icon} onClick={handleToggle}>
            {!isOpen ? (
              <ArrowDownIcon fill="currentcolor" />
            ) : (
              <ArrowUpIcon fill="currentcolor" />
            )}
          </div>
          <h2>{challenge.title}</h2>
          <div>
            <ParticipantsIcon fill="currentcolor" />
            <span className={styles.participants}>
              {`${challenge.participants} Participants`}
            </span>
          </div>
        </div>
        <div className={styles.right}>
          <div className={`${styles.status} ${styles[challenge.status]}`}></div>
          <div className={styles[challenge.status]}>{challenge.duration}</div>
          {/* todo: mail */}
          <button className={styles.mail}>
            <MailIcon fill="currentcolor" />
          </button>
        </div>
      </div>
      {/* todo: fix details */}
      {isOpen && <div className={styles.details}>details</div>}
    </div>
  );
};

export default ChallengeItem;
