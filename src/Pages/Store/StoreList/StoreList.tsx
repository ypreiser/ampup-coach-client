import StoreItem from '../StoreItem/StoreItem';
import styles from './StoreList.module.css';
import stores from '../../../fakeData/storesData.json';

const StoreList = () => {
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
