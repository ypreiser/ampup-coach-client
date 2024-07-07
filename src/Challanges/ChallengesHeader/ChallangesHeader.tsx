import React from 'react';
import styles from './ChallangesHeader.module.css';
import { ArrowDownIcon } from '../../assets/Icons';

const ChallengesHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Challenges</h1>
      <div className={styles.filterAndCreate}>

        {/* todo filter by dropdown */}

        <div className={styles.filter}>
          <span>🔽 filter by: </span>
          <div className={styles.icon}>
            <ArrowDownIcon fill='currentcolor' />
          </div>
        </div>
        <button className={styles.createButton}>Create Challenge</button>
      </div>
    </header>
  );
};

export default ChallengesHeader;
