// src/components/TeamsItem.tsx

import React, { useContext } from 'react';
import styles from './TeamsItem.module.css';
import { DuplicateIcon, ParticipantsIcon, TrashIcon } from '../../../components/Icons/Icons'
import DataContext from '../../../context/DataContext';
import MembersList from '../MemberList/MemberList';

interface TeamItemProps {
  team: Team;
}
interface Team {
  id: string;
  name: string;
  members: any[];
  dateOfCreation: string;
  challenges: number;
  link: string;
}

const TeamsItem: React.FC<TeamItemProps> = ({team}) => {
  const { name, members, dateOfCreation, challenges, link } = team;
  const { setPopUp } = useContext(DataContext);

  const handleMembersClick = () => {
    console.log("handleMembersClick");
    
    setPopUp({
      title: 'Members',
      component: (
        <MembersList members={members} />
      ),
    });
  };


  return (
    <tr className={styles.teamsItem}>
      <td>{name}</td>
      <td onClick={handleMembersClick} className={styles.members}><ParticipantsIcon fill='currentcolor'/> {members.length} Members</td>
      <td>{dateOfCreation}</td>
      <td>{challenges} Challenges</td>
      <td><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></td>
      <td>
        <button className={styles.duplicateButton}><DuplicateIcon  fill = "currentcolor"/> Duplicate</button>
        <button className={styles.deleteButton}><TrashIcon  fill = "currentcolor" /></button>
      </td>
    </tr>
  );
};

export default TeamsItem;
