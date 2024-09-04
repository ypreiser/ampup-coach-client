// src\Pages\Store\StoreItem\StoreItem.tsx
import React from 'react';
import styles from './StoreItem.module.css';
import { DuplicateIcon, TrashIcon } from '../../../components/Icons/Icons';
import { NavLink } from 'react-router-dom';

interface StoreItemProps {
  store: {
    _id: number;
    storeName: string;
    dateCreated: Date;
    // challenges: string[];
    prizes: any[];
  };
}

const StoreItem: React.FC<StoreItemProps> = ({ store }) => {
  const { _id, storeName, dateCreated = new Date() } = store;

  return (
    <NavLink to={`/stores/${_id}`} className={styles.storeItemLink}>
      <tr className={styles.storeItem}>
        <td>{storeName}</td>
        <td>{dateCreated.toLocaleDateString()}</td>
        <td>
          {/* {challenges.length == 1
            ? challenges[0]
            : challenges.length > 1
              ? `${challenges[0]} and ${challenges.length - 1} more`
              : */}
          'No challenges'
          {/* } */}
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
