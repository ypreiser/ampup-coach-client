// src\Pages\Challanges\ChallengeList\ChallengeList.tsx
import React from 'react';
import ChallengeItem from '../ChallengeItem/ChallengeItem';
import styles from './ChallengeList.module.css';
import { useUserStore } from '../../../store';

const ChallengeList: React.FC = () => {
  const { user } = useUserStore();
  const challengesData = user?.myChallenges;
  console.log(challengesData);

  // let challenges = user?.myChallenges
  // console.log(challenges);
  // react.useEffect(() => {
  //   if (user) {
  //     apiRequest({ method: 'GET', path: `/challenges` });
  //     console.log({user});
  //   }
  // }, []);

  return (
    <div className={styles.challengeList}>
      {!challengesData ? (
        <h1>no challenges</h1>
      ) : (
        challengesData.map((challenge) => (
          <ChallengeItem key={challenge.id} challenge={challenge} />
        ))
      )}
    </div>
  );
};

export default ChallengeList;
