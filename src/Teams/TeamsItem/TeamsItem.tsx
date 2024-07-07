// src/components/TeamsItem.tsx

import React from 'react';
import styles from './TeamsItem.module.css';
import { DuplicateIcon, ParticipantsIcon, TrashIcon } from '../../assets/Icons'

interface TeamItemProps {
  name: string;
  members: number;
  dateOfCreation: string;
  challenges: number;
  link: string;
}

const TeamsItem: React.FC<TeamItemProps> = ({ name, members, dateOfCreation, challenges, link }) => {
  return (
    <tr className={styles.teamsItem}>
      <td>{name}</td>
      <td><ParticipantsIcon fill='currentcolor'/> {members} Members</td>
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
