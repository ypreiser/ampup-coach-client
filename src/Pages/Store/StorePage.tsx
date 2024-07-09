import StoreHeader from './/StoreHeader/StoreHeader';
import StoreList from './StoreList/StoreList';
import styles from './StorePage.module.css';

const StorePage = () => {
  return (
    <div className={styles.storePage}>
      <StoreHeader />
      <StoreList />
    </div>
  );
};

export default StorePage;
