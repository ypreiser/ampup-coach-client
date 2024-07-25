// src/components/ProductCard/ProductCard.tsx
import React from 'react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  coins: number;
  daysToExpiry: number;
  quantity: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  daysToExpiry,
  image,
  coins,
  quantity,
}) => {
  // const { name, daysToExpiry, image ,coins} = product
  return (
    <tr className={styles.productCard}>
      <td>
        <div className={styles.card}>
          <img src={image} alt={name} className={styles.cardImage} />
          <span>{name}</span>
        </div>
      </td>
      <td>
        <span role="img" aria-label="above">
          🪙
        </span>{' '}
        {coins}
      </td>
      <td>{quantity ? quantity : '♾️'}</td>
      <td>
        <span role="img" aria-label="calendar">
          📅
        </span>{' '}
        after {daysToExpiry} days
      </td>
      <td>link</td>
    </tr>
  );
};

export default ProductCard;
