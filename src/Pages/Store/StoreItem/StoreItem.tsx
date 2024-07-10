import React from 'react';
import styles from './StoreItem.module.css';
import { DuplicateIcon, TrashIcon } from '../../../components/Icons/Icons';
import { NavLink } from 'react-router-dom';

interface StoreItemProps {
  store: {
    id: number;
    name: string;
    date: string;
    challenges: string[];
    products: any[];
  };
}

const StoreItem: React.FC<StoreItemProps> = ({ store }) => {
  const { id, name, date, challenges } = store;

  return (
    <NavLink to={`/stores/${id}`} className={styles.storeItemLink}>
      <tr className={styles.storeItem}>
        <td>{name}</td>
        <td>{date}</td>
        <td>{challenges.length == 1 ? challenges[0]
          : challenges.length > 1 ? `${challenges[0]} and ${challenges.length - 1} more`
            : "No challenges"}
        </td>
        <td className={styles.actions}>
          <button className={styles.duplicateButton}>
            <DuplicateIcon fill="currentcolor" /> Duplicate
          </button>
          <button className={styles.deleteButton}>
            <TrashIcon fill="currentcolor" />
          </button>
        </td>
      </tr>
    </NavLink>
  );
};

export default StoreItem;
