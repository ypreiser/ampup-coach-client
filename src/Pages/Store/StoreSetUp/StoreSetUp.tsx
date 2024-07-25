// src/Pages/Store/StoreSetUp.tsx
import styles from './StoreSetUp.module.css';
import ProductCard from '../ProductCard/ProductCard';
import storeData from '../../../fakeData/storesData.json';
import NewProduct from '../NewProduct/NewProduct';
import { usePopupStore } from '../../../store';

const StoreSetUp: React.FC = () => {
  // const storeId = location.pathname.split('/')[2]
  const store = storeData[0];
  const { products } = store;

  const { setPopUp } = usePopupStore();

  function handleNewCard() {
    console.log('new card');
    setPopUp({ title: 'New Card', component: <NewProduct /> });
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
          {products.map((product, index) => (
            <ProductCard
              key={index}
              quantity={product.quantity}
              name={product.name}
              description={product.description}
              image={product.image}
              coins={product.coins}
              daysToExpiry={product.daysToExpiry}
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
