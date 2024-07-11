// src/components/TeamsItem.tsx

import styles from './UsersItem.module.css';
import { HeartIcon, PointsIcon } from '../../../components/Icons/Icons'
import ChallengeList from '../../Challanges/ChallengeList/ChallengeList';
import { usePopupStore } from '../../../store';
interface UserItemProps {
  user: User;
}
interface User {
  name: string;
  email: string;
  image: string;
  heart: string;
}

const UsersItem: React.FC<UserItemProps> = ({ user }) => {
  const { name, email, image, heart } = user;
  const { setPopUp } = usePopupStore();

  function handleChallanges(){
    console.log('challanges')
        setPopUp({ title: 'Challanges', component: <ChallengeList /> });
  }

  return (
    <tr className={styles.teamsItem}>
      <td><img className={styles.memberImage} src={image} alt={name} /><HeartIcon fill={heart == "❤️" ? 'var(--red)' : 'var(--yellow)'} />{name}</td>
      <td onClick={handleChallanges}>Challenge</td>
      <td>{email}</td>
      <td>Phone</td>
      <td>Add Date</td>
      <td>Last seen</td>
      <td>Overall Points <PointsIcon fill={undefined} /></td>

    </tr>
  );
};

export default UsersItem;
