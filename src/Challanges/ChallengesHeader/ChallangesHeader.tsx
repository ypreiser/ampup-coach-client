import React from 'react';
import styles from './ChallangesHeader.module.css';

const ChallengesHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Challenges</h1>
      <button className={styles.createButton}>Create Challenge</button>
    </header>
  );
};

export default ChallengesHeader;
