// src\Pages\Store\StoreList\StoreList.tsx
import StoreItem from '../StoreItem/StoreItem';
import styles from './StoreList.module.css';
import { useEffect, useState } from 'react';
import { apiRequest } from '../../../api/apiRequest';

const StoreList = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    apiRequest({ method: 'GET', path: `/store` })
      .then((data) => {
        console.log('stores: ', data);
        setStores(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th>Name</th>
          <th>Date of creation</th>
          <th>Challenges</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {stores.map((store, index) => (
          <StoreItem key={index} store={store} />
        ))}
      </tbody>
    </table>
  );
};

export default StoreList;
