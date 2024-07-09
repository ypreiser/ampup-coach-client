import React from 'react';
import styles from './StoreItem.module.css';

interface StoreItemProps {
  store: {
    name: string;
    date: string;
    challenges: string;
  };
}

const StoreItem: React.FC<StoreItemProps> = ({ store }) => {
  const { name, date, challenges } = store;
  return (
    <tr className={styles.storeItem}>
      <td>{name}</td>
      <td>{date}</td>
      <td>{challenges}</td>
      <td className={styles.actions}>
        <button className={styles.duplicateButton}>
          <span>+</span> Duplicate
        </button>
        <button className={styles.deleteButton}>🗑️</button>
      </td>
    </tr>
  );
};

export default StoreItem;
