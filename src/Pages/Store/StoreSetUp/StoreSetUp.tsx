// src/Pages/Store/StoreSetUp.tsx
import styles from './StoreSetUp.module.css';
import PrizeCard from '../PrizeCard/PrizeCard';
// import storeData from '../../../fakeData/storesData.json';
import NewPrize from '../NewPrize/NewPrize';
import { usePopupStore } from '../../../store';
import { useEffect, useState } from 'react';
import { apiRequest } from '../../../api/apiRequest';
import { useParams } from 'react-router-dom';

interface Store {
  prizes?: Array<{
    quantity: number;
    name: string;
    description: string;
    image: string;
    price: number;
    daysToExpiry: number;
    _id: string;
  }>;
}

const StoreSetUp: React.FC = () => {
  const { storeId } = useParams<{ storeId: string }>();
  const [store, setStore] = useState<Store>({});

  useEffect(() => {
    apiRequest({ method: 'GET', path: `/store/${storeId}` })
      .then((data) => {
        console.log('store: ', data);
        setStore(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
          {store.prizes?.map((prize) => (
            <PrizeCard
              key={prize._id}
              quantity={prize.quantity}
              name={prize.name}
              description={prize.description}
              image={prize.image}
              price={prize.price}
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
