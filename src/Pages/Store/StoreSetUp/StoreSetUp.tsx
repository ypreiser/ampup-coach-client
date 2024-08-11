// src/Pages/Store/StoreSetUp.tsx
import styles from './StoreSetUp.module.css';
import PrizeCard from '../PrizeCard/PrizeCard';
import storeData from '../../../fakeData/storesData.json';
import NewPrize from '../NewPrize/NewPrize';
import { usePopupStore } from '../../../store';

const StoreSetUp: React.FC = () => {
  // const storeId = location.pathname.split('/')[2]
  const store = storeData[0];
  const { prizes } = store;

  const { setPopUp } = usePopupStore();

  function handleNewCard() {
    console.log('new card');
    setPopUp({ title: 'New Card', component: <NewPrize /> });
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Store Set Up</h1>
        <button className={styles.saveButton}> ✔️ Save Store</button>
      </div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>My cards</th>
            <th>Price</th>
            <th>Amount per challenge</th>
            <th>When available</th>
            <th>Link/Text</th>
          </tr>
        </thead>
        <tbody>
          {prizes.map((prize, index) => (
            <PrizeCard
              key={index}
              quantity={prize.quantity}
              name={prize.name}
              description={prize.description}
              image={prize.image}
              coins={prize.coins}
              daysToExpiry={prize.daysToExpiry}
            />
          ))}
        </tbody>
      </table>
      <button className={styles.newCardButton} onClick={handleNewCard}>
        {' '}
        + New card
      </button>
    </div>
  );
};

export default StoreSetUp;
