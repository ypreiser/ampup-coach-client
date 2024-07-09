import React from 'react';
import styles from './StoreItem.module.css';
import { DuplicateIcon, TrashIcon } from '../../../components/Icons/Icons';

interface StoreItemProps {
  store: {
    id: number;
    name: string;
    date: string;
    challenges: string;
  };
}

const StoreItem: React.FC<StoreItemProps> = ({ store }) => {
  const { name, date, challenges } = store;
  return (
    // todo: turn in to navlink
    <tr className={styles.storeItem}>
      <td>{name}</td>
      <td>{date}</td>
      <td>{challenges}</td>
      <td className={styles.actions}>
        <button className={styles.duplicateButton}><DuplicateIcon fill="currentcolor" /> Duplicate</button>
        <button className={styles.deleteButton}><TrashIcon fill="currentcolor" /></button>
      </td>
    </tr>
  );
};

export default StoreItem;
