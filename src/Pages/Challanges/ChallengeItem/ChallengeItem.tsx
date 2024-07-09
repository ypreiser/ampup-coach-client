import React, { useState } from 'react';
import styles from './ChallengeItem.module.css';
import { ArrowDownIcon, ArrowUpIcon, MailIcon, ParticipantsIcon } from '../../../components/Icons/Icons';

interface ChallengeItemProps {
  challenge: any;
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
          <div className={styles.icon} onClick={handleToggle}>{!isOpen ? <ArrowDownIcon fill="currentcolor" /> : <ArrowUpIcon fill="currentcolor" />
          }</div>
          <h2>{challenge.title}</h2>
          <div>
            <ParticipantsIcon fill='currentcolor' />
            <span className={styles.participants}>
              {`${challenge.participants} Participants`}
            </span>
          </div>
        </div>
        <div className={styles.right}>
          <div className={`${styles.status} ${styles[challenge.status]}`}></div>
          <div className={styles[challenge.status]}>{challenge.duration}</div>
          <button className={styles.mail}><MailIcon fill='currentcolor' /></button>
        </div>
      </div>

      {isOpen && (
        <div className={styles.details}>
          {challenge.challenges.map((c: any) => (
            <div key={c.id} className={styles.challenge}>
              <h3>{c.type}</h3>
              <p>{c.description}</p>
              <p>Commitments: {c.commitments}</p>
              <p>Support: {c.support}</p>
              <div className={styles.content}>
                {c.content.map((contentItem: any, index: number) => (
                  <div key={index} className={styles.contentItem}>
                    <p>{contentItem.type}</p>
                    <p>Status: {contentItem.status}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChallengeItem;
