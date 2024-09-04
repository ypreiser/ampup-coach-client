// src/components/PrizeCard/PrizeCard.tsx
import React from 'react';
import styles from './PrizeCard.module.css';

interface PrizeCardProps {
  name: string;
  description: string;
  image: string;
  price: number;
  daysToExpiry: number;
  quantity: number;
}

const PrizeCard: React.FC<PrizeCardProps> = ({
  name,
  daysToExpiry,
  image,
  price,
  quantity,
}) => {
  // const { name, daysToExpiry, image ,coins} = prize
  return (
    <tr className={styles.prizeCard}>
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
        {price}
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

export default PrizeCard;
