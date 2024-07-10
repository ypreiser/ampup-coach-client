// src/Pages/Store/StoreSetUp.tsx
import React from 'react';
import styles from './StoreSetUp.module.css';
import ProductCard from '../ProductCard/ProductCard';
import storeData from '../../../fakeData/storesData.json'


const StoreSetUp: React.FC = () => {
    // const storeId = location.pathname.split('/')[2] 
    const store = storeData[0]
    console.log(store)
    const {products} = store

  return (
    <div className={styles.container}>
      <button className={styles.saveButton}>Save Store</button>
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
            <ProductCard key={index} quantity={product.quantity} name={product.name} description={product.description} image={product.image} coins={product.coins} daysToExpiry={product.daysToExpiry}  />
          ))}
        </tbody>
      </table>
      <button className={styles.newCardButton}>➕ New card</button>
    </div>
  );
};

export default StoreSetUp;
