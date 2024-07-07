import React from 'react';
import ChallengesHeader from './ChallengesHeader/ChallangesHeader';
import ChallengeList from './ChallengeList/ChallengeList';
import styles from './ChallengesPage.module.css';

 const ChallengesPage: React.FC = ()=> {
  return (
    <div className={styles.challenges}>
      <ChallengesHeader />
      <ChallengeList />
    </div>
  );
};

export default ChallengesPage;