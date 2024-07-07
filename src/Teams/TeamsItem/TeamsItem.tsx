// src/components/TeamsItem.tsx

import React, { useContext } from 'react';
import styles from './TeamsItem.module.css';
import { DuplicateIcon, ParticipantsIcon, TrashIcon } from '../../components/Icons/Icons'
import DataContext from '../../context/DataContext';

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
        <div className={styles.membersList}>
          {team.members.map((member, index) => (
            <div key={index} className={styles.member}>
              <img src={member.icon} alt={member.name} className={styles.memberIcon} />
              <div>
                <h4>{member.name}</h4>
                <p>{member.email}</p>
              </div>
              <span>{member.heart}</span>
            </div>
          ))}
        </div>
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
