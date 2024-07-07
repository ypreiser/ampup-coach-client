import React, { useState } from 'react';
import styles from './ChallengeItem.module.css';

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
      <div className={styles.header} onClick={handleToggle}>
        <h2>{challenge.title}</h2>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className={styles.details}>
          <p>Participants: {challenge.participants}</p>
          <p>Duration: {challenge.duration}</p>
          {/* Map the challenges array to display individual challenges */}
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
