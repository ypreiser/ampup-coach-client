import React from 'react';
import ChallengeItem from '../ChallengeItem/ChallengeItem';
import challengesData from '../../../fakeData/challengesData.json';
import styles from './ChallengeList.module.css';

const ChallengeList: React.FC = () => {
  return (
    <div className={styles.challengeList}>
      {challengesData.map(challenge => (
        <ChallengeItem key={challenge.id} challenge={challenge} />
      ))}
    </div>
  );
};

export default ChallengeList;
